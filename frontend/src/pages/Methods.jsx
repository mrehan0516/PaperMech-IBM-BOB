import { motion } from 'framer-motion';
import { Brain, TrendingUp, GitBranch, BarChart3, Zap, Shield } from 'lucide-react';

function Methods() {
  const methodCards = [
    {
      icon: TrendingUp,
      title: "What is a P-Value?",
      description: "The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true.",
      details: [
        "P < 0.05: Statistically significant",
        "Measures evidence against null hypothesis",
        "Not the probability hypothesis is true"
      ],
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "Independent T-Test",
      description: "Compares means between two independent groups to determine if there is statistical evidence that the associated population means are significantly different.",
      details: [
        "Assumes normal distribution",
        "Equal variance between groups",
        "Independent observations"
      ],
      color: "blue"
    },
    {
      icon: GitBranch,
      title: "Bayesian Routing",
      description: "Uses Bayesian inference to dynamically select the most appropriate statistical test based on data characteristics and research design.",
      details: [
        "Adaptive test selection",
        "Incorporates prior knowledge",
        "Probabilistic decision making"
      ],
      color: "purple"
    },
    {
      icon: Brain,
      title: "Effect Size Calculation",
      description: "Quantifies the magnitude of the difference between groups, providing context beyond statistical significance.",
      details: [
        "Cohen's d for t-tests",
        "Measures practical significance",
        "Independent of sample size"
      ],
      color: "green"
    },
    {
      icon: Zap,
      title: "Power Analysis",
      description: "Determines the probability of detecting an effect if one truly exists, helping assess study reliability.",
      details: [
        "Minimum sample size estimation",
        "Type II error control",
        "Study design optimization"
      ],
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Confidence Intervals",
      description: "Provides a range of plausible values for the population parameter, offering more information than point estimates alone.",
      details: [
        "95% CI standard in research",
        "Quantifies uncertainty",
        "Complements hypothesis testing"
      ],
      color: "red"
    }
  ];

  const colorClasses = {
    orange: {
      border: "border-orange-500/30",
      icon: "text-orange-500",
      hover: "hover:border-orange-500/60",
      glow: "hover:shadow-orange-500/20"
    },
    blue: {
      border: "border-blue-500/30",
      icon: "text-blue-500",
      hover: "hover:border-blue-500/60",
      glow: "hover:shadow-blue-500/20"
    },
    purple: {
      border: "border-purple-500/30",
      icon: "text-purple-500",
      hover: "hover:border-purple-500/60",
      glow: "hover:shadow-purple-500/20"
    },
    green: {
      border: "border-green-500/30",
      icon: "text-green-500",
      hover: "hover:border-green-500/60",
      glow: "hover:shadow-green-500/20"
    },
    yellow: {
      border: "border-yellow-500/30",
      icon: "text-yellow-500",
      hover: "hover:border-yellow-500/60",
      glow: "hover:shadow-yellow-500/20"
    },
    red: {
      border: "border-red-500/30",
      icon: "text-red-500",
      hover: "hover:border-red-500/60",
      glow: "hover:shadow-red-500/20"
    }
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Statistical <span className="text-orange-500">Methods</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Understanding the mathematical foundations powering autonomous research verification
          </p>
        </motion.div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodCards.map((method, index) => {
            const Icon = method.icon;
            const colors = colorClasses[method.color];
            
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className={`bg-black/40 backdrop-blur-md border ${colors.border} ${colors.hover} ${colors.glow} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                  <h3 className="text-xl font-bold text-white">{method.title}</h3>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <div className="space-y-2">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.icon} mt-2 flex-shrink-0`} />
                      <span className="text-white/60 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why These Methods Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                The Reproducibility Crisis
              </h3>
              <p className="text-white/70 leading-relaxed">
                Modern science faces a critical challenge: many published findings cannot be replicated. 
                By automating statistical verification with rigorous mathematical methods, PaperMech 
                helps restore trust in scientific research.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                Automated Verification
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our engine doesn't just run tests—it intelligently selects the appropriate statistical 
                method based on your data structure, sample size, and research design. This ensures 
                accurate, reliable verification every time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Formula Showcase */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8 bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Core Statistical Formula
          </h3>
          <div className="bg-black/60 rounded-xl p-6 inline-block">
            <code className="text-orange-500 text-2xl font-mono">
              t = (x̄₁ - x̄₂) / √(s²/n₁ + s²/n₂)
            </code>
          </div>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            The independent t-test statistic, where x̄ represents sample means, 
            s² is variance, and n is sample size
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Methods;

// Made with Bob
