import { AICapabilities } from "@/app/components/AICapabilities";
import { CoreFeatures } from "@/app/components/CoreFeatures";
import { motion } from "motion/react";
import { Zap, Code, Shield } from "lucide-react";

export function TechnologyPage() {
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
            The Technology Behind PataPesa
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Enterprise-grade infrastructure powering Africa's financial ecosystem
          </p>
        </motion.div>
      </section>

      {/* PesaDirect */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-12 border border-[#D4A43B]/30 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full mb-6">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">PesaDirect™</span>
          </div>
          <h2 className="text-4xl text-white mb-4">Proprietary Payment Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Universal payment orchestration supporting QR, NFC, M-PESA, Airtel Money, cards, bank transfers, and stablecoins. All-in-one routing with 1.5% transparent fees.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl text-[#D4A43B] font-bold mb-2">6+</div>
              <div className="text-gray-300">Payment Channels</div>
            </div>
            <div>
              <div className="text-3xl text-[#D4A43B] font-bold mb-2">1.5%</div>
              <div className="text-gray-300">Routing Fee</div>
            </div>
            <div>
              <div className="text-3xl text-[#D4A43B] font-bold mb-2">Real-Time</div>
              <div className="text-gray-300">Settlement</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Match Intelligence */}
      <AICapabilities />

      {/* Core Features */}
      <CoreFeatures />

      {/* API & Integrations */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl text-white">Public API & AI Integration</h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            OpenAPI 3.0 compliant RESTful API for external consumption. Compatible with ChatGPT, Microsoft Copilot, Anthropic MCP, HARPA AI, and LangChain.
          </p>
          <div className="bg-[#111111] rounded-xl p-6 max-w-3xl mx-auto">
            <code className="text-green-400 text-sm">
              GET https://patapesa.africa/api/financial-services<br />
              GET https://patapesa.africa/api/pesadirect<br />
              GET https://patapesa.africa/api/faq
            </code>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
