import { motion } from "motion/react";
import { Layers, Building2 } from "lucide-react";

const tools = [
  "Bulk Payments",
  "Paybill/Till Integration"
];

export function BusinessTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl text-white">Business Tools</h3>
      </div>
      
      <ul className="space-y-2">
        {tools.map((tool, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-pink-400 transition-colors"
            />
            <span className="text-sm">{tool}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}