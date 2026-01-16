import { SecurityCompliance } from "@/app/components/SecurityCompliance";
import { motion } from "motion/react";
import { Building, Shield, TrendingUp } from "lucide-react";

const partnerCategories = [
  {
    icon: Building,
    title: "Commercial Banking Partners",
    description: "Leading banks providing comprehensive financial services",
    partners: ["KCB Bank", "Equity Bank", "Stanbic Bank", "NCBA Bank"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Institutional SACCO Partners",
    description: "Member-owned cooperatives offering competitive rates",
    partners: ["Stima SACCO", "Safaricom SACCO", "Kenya Bankers SACCO", "Tower SACCO"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Wealth & Protection Partners",
    description: "Insurance and investment management leaders",
    partners: ["Old Mutual", "Jubilee Insurance", "Britam", "CIC Insurance"],
    color: "from-[#D4A43B] to-yellow-500"
  }
];

export function PartnersPage() {
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
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Verified, regulatory-compliant financial institutions trusted by thousands
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-2">{category.title}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-gray-400">{partner}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SecurityCompliance />
    </div>
  );
}
