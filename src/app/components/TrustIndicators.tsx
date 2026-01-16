import { motion } from "motion/react";
import { ShieldCheck, Lock, Bot, ArrowLeftRight } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Verified Providers",
    color: "text-green-400"
  },
  {
    icon: Lock,
    label: "Secure Platform",
    color: "text-blue-400"
  },
  {
    icon: Bot,
    label: "AI-Powered Matching",
    color: "text-purple-400"
  },
  {
    icon: ArrowLeftRight,
    label: "Multi-Channel Payments",
    color: "text-pink-400"
  }
];

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {trustItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/20 hover:border-purple-400/50 transition-all cursor-pointer group"
        >
          <div className={`${item.color} group-hover:scale-110 transition-transform`}>
            <item.icon className="w-6 h-6" />
          </div>
          <span className="text-sm text-white/90 group-hover:text-white transition-colors">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
