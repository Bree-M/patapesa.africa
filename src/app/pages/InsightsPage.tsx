import { motion } from "motion/react";
import { BarChart3, Download, TrendingUp, FileText } from "lucide-react";

const reports = [
  {
    title: "African Fintech Infrastructure Report 2026",
    description: "Comprehensive analysis of payment rails, provider ecosystems, and AI-driven distribution across East Africa.",
    category: "Market Research",
    pages: "47 pages",
    downloads: "2.3K"
  },
  {
    title: "The Cost of Customer Acquisition: Banking vs. AI Distribution",
    description: "Data-backed comparison showing 70% CAC reduction through intelligent matching vs. traditional marketing.",
    category: "Industry Benchmarks",
    pages: "22 pages",
    downloads: "1.8K"
  },
  {
    title: "MSME Credit Gap Analysis: Kenya, Uganda, Tanzania",
    description: "Quantifying the KES 3.2T financing gap and how behavioral data unlocks working capital for small businesses.",
    category: "Thought Leadership",
    pages: "35 pages",
    downloads: "1.5K"
  },
  {
    title: "Non-Custodial Infrastructure: The Next Wave of African Fintech",
    description: "Why routing beats wallets—strategic perspective on infrastructure-layer innovation vs. product-layer competition.",
    category: "Strategic Analysis",
    pages: "28 pages",
    downloads: "2.1K"
  }
];

export function InsightsPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Data & Analysis</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Insights & Reports
          </h1>
          <p className="text-xl text-gray-300">
            Data-backed narratives, industry benchmarks, and thought leadership on Africa's financial infrastructure evolution
          </p>
        </motion.div>
      </section>

      {/* Featured Insight */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-full aspect-square bg-gradient-to-br from-[#D4A43B] to-yellow-500/50 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-white" />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-block px-3 py-1 bg-[#D4A43B]/20 border border-[#D4A43B]/30 rounded-full text-[#D4A43B] text-sm font-semibold mb-4">
                New Release
              </div>
              <h2 className="text-3xl text-white mb-4 font-semibold">
                Q1 2026 African Fintech State of the Market
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our quarterly deep-dive into payment infrastructure adoption, AI-driven distribution trends, and regulatory developments across Kenya, Uganda, Tanzania, Rwanda, and Ethiopia. Includes provider interviews, transaction volume data, and predictive modeling for H2 2026.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <FileText className="w-5 h-5" />
                  <span>63 pages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Download className="w-5 h-5" />
                  <span>3.5K downloads</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Full Report
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reports Library */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Research Library</h2>
          <p className="text-xl text-gray-300">
            Downloadable PDFs with actionable insights for providers, policymakers, and industry stakeholders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#003366] to-[#003366]/80 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#D4A43B]" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-gray-300 text-xs font-semibold mb-2">
                    {report.category}
                  </div>
                  <h3 className="text-xl text-white font-semibold leading-tight">
                    {report.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {report.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>{report.pages}</span>
                  <span>•</span>
                  <span>{report.downloads} downloads</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-[#D4A43B]/20 hover:bg-[#D4A43B]/30 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5 text-[#D4A43B]" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30 text-center"
        >
          <h3 className="text-3xl text-white mb-4">Get New Reports First</h3>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to receive quarterly market insights and industry analysis before public release
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#D4A43B]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
