import { motion } from "motion/react";
import { ArrowRight, Shield, Cpu, Zap } from "lucide-react";

interface HeroContentProps {
  onNavigate?: (page: string) => void;
}

export function HeroContent({ onNavigate }: HeroContentProps) {
  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Shield className="w-4 h-4 text-[#D4A43B]" />
          <span className="text-white text-sm font-semibold">Non-Custodial</span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Cpu className="w-4 h-4 text-[#D4A43B]" />
          <span className="text-white text-sm font-semibold">AI-Driven</span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Zap className="w-4 h-4 text-[#D4A43B]" />
          <span className="text-white text-sm font-semibold">Smart Routing</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-5xl lg:text-6xl text-white mb-6 leading-tight">
          The Intelligence Layer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A43B] to-yellow-500">
            for Your Financial Life
          </span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed">
          Connect your financial world, unlock personalized opportunities, and empower your growth.
        </p>
        <p className="text-base text-gray-300 leading-relaxed">
          Powered by <strong className="text-[#D4A43B]">PesaDirect™</strong> — smart, secure, non-custodial, multi-channel payments.
        </p>
      </motion.div>

      {/* Value Props */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-[#D4A43B] font-bold text-lg mb-1">Financial Data</div>
          <div className="text-gray-300 text-sm">Connect & analyze securely</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-[#D4A43B] font-bold text-lg mb-1">AI Matching</div>
          <div className="text-gray-300 text-sm">Perfect-fit recommendations</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-[#D4A43B] font-bold text-lg mb-1">Direct Transaction</div>
          <div className="text-gray-300 text-sm">Non-custodial routing</div>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.("contact")}
          className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg flex items-center gap-2"
        >
          Get Started — Connect Your Financial Profile
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.("institutions")}
          className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
        >
          Partner With Us — For Institutions
        </motion.button>
      </motion.div>

      {/* Compliance & Trust Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pt-6 border-t border-white/10"
      >
        <div className="bg-[#D4A43B]/10 border border-[#D4A43B]/30 rounded-lg p-4 mb-4">
          <p className="text-white font-semibold text-sm mb-2">
            🔒 PataPesa is NOT a bank, wallet, lender, or insurer
          </p>
          <p className="text-gray-300 text-sm">
            We are a <strong>non-custodial intelligence & routing layer</strong> connecting you with verified financial institutions and wellness providers. We never hold your money.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Kenya Data Protection Act Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>ODPC: 2026 | Ref: CF/2026/INST-01</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Licensed Providers Only</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
