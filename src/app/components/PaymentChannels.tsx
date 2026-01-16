import { motion } from "motion/react";
import { Smartphone, CreditCard, QrCode, Wifi, Coins } from "lucide-react";

const channels = [
  {
    title: "Mobile Money:",
    icon: Smartphone,
    items: ["M-PESA", "Airtel Money", "T-Kash"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Digital & Contactless:",
    icon: CreditCard,
    items: ["Visa/Mastercard", "Stablecoins (USDT/USDC)"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Quick & Contactless:",
    icon: QrCode,
    items: ["Scan QR", "Tap to Pay"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "NFC",
    icon: Wifi,
    items: [],
    color: "from-orange-500 to-red-600"
  }
];

export function PaymentChannels() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-xl text-white mb-4">Payment Channels</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {channels.map((channel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-purple-400/50 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${channel.color}`}>
                <channel.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm">{channel.title}</span>
            </div>
            
            {channel.items.length > 0 ? (
              <div className="space-y-1 ml-7">
                {channel.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs group-hover:text-white transition-colors">
                    <Smartphone className="w-2.5 h-2.5 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-300 text-xs ml-7">Near Field Communication</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}