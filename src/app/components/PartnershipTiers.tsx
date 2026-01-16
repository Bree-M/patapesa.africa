import { motion } from "motion/react";
import { Check, TrendingUp, Zap, Crown } from "lucide-react";

const tiers = [
  {
    name: "Tier 1: Marketplace",
    subtitle: "Rapid Entry & Visibility",
    icon: TrendingUp,
    setupFee: "KES 25,000",
    monthlyFee: "KES 60,000",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Product listing on marketplace",
      "Basic AI matching",
      "Standard analytics dashboard",
      "Email support",
      "Monthly performance reports"
    ],
    popular: false
  },
  {
    name: "Tier 2: API Integrated",
    subtitle: "Automation & Efficiency",
    icon: Zap,
    setupFee: "KES 150,000",
    monthlyFee: "KES 150,000",
    color: "from-purple-500 to-pink-500",
    features: [
      "Full API integration",
      "Advanced AI matching",
      "Real-time analytics & KPIs",
      "Direct CRM integration",
      "Webhook notifications",
      "Priority support",
      "A/B testing capabilities"
    ],
    popular: true
  },
  {
    name: "Tier 3: Branded Branch",
    subtitle: "Brand Dominance & Priority",
    icon: Crown,
    setupFee: "KES 200,000",
    monthlyFee: "KES 300,000",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Dedicated branded section",
      "Premium placement priority",
      "Custom product optimization",
      "White-label options",
      "Dedicated account manager",
      "Custom analytics & reporting",
      "Strategic partnership benefits",
      "Co-marketing opportunities"
    ],
    popular: false
  }
];

const transactionFees = [
  {
    type: "Referral/Success Fee",
    rate: "1.5%",
    description: "Performance-based fee on successful AI matches"
  },
  {
    type: "PesaDirect™ Routing Fee",
    rate: "1.5%",
    description: "All-inclusive processing (M-PESA, banks, cards)"
  }
];

export function PartnershipTiers() {
  return (
    <section className="py-20" id="partnerships">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Partnership Tiers
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Flexible partnership models designed for growth and scale
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                tier.popular ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20' : 'border-white/10'
              } hover:border-purple-400/50 transition-all`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                <tier.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl text-white mb-1">{tier.name}</h3>
              <p className="text-purple-300 text-sm mb-6">{tier.subtitle}</p>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-1">Setup Fee</div>
                <div className="text-2xl text-white font-bold mb-3">{tier.setupFee}</div>
                <div className="text-sm text-gray-400 mb-1">Monthly Fee</div>
                <div className="text-3xl text-white font-bold">{tier.monthlyFee}</div>
                <div className="text-xs text-gray-400 mt-1">*Exclusive of 16% VAT</div>
              </div>

              <div className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all ${
                  tier.popular
                    ? `bg-gradient-to-r ${tier.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Transaction Fees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Transaction Fee Structure</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {transactionFees.map((fee, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg text-white font-semibold">{fee.type}</h4>
                  <div className="text-2xl text-purple-400 font-bold">{fee.rate}</div>
                </div>
                <p className="text-gray-300 text-sm">{fee.description}</p>
              </div>
            ))}
          </div>

          {/* Example Calculation */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg text-white mb-4">Sample Transaction (KES 10,000 Disbursement)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Transaction Value</span>
                <span className="text-white font-semibold">KES 10,000.00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Referral Fee (1.5%)</span>
                <span className="text-white font-semibold">KES 150.00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Routing Fee (1.5%)</span>
                <span className="text-white font-semibold">KES 150.00</span>
              </div>
              <div className="border-t border-white/20 pt-2 mt-2 flex justify-between">
                <span className="text-white font-semibold">Total Service Cost</span>
                <span className="text-purple-400 font-bold">KES 300.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white font-semibold">Net to Institution</span>
                <span className="text-green-400 font-bold">KES 9,700.00</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap gap-8 justify-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div>
              <div className="text-3xl text-purple-400 font-bold mb-1">~70%</div>
              <div className="text-sm text-gray-300">Cost Reduction vs Traditional</div>
            </div>
            <div>
              <div className="text-3xl text-pink-400 font-bold mb-1">14 Days</div>
              <div className="text-sm text-gray-300">Setup Time (vs 6-12 Months)</div>
            </div>
            <div>
              <div className="text-3xl text-green-400 font-bold mb-1">95%</div>
              <div className="text-sm text-gray-300">Match Quality</div>
            </div>
            <div>
              <div className="text-3xl text-blue-400 font-bold mb-1">40%</div>
              <div className="text-sm text-gray-300">Total Efficiency Gain</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
