import { motion } from "motion/react";
import { Shield, Lock, FileCheck, Globe, Database, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Non-Custodial Architecture",
    description: "Zero fund custody by PataPesa - all transactions direct between users and providers",
    badge: "Enterprise-Grade"
  },
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "HTTPS/TLS for data transmission with encrypted storage and access controls",
    badge: "AES-256"
  },
  {
    icon: FileCheck,
    title: "Compliance Framework",
    description: "Kenya Data Protection Act, GDPR principles, PCI-DSS standards",
    badge: "Certified"
  },
  {
    icon: Globe,
    title: "API Security",
    description: "OAuth 2.0 authentication, rate limiting, and tokenized session management",
    badge: "Secure"
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "User consent management, right to access, correction, deletion, and portability",
    badge: "ODPC Registered"
  },
  {
    icon: CheckCircle,
    title: "Audit & Compliance",
    description: "Transaction immutability, automated compliance reporting, and incident response",
    badge: "ISO 27001 Aligned"
  }
];

const complianceRegistrations = [
  {
    label: "Compliance Reference",
    value: "CF/2026/INST-01"
  },
  {
    label: "ODPC Registration",
    value: "2026"
  },
  {
    label: "Security Framework",
    value: "AWS-Aligned"
  },
  {
    label: "Standards",
    value: "PCI-DSS, GDPR, KDPA"
  }
];

const providerCategories = [
  "Commercial Banking Partners",
  "Institutional SACCO Partners",
  "Microfinance Institutions (MFIs)",
  "Wealth & Protection Partners",
  "CMA-licensed Money Market Funds",
  "Insurance Providers",
  "Wellness Practitioners"
];

export function SecurityCompliance() {
  return (
    <section className="py-20 bg-black/20" id="security">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-4">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Enterprise Security & Compliance</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Built on Trust & Security
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Full regulatory compliance with enterprise-grade security infrastructure
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-6 border border-green-400/20 hover:border-green-400/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                  <span className="text-xs text-green-300 font-semibold">{feature.badge}</span>
                </div>
              </div>
              <h3 className="text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30 mb-16"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Official Registrations</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {complianceRegistrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 text-center"
              >
                <div className="text-sm text-gray-400 mb-2">{item.label}</div>
                <div className="text-lg text-white font-semibold">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Verified Provider Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl text-white mb-6 text-center">
            Approved Regulatory-Compliant Provider Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-400/50 transition-all group cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Target Partners */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg text-white mb-4 text-center">Target Strategic Partners</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {["KCB", "Equity Bank", "Stanbic", "Stima SACCO", "Safaricom SACCO", "Old Mutual", "Jubilee", "Britam"].map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 text-purple-300 font-semibold cursor-pointer"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
