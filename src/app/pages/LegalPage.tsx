import { motion } from "motion/react";
import { FileText, Shield, Lock, Cookie, ScrollText } from "lucide-react";
import { useState } from "react";

const legalDocuments = [
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Comprehensive user agreement governing use of PataPesa services",
    lastUpdated: "January 15, 2026",
    content: "Full terms and conditions document available for review..."
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "GDPR + Kenya DPA compliant privacy protection",
    lastUpdated: "January 15, 2026",
    content: "Our commitment to protecting your personal data..."
  },
  {
    icon: Lock,
    title: "Data Protection Statement",
    description: "How we handle, store, and protect your information",
    lastUpdated: "January 15, 2026",
    content: "Comprehensive data protection and security measures..."
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Tracking and analytics disclosure",
    lastUpdated: "January 15, 2026",
    content: "Information about cookies and tracking technologies..."
  },
  {
    icon: ScrollText,
    title: "Acceptable Use Policy",
    description: "User behavior standards and prohibited activities",
    lastUpdated: "January 15, 2026",
    content: "Guidelines for acceptable use of the platform..."
  }
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Information security management",
    status: "Target"
  },
  {
    name: "PCI-DSS",
    description: "Payment card industry compliance",
    status: "In Progress"
  },
  {
    name: "SOC 2 Type II",
    description: "Service organization controls",
    status: "Target"
  },
  {
    name: "GDPR",
    description: "European data protection",
    status: "Compliant"
  },
  {
    name: "Kenya DPA",
    description: "ODPC Registration: 2026",
    status: "Registered"
  }
];

export function LegalPage() {
  const [activeDoc, setActiveDoc] = useState<number | null>(null);

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
            Legal & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transparent policies and regulatory compliance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-[#D4A43B]/20 rounded-full border border-[#D4A43B]/30">
              <span className="text-[#D4A43B] font-semibold">CF/2026/INST-01</span>
            </div>
            <div className="px-4 py-2 bg-[#D4A43B]/20 rounded-full border border-[#D4A43B]/30">
              <span className="text-[#D4A43B] font-semibold">ODPC: 2026</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Legal Documents */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl text-white mb-8 text-center">Legal Documents</h2>
        <div className="grid gap-4 max-w-4xl mx-auto">
          {legalDocuments.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setActiveDoc(activeDoc === index ? null : index)}
                className="w-full p-6 flex items-center gap-4 hover:bg-white/5 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-400">{doc.description}</p>
                </div>
                <div className="text-xs text-gray-500">
                  Updated: {doc.lastUpdated}
                </div>
              </button>
              {activeDoc === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 border-t border-white/10"
                >
                  <p className="text-gray-300 pt-4">{doc.content}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 px-6 py-2 bg-[#D4A43B]/20 border border-[#D4A43B]/30 rounded-lg text-[#D4A43B] font-semibold hover:bg-[#D4A43B]/30 transition-colors"
                  >
                    Read Full Document
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl text-white mb-8 text-center">Compliance Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br rounded-2xl p-6 border text-center ${
                cert.status === "Compliant" || cert.status === "Registered"
                  ? "from-green-500/10 to-emerald-500/10 border-green-500/30"
                  : cert.status === "In Progress"
                  ? "from-[#D4A43B]/10 to-yellow-500/10 border-[#D4A43B]/30"
                  : "from-white/5 to-white/10 border-white/10"
              }`}
            >
              <div className="text-2xl text-white font-bold mb-2">{cert.name}</div>
              <p className="text-sm text-gray-300 mb-3">{cert.description}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                cert.status === "Compliant" || cert.status === "Registered"
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : cert.status === "In Progress"
                  ? "bg-[#D4A43B]/20 border border-[#D4A43B]/30 text-[#D4A43B]"
                  : "bg-white/10 border border-white/20 text-gray-400"
              }`}>
                {cert.status}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
