import { motion } from "motion/react";
import { Brain, Target, CheckCircle, ArrowRight } from "lucide-react";

const intelligenceSteps = [
  {
    icon: Target,
    title: "Intent Capture",
    description: "Our AI analyzes transaction patterns, behavioral signals, and contextual data to understand your financial needs—before you even ask.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: CheckCircle,
    title: "Eligibility & Matching",
    description: "Match Intelligence™ evaluates creditworthiness, risk profile, and compatibility to connect you with the best-fit providers in real-time.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ArrowRight,
    title: "Provider Routing",
    description: "Direct, non-custodial transaction routing via PesaDirect™—funds move between you and providers. PataPesa never holds your money.",
    color: "from-[#D4A43B] to-yellow-500"
  }
];

export function IntelligenceLayer() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">The Intelligence Layer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            How Match Intelligence™ Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered infrastructure that understands intent, matches eligibility, 
            and routes transactions—all without taking custody of your funds.
          </p>
        </motion.div>

        {/* Visual Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines - Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-[#D4A43B] -translate-y-1/2 opacity-20"></div>

            {intelligenceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#D4A43B]/50 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto relative z-10`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4 text-center font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-[#D4A43B] font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Arrow - Mobile */}
                {index < intelligenceSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-[#D4A43B] rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { label: "Real-Time Analysis", value: "<200ms" },
            { label: "Match Accuracy", value: "95%+" },
            { label: "Non-Custodial", value: "100%" },
            { label: "Provider Network", value: "150+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#D4A43B] to-yellow-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            High-level, non-technical infrastructure—built for trust, transparency, and speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
