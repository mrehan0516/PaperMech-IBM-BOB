import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Microscope } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Database from './pages/Database';
import Methods from './pages/Methods';
import About from './pages/About';

function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/database', label: 'Database' },
    { path: '/methods', label: 'Methods' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Microscope className="w-8 h-8 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold text-white">
              Paper<span className="text-orange-500">Mech</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-all duration-300 relative ${
                  location.pathname === link.path
                    ? 'text-orange-500'
                    : 'text-white/80 hover:text-orange-500'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        <div className="pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/database" element={<Database />} />
              <Route path="/methods" element={<Methods />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Made with Bob
