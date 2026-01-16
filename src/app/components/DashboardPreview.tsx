import { motion } from "motion/react";
import { TrendingUp, Smartphone, CreditCard, Coins, QrCode } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { useState } from "react";

export function DashboardPreview() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="perspective-container w-full max-w-sm"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="dashboard-preview-wrapper"
        animate={{ 
          rotateY: mousePosition.x, 
          rotateX: -mousePosition.y,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15 
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div 
          className="dashboard-card bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden w-full border border-white/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Dashboard Header */}
          <div className="dashboard-header bg-gradient-to-r from-[#003366] to-[#003366]/90 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-4 h-4" />
              </motion.div>
              <span className="font-semibold text-sm">PataPesa Dashboard</span>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 text-xs">
                Live
              </Badge>
            </motion.div>
          </div>

          {/* Dashboard Content */}
          <div className="dashboard-content p-4">
            <h3 className="text-gray-900 mb-3 text-base font-semibold">Quick Payment</h3>
            
            {/* Payment Channels */}
            <div className="space-y-2 mb-4">
              <motion.div 
                className="payment-channel bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Smartphone className="w-4 h-4 text-[#003366]" />
                </motion.div>
                <span className="text-gray-700 font-medium text-sm">Mobile Payments</span>
              </motion.div>

              <motion.div 
                className="payment-channel bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <CreditCard className="w-4 h-4 text-[#003366]" />
                </motion.div>
                <span className="text-gray-700 font-medium text-sm">Cards</span>
              </motion.div>

              <motion.div 
                className="payment-channel bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Coins className="w-4 h-4 text-[#D4A43B]" />
                </motion.div>
                <span className="text-gray-700 font-medium text-sm">Stable Coins</span>
              </motion.div>

              <motion.div 
                className="payment-channel bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <QrCode className="w-4 h-4 text-[#003366]" />
                </motion.div>
                <span className="text-gray-700 font-medium text-sm">QR Code</span>
              </motion.div>
            </div>

            {/* Status Info */}
            <div className="space-y-2 pt-3 border-t border-gray-200">
              <motion.p 
                className="text-xs text-gray-600 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Status:</span>
                <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 text-xs">
                  Completed
                </Badge>
              </motion.p>
              <motion.p 
                className="text-xs text-gray-600 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span>Security:</span>
                <Badge className="bg-[#003366] hover:bg-[#003366]/90 text-white border-0 text-xs">
                  Non-Custodial
                </Badge>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Floating effect shadows - more subtle */}
        <motion.div 
          className="absolute inset-0 bg-[#003366]/20 blur-3xl -z-10 rounded-2xl" 
          style={{ transform: "translateZ(-50px)" }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-[#D4A43B]/10 blur-2xl -z-10 rounded-2xl" 
          style={{ transform: "translateZ(-30px)" }}
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>

      <style>{`
        .perspective-container {
          perspective: 1500px;
          position: relative;
        }

        .dashboard-preview-wrapper {
          position: relative;
          transform-style: preserve-3d;
        }

        .dashboard-card {
          position: relative;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}