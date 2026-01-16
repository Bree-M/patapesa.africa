import { motion } from "motion/react";
import { Brain, Target, TrendingUp, Shield, Users, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Match Intelligence™",
    description: "Proprietary AI matching algorithm for contextual product recommendations",
    stats: "95% Match Quality"
  },
  {
    icon: Target,
    title: "Behavioral Prediction",
    description: "Transaction pattern analysis and financial needs anticipation",
    stats: "Real-Time Intent Scoring"
  },
  {
    icon: TrendingUp,
    title: "Risk Scoring",
    description: "Creditworthiness assessment from operational data and cash flow velocity",
    stats: "Automated Scoring"
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Anomaly detection and transaction monitoring for security",
    stats: "24/7 Monitoring"
  },
  {
    icon: Users,
    title: "User Segmentation",
    description: "Clustering algorithms for precise targeting and personalization",
    stats: "Dynamic Segments"
  },
  {
    icon: Sparkles,
    title: "Lifecycle Detection",
    description: "Identify travel, education, business expansion triggers automatically",
    stats: "Event Anticipation"
  }
];

export function AICapabilities() {
  return (
    <section className="py-20" id="ai-capabilities">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">AI-Powered Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Match Intelligence™ Engine
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Advanced machine learning for precision matching and predictive insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4"
                >
                  <capability.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {capability.description}
                </p>
                <div className="inline-flex px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">
                  <span className="text-xs text-purple-300 font-semibold">{capability.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ML Infrastructure Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-purple-400 mb-2">~70%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl text-pink-400 mb-2">~40%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Match Quality</div>
            </div>
            <div>
              <div className="text-3xl text-green-400 mb-2">Real-Time</div>
              <div className="text-sm text-gray-300">Processing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
