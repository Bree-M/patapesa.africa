import { motion } from "motion/react";
import { UserPlus, Link2, Sparkles, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Connect Your World",
    description: "Securely link your M-PESA and bank accounts. Our non-custodial architecture means we never hold your funds.",
    details: [
      "Email or phone verification",
      "Secure account linking (optional)",
      "Profile creation with financial goals",
      "Privacy-first data protection"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    icon: Sparkles,
    title: "AI Learns Your Lifestyle",
    description: "Match Intelligence™ analyzes your transaction patterns, business needs, and financial behavior to understand what you need.",
    details: [
      "Transaction pattern analysis",
      "Behavioral prediction models",
      "Risk scoring & creditworthiness",
      "Lifecycle event detection"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Get Matched to Perfect Products",
    description: "Receive personalized recommendations from verified providers. One-click application routing to the right financial services.",
    details: [
      "Real-time product recommendations",
      "Instant provider comparison",
      "One-click applications",
      "Transparent pricing & terms"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Save Time",
    description: "No more visiting multiple banks or downloading numerous apps"
  },
  {
    icon: CheckCircle,
    title: "Save Money",
    description: "Compare rates and find the best deals in real-time"
  },
  {
    icon: CheckCircle,
    title: "Build Your Financial Passport™",
    description: "Transform operational data into financing opportunities"
  },
  {
    icon: CheckCircle,
    title: "Stay Secure",
    description: "Non-custodial architecture with enterprise-grade encryption"
  }
];

export function HowItWorks() {
  return (
    <div className="py-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            How PataPesa Works
          </h1>
          <p className="text-xl text-gray-300">
            Three simple steps to smarter financial decisions powered by AI
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 mb-20">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full mb-4`}>
                    <span className="text-white font-bold">Step {step.step}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl text-white mb-4">{step.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{step.description}</p>
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                        <span className="text-gray-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${step.color} bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 flex items-center justify-center`}
                  >
                    <step.icon className="w-32 h-32 text-white" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center my-8"
                >
                  <ArrowRight className="w-8 h-8 text-[#D4A43B] rotate-90" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Why Choose PataPesa?</h2>
          <p className="text-xl text-gray-300">The benefits that matter most</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <benefit.icon className="w-12 h-12 text-[#D4A43B] mb-4" />
              <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-12 text-center border border-[#D4A43B]/30"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Ready to Transform Your Financial Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already benefiting from PataPesa
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
