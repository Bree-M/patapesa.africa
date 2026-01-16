import { motion } from "motion/react";
import { Brain, Target, CheckCircle, TrendingUp, Shield, Zap, ArrowRight, Rocket, Building2, Link as LinkIcon } from "lucide-react";

// Import the provided images
import step1Image from "@/assets/images/connect-world.png";
import step2Image from "@/assets/images/ai-learns.png";
import step3Image from "@/assets/images/matched-products.png";

interface HowItWorksPageProps {
  onNavigate?: (page: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  <div style={{ background: "purple", color: "white", padding: "100px", fontSize: "50px", textAlign: "center" }}>
  HOW IT WORKS PAGE IS RENDERING!
</div>
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] via-[#002244] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A43B] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">Your Financial Journey, Optimized</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-6 font-bold">
              How <span className="bg-gradient-to-r from-[#D4A43B] to-yellow-500 bg-clip-text text-transparent">PataPesa</span> Works
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get the QR, Pay the Staff, Get the Loan — Three simple steps to unlock 
              personalized financial opportunities powered by AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process - Detailed */}
      <section className="py-20 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 1: Connect Your World */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white">
                      1
                    </div>
                    <div>
                      <h2 className="text-4xl text-white font-bold">Connect Your World</h2>
                      <div className="text-cyan-400 text-base font-semibold mt-1">Secure Financial Integration</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    Securely link your <strong className="text-white">M-PESA and bank accounts</strong>. 
                    Our platform respects your privacy, using data only to serve you better.
                  </p>

                  <h3 className="text-white text-lg font-bold mb-4">How It Works:</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">Bank-Level Encryption</p>
                        <p className="text-gray-400 text-sm">All connections protected with 256-bit encryption</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">You Control Your Data</p>
                        <p className="text-gray-400 text-sm">Choose exactly what information to share and when</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">Non-Custodial Platform</p>
                        <p className="text-gray-400 text-sm">PataPesa <strong>never holds your funds</strong> — direct provider connections only</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                    <p className="text-green-300 font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-6 h-6 flex-shrink-0" />
                      Privacy First
                    </p>
                    <p className="text-green-200 text-sm leading-relaxed">
                      All data is encrypted and used only with your explicit consent. 
                      Fully compliant with Kenya Data Protection Act (ODPC 2026).
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl"
                >
                  <img 
                    src={step1Image} 
                    alt="Step 1: Connect Your World - M-PESA and Bank Integration" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Step 2: Our AI Learns Your Lifestyle */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl"
                >
                  <img 
                    src={step2Image} 
                    alt="Step 2: Our AI Learns Your Lifestyle - Transaction Analysis" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              <div className="order-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
                      2
                    </div>
                    <div>
                      <h2 className="text-4xl text-white font-bold">Our AI Learns Your Lifestyle</h2>
                      <div className="text-purple-400 text-base font-semibold mt-1">Intelligent Pattern Recognition</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    Our intelligent engine analyzes your <strong className="text-white">transaction data</strong> to 
                    understand your spending, saving, and operational patterns.
                  </p>

                  <h3 className="text-white text-lg font-bold mb-4">What We Analyze:</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">Transaction Patterns</p>
                        <p className="text-gray-400 text-sm">Retail, travel, bills, and daily cashflow habits</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">Financial Persona</p>
                        <p className="text-gray-400 text-sm">Are you a Business Scaler, Lifestyle Optimizer, or Risk Minimizer?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-[#D4A43B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold mb-1">Predictive Insights</p>
                        <p className="text-gray-400 text-sm">Anticipate future needs based on historical behavior</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-5">
                    <p className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-6 h-6 flex-shrink-0" />
                      No Black Box
                    </p>
                    <p className="text-purple-200 text-sm leading-relaxed">
                      Transparent AI with explainable recommendations. You always know 
                      <strong className="text-white"> why you're matched</strong> with specific providers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Get Matched to Your Perfect Products */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center text-3xl font-bold text-white">
                      3
                    </div>
                    <div>
                      <h2 className="text-4xl text-white font-bold">Get Matched to Your Perfect Products</h2>
                      <div className="text-[#D4A43B] text-base font-semibold mt-1">Personalized Financial Opportunities</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    Receive <strong className="text-white">personalized recommendations</strong> for savings, 
                    investments, insurance, and capital — precisely when you need them.
                  </p>

                  <h3 className="text-white text-lg font-bold mb-4">What You Get:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 rounded-lg p-4 border border-[#D4A43B]/30">
                      <Rocket className="w-8 h-8 text-[#D4A43B] mb-3" />
                      <h4 className="text-white font-semibold mb-2">For Individuals</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Personal loans matched to your profile
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Savings products optimized for goals
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Insurance tailored to lifestyle
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-[#D4A43B]/30">
                      <Building2 className="w-8 h-8 text-[#D4A43B] mb-3" />
                      <h4 className="text-white font-semibold mb-2">For Businesses</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Working capital based on revenue
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Payroll financing for teams
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A43B]"></div>
                          Business credit lines
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#D4A43B]/10 border-2 border-[#D4A43B]/50 rounded-lg p-5">
                    <p className="text-[#D4A43B] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      95%+ Match Accuracy
                    </p>
                    <p className="text-gray-300 text-sm">
                      Real-time provider routing via <strong className="text-white">PesaDirect™</strong> ensures 
                      you connect with the best-fit financial products instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border-2 border-[#D4A43B]/30 shadow-2xl"
                >
                  <img 
                    src={step3Image} 
                    alt="Step 3: Get Matched to Your Perfect Products" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional financial services are disconnected and opaque. PataPesa brings intelligence, 
              transparency, and personalization to every financial decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Intelligent Matching",
                description: "No more guessing which loan or savings product is right for you. Our AI analyzes 150+ providers to find your perfect match.",
                stat: "95% accuracy"
              },
              {
                icon: Shield,
                title: "Your Money Stays Yours",
                description: "100% non-custodial means PataPesa never holds your funds. Direct connections between you and verified providers only.",
                stat: "0 KES held"
              },
              {
                icon: Zap,
                title: "Real-Time Connections",
                description: "Instant matching and routing via PesaDirect™. Get approved and funded faster than traditional channels.",
                stat: "<200ms response"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-bold">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                <div className="text-[#D4A43B] font-bold text-lg">{item.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
              Ready to Optimize Your Financial Life?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of individuals and businesses who trust PataPesa to connect 
              them with the right financial opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('individuals')}
                className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold text-lg border-2 border-white/20 hover:border-[#D4A43B]/50 transition-all"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D4A43B]" />
                <span className="text-gray-300 font-semibold">100% Non-Custodial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#D4A43B]" />
                <span className="text-gray-300 font-semibold">CF/2026/INST-01</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-[#D4A43B]" />
                <span className="text-gray-300 font-semibold">ODPC 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}