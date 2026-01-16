import { motion } from "motion/react";
import { Building2, CreditCard, Users, FileText, TrendingUp, Zap, CheckCircle, DollarSign, QrCode, BarChart3 } from "lucide-react";
import biznaHubImg from "@/assets/images/biznahub.png";

const features = [
  {
    icon: CreditCard,
    title: "Bulk Payment Processing",
    description: "Process payroll and supplier payments via M-PESA, Airtel Money, and bank transfers in one click",
    stats: "Save 80% processing time"
  },
  {
    icon: FileText,
    title: "Financial Passport™",
    description: "Build your operational resume automatically with transaction history and business health scores",
    stats: "Instant creditworthiness"
  },
  {
    icon: TrendingUp,
    title: "AI Capital Matching",
    description: "Get matched to the right lenders based on your cash flow velocity and business performance",
    stats: "Access to 15+ lenders"
  },
  {
    icon: Zap,
    title: "Universal QR Payments",
    description: "One QR code accepts all payment methods - mobile money, cards, and stablecoins",
    stats: "6+ payment channels"
  },
  {
    icon: Users,
    title: "Invoice Management",
    description: "Track invoices, automate reminders, and reconcile payments automatically",
    stats: "Reduce late payments by 60%"
  },
  {
    icon: DollarSign,
    title: "Cash Flow Analytics",
    description: "Real-time insights into business health, payment patterns, and growth opportunities",
    stats: "Predictive forecasting"
  }
];

const benefits = [
  "Transform operational data into financing opportunities",
  "Reduce loan application friction with automated financial history",
  "Access preferential lending rates through verified performance",
  "Streamline all payment operations in one platform",
  "Real-time business health scoring",
  "Multi-recipient payments with single click"
];

const comparisonData = [
  { metric: "Setup Time", traditional: "6-12 Months", patapesa: "14 Days" },
  { metric: "Cost per Transaction", traditional: "KES 800-2,000", patapesa: "KES 150-400" },
  { metric: "Payment Channels", traditional: "1-2 Options", patapesa: "6+ Channels" },
  { metric: "Loan Approval Time", traditional: "4-8 Weeks", patapesa: "2-7 Days" },
];

export function ForBusinesses() {
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
            <Building2 className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">BIZNA HUB</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Your Business, Digitally Transformed
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Manage payments, track performance, and unlock capital. Transform your operational data into financing opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* BIZNA HUB Dashboard Preview */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Your Operational Command Center
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BIZNA HUB dashboard with Financial Passport™, Operational Health Score, Capital Match, Payroll, and QR Payments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img 
            src={biznaHubImg} 
            alt="BIZNA HUB Dashboard - Operational Command Center" 
            className="w-full rounded-2xl shadow-2xl border-2 border-[#D4A43B]/30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/50 to-transparent rounded-2xl"></div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-300">Powerful tools designed for business growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-2">Bulk Payments</h3>
            <p className="text-gray-300 text-sm">
              Streamline payroll and supplier disbursements. Pay multiple recipients via M-PESA, Airtel Money, or bank accounts with a single click.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <QrCode className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-2">QR Payments</h3>
            <p className="text-gray-300 text-sm">
              Accept instant, secure payments from customers. Empower your restaurant or retail outlet with a universal QR code for quick transactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-2">Financial Passport™</h3>
            <p className="text-gray-300 text-sm">
              Every transaction builds your unique 'Financial Passport.' Demonstrate your business's health to lenders and unlock faster capital access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-2">Operational Health Score</h3>
            <p className="text-gray-300 text-sm">
              Real-time tracking of business health based on transaction velocity, payment patterns, and cash flow trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Everything Your Business Needs</h2>
          <p className="text-xl text-gray-300">Complete business management tools</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
              <div className="inline-block px-3 py-1 bg-[#D4A43B]/20 rounded-full border border-[#D4A43B]/30">
                <span className="text-[#D4A43B] text-xs font-semibold">{feature.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financial Passport - Turn Operations into Opportunities */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-3xl p-12 border border-[#D4A43B]/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A43B]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
                <FileText className="w-5 h-5 text-[#D4A43B]" />
                <span className="text-[#D4A43B] font-semibold">The Financial Passport™</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Turn Operations into Opportunities
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every transaction processed through our dashboard builds your unique 'Financial Passport.' This real-time operational history demonstrates your business's health to lenders, unlocking faster access to capital at preferential rates.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D4A43B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-[#D4A43B]/30"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Business Health Score</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#D4A43B] to-green-500"
                      />
                    </div>
                    <span className="text-2xl text-white font-bold">85/100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Monthly Revenue</div>
                    <div className="text-xl text-white font-bold">KES 450K</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Cash Flow</div>
                    <div className="text-xl text-green-400 font-bold">+23%</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Transactions</div>
                    <div className="text-xl text-white font-bold">1,245</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Credit Rating</div>
                    <div className="text-xl text-[#D4A43B] font-bold">A+</div>
                  </div>
                </div>

                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Pre-Approved for Funding</span>
                  </div>
                  <p className="text-sm text-gray-300">You qualify for up to KES 500,000 at 12% interest</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">PataPesa vs Traditional Methods</h2>
          <p className="text-xl text-gray-300">See why businesses choose PataPesa</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-[#003366] p-4">
            <div className="text-gray-400 font-semibold">Metric</div>
            <div className="text-gray-400 font-semibold">Traditional</div>
            <div className="text-[#D4A43B] font-semibold">PataPesa</div>
          </div>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grid grid-cols-3 p-4 border-t border-white/5"
            >
              <div className="text-white font-semibold">{row.metric}</div>
              <div className="text-gray-400">{row.traditional}</div>
              <div className="text-[#D4A43B] font-semibold">{row.patapesa}</div>
            </motion.div>
          ))}
        </motion.div>
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
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1,000+ businesses already streamlining payments and accessing capital with PataPesa
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Start 14-Day Free Trial
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}