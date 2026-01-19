import { StatsBar } from "@/app/components/StatsBar";
import { CounterStat } from "@/app/components/CounterStat";
import { IntelligenceLayer } from "@/app/components/IntelligenceLayer";
import { DashboardPreview } from "@/app/components/DashboardPreview";
import { motion } from "motion/react";
import { Users, Building2, Heart, Briefcase, ArrowRight, TrendingUp, Sparkles, Zap, Shield, Brain, Rocket, CheckCircle, Target, Link as LinkIcon, CreditCard, Banknote, BarChart3, Clock, DollarSign, UserCheck } from "lucide-react";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section - Simplified */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#002244] to-black"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A43B] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
                <Brain className="w-5 h-5 text-[#D4A43B]" />
                <span className="text-[#D4A43B] font-semibold">Africa's Financial Infrastructure</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Intelligence Layer for<br />
                <span className="bg-gradient-to-r from-[#D4A43B] to-yellow-500 bg-clip-text text-transparent">
                  Your Financial Life
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect your financial world, unlock personalized opportunities, 
                and empower your growth.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate?.('individuals')}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white rounded-lg font-semibold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started - Connect Your Financial Profile
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate?.('institutions')}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold text-base flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#D4A43B]/50 transition-all"
                >
                  Partner with Us - For Institutions
                  <Briefcase className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Quick Value Props */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#D4A43B]" />
                  <span className="font-semibold">100% Non-Custodial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[#D4A43B]" />
                  <span className="font-semibold">AI-Powered Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#D4A43B]" />
                  <span className="font-semibold">Instant Connections</span>
                </div>
              </div>

              {/* Business Tools */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Business Tools:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#D4A43B]/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Banknote className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Bulk Payments</div>
                        <div className="text-gray-400 text-xs">Process multiple transactions simultaneously</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#D4A43B]/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Paybill/Till Integration</div>
                        <div className="text-gray-400 text-xs">Connect M-PESA business accounts seamlessly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: 3D Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Your Personal Financial Concierge Section */}
      <section className="py-20 bg-gradient-to-br from-black via-[#003366]/30 to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #D4A43B 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">Your Personal Financial Concierge</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl text-white mb-6 font-bold">
              Your Financial Journey,<br />
              <span className="bg-gradient-to-r from-[#D4A43B] to-yellow-500 bg-clip-text text-transparent">
                Optimized
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get the QR, Pay the Staff, Get the Loan — all powered by intelligent connections 
              between your financial world and verified providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Layer Section */}
      <IntelligenceLayer />

      {/* User Segments - Quick Access */}
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
              Built for Every Financial Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're an individual, business, or institution — PataPesa connects you to the right opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Individuals",
                description: "Personal loans, savings, insurance — matched to your lifestyle",
                page: "individuals",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Building2,
                title: "Businesses (MSMEs)",
                description: "Working capital, payroll financing, business credit",
                page: "businesses",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Corporate & HR",
                description: "Employee wellness, salary advances, benefits programs",
                page: "corporate-hr",
                color: "from-[#D4A43B] to-yellow-500"
              },
              {
                icon: Briefcase,
                title: "Wellness & Service Providers",
                description: "Booking + payment dashboard for gyms, clinics, spas",
                page: "wellness-providers",
                color: "from-green-500 to-emerald-500"
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => onNavigate?.(segment.page)}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all h-full">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${segment.color} flex items-center justify-center mb-4`}>
                    <segment.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-3 font-semibold">{segment.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{segment.description}</p>
                  <div className="flex items-center text-[#D4A43B] text-sm font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How PataPesa Works */}
      <section className="py-20 bg-gradient-to-br from-black via-[#003366]/20 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
              <Rocket className="w-5 h-5 text-[#D4A43B]" />
              <span className="text-[#D4A43B] font-semibold">How It Works</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
              How PataPesa Works
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get matched with the perfect financial solution in just 5 simple steps
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account in under 2 minutes",
                icon: UserCheck,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "2",
                title: "Tell Us Your Needs",
                description: "Answer a few questions about your financial goals",
                icon: Target,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                title: "Get AI-Matched",
                userText: "Eliminate the guesswork of finding financial services. Our technology maps your goals to a curated selection of savings, investment and credit products, ensuring you only see the options that are relevant and available to you.",
                providerText: "Streamline your customer acquisition through data-driven matching. We deliver pre-qualified users who align with your institutional risk and product appetite, helping you scale your offerings with higher precision.",
                icon: Brain,
                color: "from-[#D4A43B] to-yellow-500"
              },
              {
                step: "4",
                title: "Compare Options",
                description: "Review and compare recommendations side-by-side",
                icon: BarChart3,
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "5",
                title: "Connect & Pay Directly",
                description: "Choose your provider and transact securely via PesaDirect™",
                icon: Zap,
                color: "from-pink-500 to-rose-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4A43B]/30 transition-all">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <h3 className="text-2xl text-white font-semibold">{item.title}</h3>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      )}
                      
                      {item.userText && (
                        <div className="space-y-4 mt-4">
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-5 h-5 text-blue-400" />
                              <span className="text-blue-300 font-semibold text-sm">For Users:</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.userText}</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Building2 className="w-5 h-5 text-purple-400" />
                              <span className="text-purple-300 font-semibold text-sm">For Providers:</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.providerText}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Institutions Choose PataPesa */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Institutional Advantages</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
              Why Institutions Choose PataPesa
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Data-driven distribution that transforms customer acquisition economics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Drastic CAC Reduction",
                description: "Connect to users at exact moment of transactional intent",
                detail: "Average 70% reduction in customer acquisition costs compared to traditional marketing channels. Reach users when they're actively seeking financial products.",
                icon: DollarSign,
                color: "from-green-500 to-emerald-500",
                stat: "70%",
                statLabel: "Lower CAC"
              },
              {
                title: "Enhanced User Conversion",
                description: "Seamless, high-speed access with trusted ecosystem advantage",
                detail: "Pre-qualified leads matched to your risk appetite result in conversion rates 3x higher than cold outreach. Users arrive ready to engage.",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500",
                stat: "3x",
                statLabel: "Higher Conversion"
              },
              {
                title: "Fractional Investment",
                description: "National reach starting at KES 25,000",
                detail: "No massive upfront investment required. Scale your presence across Kenya's financial ecosystem with minimal capital commitment and maximum flexibility.",
                icon: Banknote,
                color: "from-[#D4A43B] to-yellow-500",
                stat: "KES 25K",
                statLabel: "Starting Investment"
              },
              {
                title: "Rapid Deployment",
                description: "Go live in 14 days leveraging existing APIs",
                detail: "Integrate once, reach everywhere. Our standardized APIs connect to your existing systems without lengthy development cycles or infrastructure changes.",
                icon: Clock,
                color: "from-purple-500 to-pink-500",
                stat: "14 Days",
                statLabel: "Time to Live"
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
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#D4A43B] text-sm font-semibold">{item.description}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{item.detail}</p>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('institutions')}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg inline-flex items-center gap-2"
            >
              Become a Partner Institution
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Banner */}
      <section className="py-12 bg-black/60 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#D4A43B]" />
              <div>
                <div className="text-white font-bold text-sm">100% Non-Custodial</div>
                <div className="text-gray-400 text-xs">We never hold your money</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-[#D4A43B]" />
              <div>
                <div className="text-white font-bold text-sm">CF/2026/INST-01</div>
                <div className="text-gray-400 text-xs">Compliance Reference</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LinkIcon className="w-8 h-8 text-[#D4A43B]" />
              <div>
                <div className="text-white font-bold text-sm">ODPC 2026</div>
                <div className="text-gray-400 text-xs">Data Protection Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}