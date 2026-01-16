import { motion } from "motion/react";
import { Calculator, BookOpen, Download, DollarSign, TrendingUp, Shield } from "lucide-react";

const calculators = [
  {
    icon: DollarSign,
    title: "Loan Affordability Calculator",
    description: "Calculate how much you can borrow based on your monthly income and existing commitments",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Business Growth Calculator",
    description: "Project revenue growth needed to qualify for working capital financing",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calculator,
    title: "Savings Goal Planner",
    description: "Plan monthly contributions to reach your financial goals on schedule",
    color: "from-green-500 to-emerald-500"
  }
];

const guides = [
  {
    title: "Complete Guide to Non-Custodial Financial Infrastructure",
    description: "Everything you need to know about how PataPesa works, from AI matching to direct provider routing",
    category: "Getting Started",
    format: "PDF",
    pages: "18 pages"
  },
  {
    title: "MSME Financing Playbook: From Application to Approval",
    description: "Step-by-step guide to building your Financial Passport™ and accessing working capital",
    category: "For Businesses",
    format: "PDF",
    pages: "25 pages"
  },
  {
    title: "Financial Product Comparison: Loans, Savings, Insurance",
    description: "Side-by-side comparison of products from KCB, Equity, Stima SACCO, Old Mutual, and more",
    category: "Comparison Tools",
    format: "Interactive",
    pages: "Online Tool"
  },
  {
    title: "Kenya Data Protection Act: Your Rights Explained",
    description: "Plain-language guide to ODPC regulations and how your financial data is protected",
    category: "Privacy & Security",
    format: "PDF",
    pages: "12 pages"
  },
  {
    title: "Corporate Wellness Implementation Guide",
    description: "HR playbook for rolling out subsidized wellness credits and tracking ROI",
    category: "For Corporates",
    format: "PDF",
    pages: "20 pages"
  },
  {
    title: "Provider Partnership Guide: Joining PataPesa Network",
    description: "Complete onboarding guide for banks, SACCOs, insurers, and wellness providers",
    category: "For Providers",
    format: "PDF",
    pages: "30 pages"
  }
];

export function GuidesPage() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
            <BookOpen className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Resources & Tools</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Guides & Tools
          </h1>
          <p className="text-xl text-gray-300">
            Financial calculators, comparison guides, and downloadable resources to help you make informed decisions
          </p>
        </motion.div>
      </section>

      {/* Financial Calculators */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Financial Calculators</h2>
          <p className="text-xl text-gray-300">
            Free tools to help you plan, project, and optimize your financial decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4A43B]/50 transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${calc.color} flex items-center justify-center mb-6`}>
                <calc.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4 font-semibold">{calc.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{calc.description}</p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
                Launch Calculator
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Comprehensive Guides</h2>
          <p className="text-xl text-gray-300">
            In-depth resources covering platform features, financial products, and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  {guide.format === "PDF" ? (
                    <Download className="w-6 h-6 text-white" />
                  ) : (
                    <Calculator className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-gray-300 text-xs font-semibold mb-2">
                    {guide.category}
                  </div>
                  <h3 className="text-xl text-white font-semibold mb-2 leading-tight">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span>{guide.format}</span>
                      <span>•</span>
                      <span>{guide.pages}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-[#D4A43B]/20 hover:bg-[#D4A43B]/30 rounded-lg text-[#D4A43B] font-semibold text-sm transition-colors"
                    >
                      {guide.format === "PDF" ? "Download" : "Access Tool"}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl text-white mb-4">Download Our Complete Financial Planning Kit</h3>
            <p className="text-xl text-gray-300">
              Get instant access to 10+ calculators, guides, and comparison tools—completely free
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#D4A43B]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Get Kit
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            No spam. Unsubscribe anytime. Privacy-first.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
