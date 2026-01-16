import { motion } from "motion/react";
import { Smartphone, CreditCard, QrCode, Coins, Zap, Shield, Globe, ArrowRight } from "lucide-react";

const paymentRails = [
  {
    icon: Smartphone,
    name: "M-PESA",
    description: "Seamless mobile money integration",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    name: "Airtel Money",
    description: "Multi-network mobile payments",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: CreditCard,
    name: "Cards",
    description: "Visa, Mastercard support",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    name: "Bank Transfers",
    description: "PesaLink direct transfers",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Coins,
    name: "Stablecoins",
    description: "USDT, USDC support",
    color: "from-[#D4A43B] to-yellow-500"
  },
  {
    icon: QrCode,
    name: "QR Payments",
    description: "Universal QR code system",
    color: "from-indigo-500 to-violet-500"
  }
];

const benefits = [
  {
    title: "Consolidated Integration",
    description: "One API replaces multiple fragmented payment gateway integrations",
    icon: Zap
  },
  {
    title: "Non-Custodial Architecture",
    description: "Funds move directly between users and providers—PataPesa never holds money",
    icon: Shield
  },
  {
    title: "Fee Transparency",
    description: "Clear, predictable routing + network costs with no hidden charges",
    icon: Globe
  }
];

export function PesaDirectPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
            <Zap className="w-5 h-5 text-[#D4A43B]" />
            <span className="text-[#D4A43B] font-semibold">Payment Infrastructure</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            PesaDirect™
          </h1>
          <p className="text-2xl text-gray-300 mb-8 font-semibold">
            Providing the non-custodial pipes for Africa's leading financial institutions.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            PesaDirect™ is our proprietary settlement and orchestration layer that enables seamless, multi-channel payment routing. Direct-to-provider settlement with <strong className="text-white">no custody, no float</strong>—just intelligent routing infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Payment Rails */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Supported Payment Rails</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect to every major payment method in Africa through a single, unified API
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paymentRails.map((rail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${rail.color} flex items-center justify-center mb-4`}>
                <rail.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2 font-semibold">{rail.name}</h3>
              <p className="text-gray-300 text-sm">{rail.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Non-Custodial Flow Diagram */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Non-Custodial Payment Flow</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            PataPesa routes payments—we never hold, store, or control your funds
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">User</span>
              </div>
              <p className="text-gray-300 text-sm">Initiates Payment</p>
            </motion.div>

            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-[#D4A43B] mx-auto" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <p className="text-gray-300 text-sm font-semibold">PesaDirect™</p>
              <p className="text-gray-400 text-xs">Routes & Orchestrates</p>
            </motion.div>

            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-[#D4A43B] mx-auto" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">Provider</span>
              </div>
              <p className="text-gray-300 text-sm">Receives Payment</p>
            </motion.div>
          </div>

          <div className="mt-8 p-4 bg-[#D4A43B]/10 border border-[#D4A43B]/30 rounded-lg">
            <p className="text-center text-gray-200">
              <strong className="text-[#D4A43B]">Zero Custody:</strong> Funds move directly between user and provider. PataPesa provides intelligent routing infrastructure—not a wallet.
            </p>
          </div>
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
          <h2 className="text-4xl text-white mb-4">Why PesaDirect™</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#003366] to-[#003366]/80 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-[#D4A43B]" />
              </div>
              <h3 className="text-2xl text-white mb-3 font-semibold">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fee Transparency */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-8 border border-[#D4A43B]/30"
        >
          <h3 className="text-3xl text-white mb-6 text-center">Fee Transparency</h3>
          <div className="bg-white/5 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-gray-300">Routing + Network Costs</span>
              <span className="text-[#D4A43B] font-bold text-lg">1.5%</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-gray-300">Included: M-PESA, PesaLink, Card Fees</span>
              <span className="text-green-400 font-semibold">All-Inclusive</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Hidden Charges</span>
              <span className="text-white font-bold">KES 0</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            One predictable fee covering all third-party network charges + orchestration technology
          </p>
        </motion.div>
      </section>
    </div>
  );
}