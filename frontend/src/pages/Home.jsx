import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';
import axios from 'axios';

function Home() {
  const [arxivId, setArxivId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!arxivId.trim()) return;
    
    setIsLoading(true);
    setResult(null);

    // Mock API call with setTimeout
    setTimeout(() => {
      const mockResult = {
        test: "Independent T-Test",
        verdict: "REPLICATES",
        p_value: 0.009,
        arxiv_id: arxivId,
        confidence: 95.8,
        sample_size: 247
      };
      setResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Verify Any Claim.{' '}
            <span className="text-orange-500 inline-block">
              Instantly.
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Autonomous statistical replication engine powered by SciPy. 
            Enter an ArXiv ID and watch the magic happen.
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/50" />
                <input
                  type="text"
                  value={arxivId}
                  onChange={(e) => setArxivId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                  placeholder="Enter ArXiv ID (e.g., 2301.12345)"
                  className="w-full bg-black/60 border border-orange-500/30 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={isLoading || !arxivId.trim()}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/30 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <Loader2 className="w-16 h-16 text-orange-500 animate-spin mx-auto mb-6" />
            <p className="text-2xl text-white font-medium mb-2">
              Running SciPy Execution...
            </p>
            <p className="text-white/60">
              Parsing paper • Extracting statistics • Running tests
            </p>
          </motion.div>
        )}

        {/* Results Section */}
        {result && !isLoading && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {/* Parameters Card */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-white">Parameters</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Statistical Test</span>
                  <span className="text-white font-semibold">{result.test}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">P-Value</span>
                  <span className="text-orange-500 font-bold">{result.p_value}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Confidence</span>
                  <span className="text-white font-semibold">{result.confidence}%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Sample Size</span>
                  <span className="text-white font-semibold">{result.sample_size}</span>
                </div>
              </div>
            </motion.div>

            {/* Verdict Card */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`bg-black/40 backdrop-blur-md border rounded-2xl p-8 ${
                result.verdict === 'REPLICATES'
                  ? 'border-green-500/40 shadow-lg shadow-green-500/20'
                  : 'border-red-500/40 shadow-lg shadow-red-500/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                {result.verdict === 'REPLICATES' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
                <h3 className="text-2xl font-bold text-white">Verdict</h3>
              </div>
              <div className="text-center py-8">
                <div
                  className={`inline-block px-8 py-4 rounded-xl font-bold text-2xl ${
                    result.verdict === 'REPLICATES'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                      : 'bg-red-500/20 text-red-400 border border-red-500/40'
                  }`}
                >
                  {result.verdict}
                </div>
                <p className="text-white/70 mt-6 text-lg">
                  {result.verdict === 'REPLICATES'
                    ? 'Statistical claims successfully verified. Results are reproducible with high confidence.'
                    : 'Discrepancy detected. Original claims could not be replicated with provided data.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Info Cards */}
        {!result && !isLoading && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
          >
            {[
              {
                title: 'Instant Verification',
                description: 'Automated statistical analysis in seconds',
                icon: '⚡'
              },
              {
                title: 'SciPy Powered',
                description: 'Industry-standard statistical computing',
                icon: '🔬'
              },
              {
                title: 'Transparent Results',
                description: 'Full breakdown of every calculation',
                icon: '📊'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-6 text-center hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                <p className="text-white/60">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Home;

// Made with Bob
