import { motion } from "motion/react";
import { Brain, Target, TrendingUp, Shield, Zap, Eye, AlertCircle, BarChart3 } from "lucide-react";

const aiCapabilities = [
  {
    icon: Target,
    title: "Behavioral Prediction",
    description: "Analyzes transaction patterns, spending habits, and financial behaviors to anticipate your needs before you search.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Product Recommendations",
    description: "Context-aware matching engine surfaces the most relevant financial products at optimal decision moments.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Credit Risk Scoring",
    description: "Evaluates creditworthiness from operational data, cash flow velocity, and business health metrics.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: AlertCircle,
    title: "Fraud Detection",
    description: "Real-time anomaly detection and pattern recognition to protect users and providers.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Lifecycle Event Detection",
    description: "Identifies travel, education, business expansion triggers to suggest timely financial solutions.",
    color: "from-[#D4A43B] to-yellow-500"
  },
  {
    icon: Zap,
    title: "Intent Scoring",
    description: "Real-time calculation of purchase intent and product relevance for surgical targeting.",
    color: "from-indigo-500 to-violet-500"
  }
];

const ethicalPrinciples = [
  {
    title: "Explainable AI",
    description: "Every match comes with transparent reasoning—you understand why a product was recommended."
  },
  {
    title: "User Control",
    description: "You decide what data to share and when. AI assists, never decides for you."
  },
  {
    title: "Non-Discriminatory",
    description: "Fair, bias-tested algorithms that promote financial inclusion, not exclusion."
  },
  {
    title: "Privacy-First",
    description: "Anonymized analytics, encrypted data, zero unauthorized sharing with third parties."
  }
];

export function MatchIntelligencePage() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">AI Infrastructure</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Match Intelligence™
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            AI-driven matching engine that connects users with perfect-fit financial providers through behavioral analysis and intent prediction.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Match Intelligence™ is our proprietary AI system that analyzes user behavior, transaction patterns, and contextual signals to deliver intelligent, personalized financial product recommendations—ethically, transparently, and in real-time.
          </p>
        </motion.div>
      </section>

      {/* AI Capabilities */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Core AI Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning models power every match, every recommendation, every transaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4`}>
                <capability.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3 font-semibold">{capability.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Behavioral + Intent-Based Logic</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-level, non-technical explanation of our matching process
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3 font-semibold">1. Data Collection</h3>
                <p className="text-gray-300 leading-relaxed">
                  With your consent, we securely analyze transaction history from connected M-PESA and bank accounts. We track spending patterns, income cycles, cash flow velocity, and business health indicators.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3 font-semibold">2. AI Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI models detect lifecycle events (travel bookings, school fees, inventory purchases), predict financial needs, and calculate creditworthiness—all in real-time, using behavioral signals invisible to traditional scoring systems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3 font-semibold">3. Provider Compatibility Scoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  Each provider (bank, SACCO, insurer) has unique eligibility criteria, risk appetites, and product portfolios. Match Intelligence™ scores your compatibility with every provider and surfaces the top 3-5 matches—eliminating wasted applications and rejections.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3 font-semibold">4. Transparent Recommendations</h3>
                <p className="text-gray-300 leading-relaxed">
                  You see exactly why each product was recommended: "Based on your KES 150K monthly revenue and 12-month transaction history, you qualify for KES 500K working capital at 14% APR from Stima SACCO." No black boxes. Full transparency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethical AI */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Ethical & Explainable AI</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to responsible AI that empowers, not manipulates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ethicalPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl text-white mb-3 font-semibold flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4A43B]"></div>
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Match Accuracy" },
              { value: "<200ms", label: "Analysis Speed" },
              { value: "8+", label: "ML Models" },
              { value: "150+", label: "Provider Profiles" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#D4A43B] to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
