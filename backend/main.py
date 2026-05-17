from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
from scipy import stats
from typing import Dict, List, Any
import re

app = FastAPI(title="PaperMech API", version="1.0.0")

# Configure CORS to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyzeRequest(BaseModel):
    arxiv_id: str


def fetch_arxiv(arxiv_id: str) -> Dict[str, Any]:
    """
    Scrapes ar5iv.org for the given arXiv ID and extracts:
    - title
    - abstract
    - text from sections containing 'method' or 'result' in the heading
    """
    url = f"https://ar5iv.org/abs/{arxiv_id}"
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch arXiv paper: {str(e)}")
    
    soup = BeautifulSoup(response.content, 'lxml')
    
    # Extract title
    title_tag = soup.find('h1', class_='ltx_title')
    title = title_tag.get_text(strip=True) if title_tag else "Title not found"
    
    # Extract abstract
    abstract_tag = soup.find('div', class_='ltx_abstract')
    abstract = ""
    if abstract_tag:
        # Get text from abstract, excluding the "Abstract" label
        abstract_paragraphs = abstract_tag.find_all('p')
        abstract = ' '.join([p.get_text(strip=True) for p in abstract_paragraphs])
    
    if not abstract:
        abstract = "Abstract not found"
    
    # Extract sections with 'method' or 'result' in heading
    relevant_sections = []
    sections = soup.find_all(['section', 'div'], class_=re.compile(r'ltx_section'))
    
    for section in sections:
        heading = section.find(['h2', 'h3', 'h4', 'h5'], class_=re.compile(r'ltx_title'))
        if heading:
            heading_text = heading.get_text(strip=True).lower()
            if 'method' in heading_text or 'result' in heading_text:
                # Extract all paragraphs from this section
                paragraphs = section.find_all('p')
                section_text = ' '.join([p.get_text(strip=True) for p in paragraphs])
                relevant_sections.append({
                    'heading': heading.get_text(strip=True),
                    'text': section_text
                })
    
    return {
        'title': title,
        'abstract': abstract,
        'relevant_sections': relevant_sections
    }


def extract_parameters(text: str) -> Dict[str, Any]:
    """
    Mocks an LLM call to extract statistical parameters from text.
    Returns hardcoded values for demonstration purposes.
    """
    # Mock LLM response - hardcoded as requested
    return {
        "statistical_test": "independent_ttest",
        "group_means": [7.2, 6.1],
        "group_standard_deviations": [1.4, 1.6],
        "group_sizes": [25, 23],
        "reported_p_value": 0.009,
        "complexity_score": 4
    }


def run_scipy_test(extraction: Dict[str, Any]) -> Dict[str, Any]:
    """
    Runs scipy.stats.ttest_ind_from_stats using extracted parameters
    and compares computed p-value with reported p-value.
    """
    try:
        # Extract parameters
        means = extraction.get('group_means', [])
        stds = extraction.get('group_standard_deviations', [])
        sizes = extraction.get('group_sizes', [])
        reported_p = extraction.get('reported_p_value')
        
        if len(means) != 2 or len(stds) != 2 or len(sizes) != 2:
            raise ValueError("Invalid group data: need exactly 2 groups")
        
        # Run independent t-test from summary statistics
        t_stat, computed_p = stats.ttest_ind_from_stats(
            mean1=means[0],
            std1=stds[0],
            nobs1=sizes[0],
            mean2=means[1],
            std2=stds[1],
            nobs2=sizes[1]
        )
        
        # Compare computed vs reported p-value
        if reported_p is None:
            verdict = "NO_REPORTED_VALUE"
            difference = None
        else:
            difference = abs(computed_p - reported_p)
            verdict = "REPLICATES" if difference < 0.05 else "DISCREPANCY"
        
        return {
            "computed_p": float(computed_p),
            "reported_p": reported_p,
            "t_statistic": float(t_stat),
            "difference": float(difference) if difference is not None else None,
            "verdict": verdict
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Statistical test failed: {str(e)}")


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "PaperMech API is running",
        "version": "1.0.0",
        "endpoints": ["/analyze"]
    }


@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    """
    Main endpoint that:
    1. Fetches arXiv paper content
    2. Extracts statistical parameters (mocked)
    3. Runs scipy statistical test
    4. Returns combined results
    """
    try:
        # Step 1: Fetch arXiv paper
        paper_data = fetch_arxiv(request.arxiv_id)
        
        # Step 2: Extract parameters (mocked LLM call)
        # Combine abstract and relevant sections for extraction
        full_text = paper_data['abstract']
        for section in paper_data['relevant_sections']:
            full_text += " " + section['text']
        
        extracted_params = extract_parameters(full_text)
        
        # Step 3: Run scipy test
        test_results = run_scipy_test(extracted_params)
        
        # Step 4: Return combined results
        return {
            "arxiv_id": request.arxiv_id,
            "paper_info": {
                "title": paper_data['title'],
                "abstract": paper_data['abstract'][:500] + "..." if len(paper_data['abstract']) > 500 else paper_data['abstract'],
                "sections_analyzed": len(paper_data['relevant_sections'])
            },
            "extracted_parameters": extracted_params,
            "statistical_analysis": test_results,
            "status": "success"
        }
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# Made with Bob
