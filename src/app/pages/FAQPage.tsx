import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is PataPesa?",
        a: "PataPesa is a non-custodial financial marketplace connecting users with verified providers through AI-powered matching. We make it easy to access loans, savings, insurance, and investments without downloading multiple apps."
      },
      {
        q: "Is PataPesa safe?",
        a: "Yes. We use enterprise-grade encryption and never hold your funds (non-custodial). All providers are verified and regulatory-compliant. We're registered with ODPC (2026) and follow Kenya Data Protection Act, GDPR, and PCI-DSS standards."
      },
      {
        q: "How much does it cost?",
        a: "PataPesa is free for individual users. Businesses pay transparent transaction fees (1.5% referral + 1.5% routing). Providers choose partnership tiers starting from KES 60,000/month."
      }
    ]
  },
  {
    category: "For Users",
    questions: [
      {
        q: "How does the AI matching work?",
        a: "Our Match Intelligence™ engine analyzes your transaction patterns, spending behavior, and financial goals to recommend the best products from verified providers. It learns your lifestyle to anticipate needs like travel insurance or business loans."
      },
      {
        q: "Do I need to link my M-PESA account?",
        a: "It's optional but recommended. Linking accounts allows our AI to provide more accurate recommendations and helps build your Financial Passport™ for faster loan approvals."
      },
      {
        q: "Can I trust the providers?",
        a: "All providers are verified, licensed institutions including banks, SACCOs, MFIs, and CMA-licensed funds. We only work with regulatory-compliant partners."
      }
    ]
  },
  {
    category: "For Businesses",
    questions: [
      {
        q: "What is the Financial Passport™?",
        a: "Your business operational resume built automatically from transaction data. It includes real-time health scores, cash flow velocity, and creditworthiness - making loan applications instant."
      },
      {
        q: "How does bulk payment processing work?",
        a: "Upload a CSV file or use our dashboard to process payroll and supplier payments via M-PESA, Airtel Money, or bank transfers. One click sends payments to multiple recipients."
      },
      {
        q: "What payment methods can my business accept?",
        a: "With PesaDirect™, accept QR codes, NFC tap-to-pay, M-PESA, Airtel Money, cards, bank transfers, and stablecoins - all through one integration."
      }
    ]
  },
  {
    category: "For Institutions",
    questions: [
      {
        q: "What are the partnership tiers?",
        a: "Tier 1 (Marketplace) - KES 60K/month for basic listing. Tier 2 (API Integrated) - KES 150K/month with full integration. Tier 3 (Branded Branch) - KES 300K/month with premium placement and white-label options."
      },
      {
        q: "How is this better than building our own platform?",
        a: "Setup in 14 days vs 6-12 months. 70% lower acquisition costs (KES 150-400 vs KES 800-2,000 per lead). 95% match quality with surgical precision targeting."
      },
      {
        q: "What analytics do we get?",
        a: "Real-time dashboard with daily acquisition volume, CTR, CPA, conversion funnels, LTV projections, A/B testing, and competitive benchmarking."
      }
    ]
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about PataPesa
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-3xl text-white mb-6">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, qIndex) => {
                const index = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: qIndex * 0.05 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white font-semibold pr-4">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#D4A43B] flex-shrink-0" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.a}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 mt-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-12 text-center border border-[#D4A43B]/30"
        >
          <h2 className="text-3xl text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help 24/7
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
