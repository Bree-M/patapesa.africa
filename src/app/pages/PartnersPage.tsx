import { motion } from "motion/react";
import { Check, AlertCircle, Shield, TrendingUp, Zap, Crown, ChevronDown } from "lucide-react";
import { useState } from "react";

const partnershipTiers = [
  {
    name: "Marketplace (Standard)",
    subtitle: "Rapid Entry & Visibility",
    setupFee: "KES 25,000",
    subscription: "KES 60,000 / Month",
    color: "from-blue-500 to-cyan-500",
    icon: Zap,
    features: [
      "Basic marketplace listing",
      "Product visibility to matched users",
      "Standard analytics dashboard",
      "Email support",
      "Community access"
    ]
  },
  {
    name: "API Integrated (Institutional)",
    subtitle: "Automation & Efficiency",
    setupFee: "KES 150,000",
    subscription: "KES 450,000 / Quarter",
    monthlyEquivalent: "(Equivalent to 150k/mo)",
    color: "from-purple-500 to-pink-500",
    icon: TrendingUp,
    featured: true,
    features: [
      "Full API integration",
      "Automated Match Intelligence™ routing",
      "Advanced analytics & insights",
      "Priority support",
      "Custom product mapping",
      "14-Day Rapid Integration Journey"
    ]
  },
  {
    name: "Branded Branch (Enterprise)",
    subtitle: "Brand Dominance & Priority",
    setupFee: "KES 200,000",
    subscription: "KES 900,000 / Quarter",
    monthlyEquivalent: "(Equivalent to 300k/mo)",
    color: "from-[#D4A43B] to-yellow-500",
    icon: Crown,
    features: [
      "Everything in API Integrated",
      "Dedicated branded storefront",
      "Premium placement priority",
      "Dedicated account manager",
      "White-label options",
      "Co-marketing opportunities",
      "Custom Match Intelligence™ calibration",
      "Board-level reporting"
    ]
  }
];

const faqs = [
  {
    question: "Why is the Institutional & Enterprise tier billed quarterly?",
    answer: "To ensure the highest level of ROI for our Tier-1 partners, PataPesa operates on a 12-Month Strategic Optimization Cycle. Quarterly billing allows for:",
    details: [
      "Match Intelligence™ Calibration: Our AI requires consistent data loops to refine lead quality. Quarterly cycles allow us to adjust matching parameters based on your specific portfolio performance.",
      "Ecosystem Stability: We prioritize long-term infrastructure stability over short-term \"ad-hoc\" placements, ensuring your products have a persistent, high-authority storefront.",
      "Administrative Efficiency: Quarterly cycles align with institutional procurement and audit workflows, reducing the overhead of monthly invoicing."
    ]
  },
  {
    question: "What is included in the Setup Fee?",
    answer: "The initial investment (e.g., KES 200,000 for Tier 3) covers the 14-Day Rapid Integration Journey. This includes:",
    details: [
      "Deployment of the Non-Invasive API Bridge.",
      "Custom Product Mapping to match your risk appetite.",
      "Security credentialing for ODPC and CBK 2026 compliance.",
      "Full activation of your Merchant Command Center dashboard."
    ]
  },
  {
    question: "Is the KYC process automated?",
    answer: "While our Match Intelligence™ identifies high-intent users, KYC is strictly necessary for all final conversions. Per the Strategic Infrastructure Agreement (Ref: CF/2026/INST-01), your institution maintains final sovereign control over underwriting and regulatory verification to ensure 100% compliance."
  },
  {
    question: "Can we upgrade from Tier 1 to Tier 3 later?",
    answer: "Yes. Partners can scale their presence at any time. Moving to the Branded Branch (Enterprise) tier unlocks premium placement priority and dedicated account management to maximize your acquisition volume."
  }
];

export function PartnersPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
            <Shield className="w-5 h-5 text-[#D4A43B]" />
            <span className="text-[#D4A43B] font-semibold">Partnership Tiers</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl text-white mb-6 font-bold">
            Partnership Tiers
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Flexible partnership models designed for growth and scale
          </p>
        </motion.div>
      </section>

      {/* Partnership Tiers */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {partnershipTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                tier.featured ? 'border-[#D4A43B] ring-2 ring-[#D4A43B]/50' : 'border-white/10'
              } hover:border-[#D4A43B]/50 transition-all`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-6`}>
                <tier.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-white font-bold mb-2">{tier.name}</h3>
              <p className="text-[#D4A43B] font-semibold mb-6">{tier.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="mb-3">
                  <div className="text-gray-400 text-sm mb-1">Setup Fee</div>
                  <div className="text-3xl text-white font-bold">{tier.setupFee}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Subscription</div>
                  <div className="text-3xl text-white font-bold">{tier.subscription}</div>
                  {tier.monthlyEquivalent && (
                    <div className="text-gray-500 text-sm mt-1">{tier.monthlyEquivalent}</div>
                  )}
                </div>
                <div className="text-gray-500 text-xs mt-3">Exclusive of 16% VAT</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D4A43B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                tier.featured
                  ? 'bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white/10 text-white border border-white/20 hover:border-[#D4A43B]/50'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Institutional Note */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-white font-bold mb-3">⚠️ Institutional Note</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Institutional and Enterprise tiers are billed on a quarterly basis to ensure consistent Match Intelligence™ optimization and ecosystem stability.
                </p>
                <p className="text-gray-400 text-sm">
                  All partnerships are governed by the <span className="text-[#D4A43B] font-semibold">Strategic Infrastructure Agreement (Ref: CF/2026/INST-01)</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl text-white font-bold mb-12 text-center">
            Frequently Asked Questions: Institutional Pricing
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-[#D4A43B]/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <h3 className="text-lg text-white font-semibold pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: faqOpen === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#D4A43B] flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: faqOpen === index ? "auto" : 0,
                    opacity: faqOpen === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed mb-3">{faq.answer}</p>
                    
                    {faq.details && (
                      <ul className="space-y-2">
                        {faq.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B] flex-shrink-0 mt-2" />
                            <span className="text-gray-400 text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}