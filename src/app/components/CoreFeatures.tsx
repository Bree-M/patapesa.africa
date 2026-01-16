import { motion } from "motion/react";
import { Cloud, Zap, ShieldCheck, Network, TrendingUp, Lock } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable microservices following AWS-aligned security frameworks for enterprise-grade performance",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "PesaDirect™ Technology",
    description: "Proprietary settlement orchestration supporting QR, NFC, M-PESA, Cards, and Stablecoins",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Lock,
    title: "Non-Custodial Security",
    description: "Zero fund custody - all transactions route directly between users and providers",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Network,
    title: "API-First Integration",
    description: "RESTful API architecture with OpenAPI 3.0 specification for seamless provider connectivity",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Processing",
    description: "Instant transaction processing, settlement tracking, and reconciliation capabilities",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Compliance",
    description: "Full adherence to Kenya Data Protection Act, GDPR principles, and PCI-DSS standards",
    color: "from-indigo-500 to-violet-500"
  }
];

export function CoreFeatures() {
  return (
    <section className="py-20 bg-black/20" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Platform Architecture
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Built on enterprise-grade infrastructure to power Africa's financial ecosystem
          </p>
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
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
