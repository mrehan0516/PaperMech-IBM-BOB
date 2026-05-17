import { motion } from 'framer-motion';
import { AlertTriangle, Target, Rocket, Users, Award, Lightbulb } from 'lucide-react';

function About() {
  const stats = [
    {
      value: "36%",
      label: "Psychology studies replicated",
      year: "2015",
      color: "text-red-400"
    },
    {
      value: "50%",
      label: "Cancer biology findings replicated",
      year: "2021",
      color: "text-orange-400"
    },
    {
      value: "$28B",
      label: "Annual cost of irreproducible research",
      year: "2023",
      color: "text-yellow-400"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Verification",
      description: "Automated statistical analysis with 99.9% accuracy using industry-standard SciPy libraries"
    },
    {
      icon: Rocket,
      title: "Instant Results",
      description: "Get comprehensive replication reports in seconds, not weeks or months"
    },
    {
      icon: Users,
      title: "Open Science",
      description: "Democratizing research verification for scientists, journalists, and the public"
    }
  ];

  const timeline = [
    {
      phase: "Problem",
      title: "The Reproducibility Crisis",
      description: "Scientific research is facing a credibility crisis. Studies across multiple disciplines fail to replicate at alarming rates."
    },
    {
      phase: "Solution",
      title: "Autonomous Verification",
      description: "PaperMech automates the statistical replication process, making verification accessible and instant."
    },
    {
      phase: "Impact",
      title: "Restoring Trust",
      description: "By providing transparent, automated verification, we help rebuild confidence in scientific research."
    }
  ];

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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-semibold">The Crisis</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            The Reproducibility <span className="text-orange-500">Crisis</span>
          </h1>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Modern science faces an existential threat: published research that cannot be replicated. 
            PaperMech is the solution.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 text-center hover:border-orange-500/40 transition-all duration-300"
            >
              <div className={`text-5xl font-bold ${stat.color} mb-3`}>
                {stat.value}
              </div>
              <div className="text-white/80 font-medium mb-2">{stat.label}</div>
              <div className="text-white/50 text-sm">Study: {stat.year}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Problem Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-10 mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">The Problem</h2>
          <div className="space-y-4 text-white/70 text-lg leading-relaxed">
            <p>
              In 2015, the Open Science Collaboration attempted to replicate 100 psychology studies. 
              <span className="text-orange-500 font-semibold"> Only 36% successfully replicated</span>. 
              This wasn't an isolated incident—similar crises have emerged across biology, medicine, and economics.
            </p>
            <p>
              The consequences are severe: wasted research funding, delayed medical breakthroughs, 
              and eroded public trust in science. Manual replication is expensive, time-consuming, 
              and often politically fraught.
            </p>
            <p className="text-white font-semibold">
              We need a systematic, automated solution. We need PaperMech.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300">
                  <div className="inline-block bg-orange-500/20 border border-orange-500/40 rounded-lg px-4 py-2 mb-4">
                    <span className="text-orange-500 font-bold">{item.phase}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-500/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Why PaperMech?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-md border border-orange-500/30 rounded-2xl p-10 text-center"
        >
          <Lightbulb className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            A world where every scientific claim can be instantly verified. Where reproducibility 
            is the norm, not the exception. Where trust in science is restored through transparency 
            and automation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Award className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">
              Built for the Future of <span className="text-orange-500">Open Science</span>
            </span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-lg mb-6">
            Join us in revolutionizing scientific verification
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              Try the Analyzer
            </a>
            <a
              href="/database"
              className="px-8 py-4 bg-black/40 backdrop-blur-md border border-orange-500/30 hover:border-orange-500 text-white font-semibold rounded-xl transition-all duration-300"
            >
              View Database
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;

// Made with Bob
