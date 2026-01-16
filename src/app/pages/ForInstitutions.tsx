import { PartnershipTiers } from "@/app/components/PartnershipTiers";
import { motion } from "motion/react";
import { Building, Target, TrendingDown, Zap, BarChart, Database, AlertCircle, TrendingUp, LineChart, FileSpreadsheet, Cog } from "lucide-react";
import providerValueImg from "@/assets/images/provider-value.png";

const benefits = [
  {
    icon: Target,
    title: "Surgical Precision Targeting",
    description: "AI-driven matching eliminates wasted ad spend with 95% match quality",
    stat: "70% Cost Reduction"
  },
  {
    icon: TrendingDown,
    title: "Reduced Acquisition Costs",
    description: "KES 150-400 per lead vs traditional KES 800-2,000",
    stat: "~40% Efficiency Gain"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "14-day setup vs 6-12 months for internal build",
    stat: "14 Days to Market"
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track daily acquisition, CTR, CPA, conversion funnels, and LTV projections",
    stat: "Live Dashboard"
  }
];

export function ForInstitutions() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
            <Building className="w-5 h-5 text-[#D4A43B]" />
            <span className="text-[#D4A43B] font-semibold">For Financial Institutions</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Precision Growth for Financial Institutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Acquire high-LTV customers, reduce risk, and gain unparalleled market intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Request a Partnership Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Download Corporate Solutions PDF
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
              <div className="text-[#D4A43B] font-bold">{benefit.stat}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intelligent Product Distribution */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Target Smarter, Grow Faster
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent Product Distribution for Maximum Impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={providerValueImg} 
              alt="Provider Intelligence Dashboard" 
              className="w-full rounded-2xl shadow-2xl border border-[#D4A43B]/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Contextual Matching</h3>
                  <p className="text-gray-300">
                    Integrate your full product catalog (savings, investments, insurance, credit) to appear precisely when user behavior indicates a need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Direct Channel Marketing</h3>
                  <p className="text-gray-300">
                    Engage verified retail and business segments with surgical precision, eliminating wasted ad spend.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Premium Asset Placement</h3>
                  <p className="text-gray-300">
                    Secure top-tier visibility when your products align with our AI's highest compatibility scores, enhancing your institutional authority.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Intelligence & Risk Reduction */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Data-Driven Decisions for Superior Portfolio Health
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform how you find and fund customers
          </p>
        </motion.div>

        {/* Search Cost Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto mb-12"
        >
          <div className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-8 border border-[#D4A43B]/30">
            <h3 className="text-2xl text-white mb-6 text-center">The "Search Cost" Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-white font-semibold">Challenge</th>
                    <th className="text-left py-4 px-6 text-[#D4A43B] font-semibold">Traditional Marketplace</th>
                    <th className="text-left py-4 px-6 text-green-400 font-semibold">Our Intelligent Engine</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Value to Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold">High Search Cost</td>
                    <td className="py-4 px-6 text-gray-300">Banks spend massive budgets on broad, blind advertising</td>
                    <td className="py-4 px-6 text-gray-300">Surgical Targeting: We identify high-intent users at the exact moment of need</td>
                    <td className="py-4 px-6 text-[#D4A43B] font-bold">Drastic Reduction in CAC</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold">Information Gap</td>
                    <td className="py-4 px-6 text-gray-300">No visibility into a business's daily cash flow health</td>
                    <td className="py-4 px-6 text-gray-300">Live Operational Data: Direct insights from dashboard usage and QR sales</td>
                    <td className="py-4 px-6 text-[#D4A43B] font-bold">Data-Driven Underwriting</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold">Static Risk Models</td>
                    <td className="py-4 px-6 text-gray-300">Relying on months-old, physical bank statements</td>
                    <td className="py-4 px-6 text-gray-300">Dynamic Health Tracking: Real-time visibility into transaction velocity</td>
                    <td className="py-4 px-6 text-[#D4A43B] font-bold">Lower Default Rates</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold">Generic Leads</td>
                    <td className="py-4 px-6 text-gray-300">80% of leads are unqualified for the product</td>
                    <td className="py-4 px-6 text-gray-300">Pre-Vetted Matches: 95% compatibility between user profile and product</td>
                    <td className="py-4 px-6 text-[#D4A43B] font-bold">Higher Conversion (ROI)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Additional Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <Database className="w-12 h-12 text-[#D4A43B] mb-4" />
            <h3 className="text-xl text-white font-semibold mb-3">Real-Time Insights</h3>
            <p className="text-gray-300">
              Access anonymized, aggregated market trends and user behavior patterns to refine product offerings based on real-world economic movement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <AlertCircle className="w-12 h-12 text-[#D4A43B] mb-4" />
            <h3 className="text-xl text-white font-semibold mb-3">Predictive Lead Generation</h3>
            <p className="text-gray-300">
              Our AI identifies "capital shocks" and growth opportunities before they materialize, delivering pre-qualified leads aligned with your risk appetite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <LineChart className="w-12 h-12 text-[#D4A43B] mb-4" />
            <h3 className="text-xl text-white font-semibold mb-3">Dynamic Risk Models</h3>
            <p className="text-gray-300">
              Update your risk models based on real-time transaction velocity, not outdated bank statements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Provider Dashboard Capabilities */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Empowering Your Acquisition & Strategy Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade tools for institutional portfolio management
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-8 border border-[#D4A43B]/30">
            <h3 className="text-2xl text-white mb-6 text-center">Provider Dashboard Capabilities</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-6 text-[#D4A43B] font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Institutional Utility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold flex items-center gap-3">
                      <BarChart className="w-5 h-5 text-[#D4A43B]" />
                      Real-Time KPI Tracking
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      Monitor daily acquisition volume, click-through rates (CTR), and cost-per-acquisition (CPA) across all product lines.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold flex items-center gap-3">
                      <Cog className="w-5 h-5 text-[#D4A43B]" />
                      Dynamic Product Optimization
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      Test and refine interest rates or promotional incentives through real-time data to maximize portfolio uptake.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold flex items-center gap-3">
                      <FileSpreadsheet className="w-5 h-5 text-[#D4A43B]" />
                      Automated Compliance Reporting
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      Generate standardized reports for internal audit and regulatory reviews, detailing lead sourcing and data integrity.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-all">
                    <td className="py-4 px-6 text-white font-semibold flex items-center gap-3">
                      <Zap className="w-5 h-5 text-[#D4A43B]" />
                      API-Driven Lead Delivery
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      Securely push qualified applicant data directly into your existing CRM or core banking system for accelerated processing.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partner for the Future */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-12 text-center border border-[#D4A43B]/30"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Partner for the Future of Finance
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide the infrastructure for financial institutions to scale with precision. By bridging the gap between institutional products and verified user needs, we empower our partners to reduce operational friction and drive measurable growth across all product portfolios.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Become a Partner
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      <PartnershipTiers />
    </div>
  );
}