import { motion } from "motion/react";
import { Upload, BarChart3, Heart, DollarSign, Users, TrendingUp, FileSpreadsheet, Shield } from "lucide-react";
import { CounterStat } from "@/app/components/CounterStat";

const features = [
  {
    icon: Upload,
    title: "CSV Upload - Instant Access",
    description: "Upload employee roster via CSV. Staff receive instant access to financial wellness tools, MMFs, and health coverage—no manual onboarding.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Financial Wellness",
    description: "Subsidized access to Money Market Funds (Old Mutual MMF), credit counseling, and investment opportunities.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Health & Insurance Access",
    description: "Jubilee Health Cover provisioning, gym memberships, mental health services—all accessible through one platform.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Usage Analytics (Anonymized)",
    description: "Track company-wide engagement, department-level wellness participation, and ROI on wellness spend—all privacy-compliant.",
    color: "from-[#D4A43B] to-yellow-500"
  },
  {
    icon: TrendingUp,
    title: "Wellness Credits / Tokens",
    description: "Distribute subsidized wellness tokens redeemable at partner gyms, spas, and wellness providers. Boost employee retention and engagement.",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: Shield,
    title: "Automated Compliance Reporting",
    description: "Pre-built reports for HR audits, wellness ROI documentation, and benefits administration compliance.",
    color: "from-red-500 to-orange-500"
  }
];

export function CorporateHRPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Dashboard-First Platform</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Corporate & HR Solutions
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Employee wellness platform with instant CSV onboarding, financial wellness access, and ROI analytics
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            PataPesa empowers HR teams to deliver comprehensive financial and physical wellness benefits through a single, non-custodial infrastructure layer.
          </p>
        </motion.div>
      </section>

      {/* Dashboard-First Showcase */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <FileSpreadsheet className="w-16 h-16 text-[#D4A43B] mx-auto mb-4" />
            <h2 className="text-3xl text-white mb-4">Upload CSV, Activate Instantly</h2>
            <p className="text-gray-300 text-lg">
              Employee Name | Email | Department | Wellness Budget
            </p>
          </div>

          <div className="bg-[#111111] rounded-xl p-6 border border-white/10">
            <pre className="text-green-400 text-sm overflow-x-auto">
              Employee Name,Email,Department,Wellness Budget{"\n"}
              John Doe,john@company.com,Sales,KES 5000{"\n"}
              Jane Smith,jane@company.com,Engineering,KES 5000{"\n"}
              Alex Mwangi,alex@company.com,Marketing,KES 5000
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">5 min</div>
              <div className="text-gray-300 text-sm">Setup Time</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-gray-300 text-sm">Employees in One Upload</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">Instant</div>
              <div className="text-gray-300 text-sm">Staff Access</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Comprehensive Wellness Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Financial wellness + physical wellness + mental health support—all in one dashboard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3 font-semibold">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Real-Time Analytics & ROI Tracking</h2>
          <p className="text-xl text-gray-300">
            Anonymized company-wide metrics to measure wellness program impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30"
          >
            <h3 className="text-lg text-white mb-3 font-semibold">Engagement Rate</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">67%</div>
            <p className="text-gray-300 text-sm">Employees actively using wellness benefits</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30"
          >
            <h3 className="text-lg text-white mb-3 font-semibold">Department Participation</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">8/10</div>
            <p className="text-gray-300 text-sm">Departments with more than 50% active users</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30"
          >
            <h3 className="text-lg text-white mb-3 font-semibold">Wellness ROI</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">3.2x</div>
            <p className="text-gray-300 text-sm">Return on wellness investment (productivity + retention)</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Integration */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30"
        >
          <h3 className="text-3xl text-white mb-8 text-center">Integrated Benefits Management</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl text-white mb-4 font-semibold">Financial Wellness</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Old Mutual MMF Access</li>
                <li>✓ Financial Coaching Appointments</li>
                <li>✓ Debt Counseling Services</li>
                <li>✓ Investment Guidance</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl text-white mb-4 font-semibold">Physical & Mental Wellness</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Jubilee Health Cover</li>
                <li>✓ Gym & Spa Memberships</li>
                <li>✓ Mental Health Provider Access</li>
                <li>✓ Wellness Event Credits</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl text-white mb-6">Ready to Transform Employee Wellness?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a demo to see the HR dashboard in action
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg"
          >
            Request Demo
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}