import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle2, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

function Database() {
  const [searchQuery, setSearchQuery] = useState('');

  const mockData = [
    {
      id: 1,
      title: "Deep Learning for Medical Image Analysis",
      arxivId: "2301.12345",
      test: "Independent T-Test",
      verdict: "REPLICATES",
      pValue: 0.009,
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Cryptography",
      arxivId: "2302.45678",
      test: "Chi-Square Test",
      verdict: "DISCREPANCY",
      pValue: 0.087,
      date: "2024-03-14"
    },
    {
      id: 3,
      title: "Neural Network Optimization Techniques",
      arxivId: "2303.78901",
      test: "ANOVA",
      verdict: "REPLICATES",
      pValue: 0.003,
      date: "2024-03-13"
    },
    {
      id: 4,
      title: "Climate Model Predictions Using ML",
      arxivId: "2304.23456",
      test: "Paired T-Test",
      verdict: "PARTIAL",
      pValue: 0.042,
      date: "2024-03-12"
    },
    {
      id: 5,
      title: "Reinforcement Learning in Robotics",
      arxivId: "2305.67890",
      test: "Independent T-Test",
      verdict: "REPLICATES",
      pValue: 0.011,
      date: "2024-03-11"
    }
  ];

  const getVerdictBadge = (verdict) => {
    const configs = {
      REPLICATES: {
        icon: CheckCircle2,
        color: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'border-green-500/40',
        glow: 'shadow-green-500/20'
      },
      DISCREPANCY: {
        icon: XCircle,
        color: 'text-red-400',
        bg: 'bg-red-500/20',
        border: 'border-red-500/40',
        glow: 'shadow-red-500/20'
      },
      PARTIAL: {
        icon: AlertCircle,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-500/40',
        glow: 'shadow-yellow-500/20'
      }
    };

    const config = configs[verdict];
    const Icon = config.icon;

    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${config.bg} ${config.border} border ${config.glow} shadow-lg`}>
        <Icon className={`w-4 h-4 ${config.color}`} />
        <span className={`font-semibold ${config.color}`}>{verdict}</span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Verification <span className="text-orange-500">Ledger</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Complete history of verified research papers and their replication status
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, ArXiv ID, or test type..."
                className="w-full bg-black/60 border border-orange-500/30 rounded-lg px-12 py-3 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-orange-500/20">
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">Title</th>
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">ArXiv ID</th>
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">Statistical Test</th>
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">P-Value</th>
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">Verdict</th>
                  <th className="text-left px-6 py-4 text-orange-500 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((paper, index) => (
                  <motion.tr
                    key={paper.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{paper.title}</span>
                        <ExternalLink className="w-4 h-4 text-orange-500/50 hover:text-orange-500 cursor-pointer transition-colors" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-orange-500 font-mono">{paper.arxivId}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white/80">{paper.test}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white/80 font-mono">{paper.pValue}</span>
                    </td>
                    <td className="px-6 py-4">
                      {getVerdictBadge(paper.verdict)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white/60">{paper.date}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">3</div>
            <div className="text-white/70">Replicated</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-red-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">1</div>
            <div className="text-white/70">Discrepancies</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-white/70">Partial Match</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Database;

// Made with Bob
