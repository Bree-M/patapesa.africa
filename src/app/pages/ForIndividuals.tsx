import { motion } from "motion/react";
import { User, Wallet, TrendingUp, Shield, Target, BarChart3, PiggyBank, CreditCard, Sparkles, Plane, GraduationCap } from "lucide-react";
import matchedProductsImg from "@/assets/images/matched-products.png";

const features = [
  {
    icon: Wallet,
    title: "Account Aggregation",
    description: "Connect M-PESA and bank accounts securely in one dashboard",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "AI-Driven Insights",
    description: "Financial insights and spending pattern analysis powered by Match Intelligence™",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Goal-Based Savings",
    description: "Track savings goals with personalized recommendations",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Smart Matching",
    description: "Get matched to loans, insurance, and investments that fit your needs",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Product Comparison",
    description: "Instant comparison across multiple verified providers",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: PiggyBank,
    title: "Life Event Anticipation",
    description: "Proactive recommendations for travel, education, and wealth management",
    color: "from-indigo-500 to-violet-500"
  }
];

const services = [
  {
    icon: CreditCard,
    title: "Loans & Credit",
    description: "Personal loans, business credit, quick cash advances",
    providers: "15+ Lenders"
  },
  {
    icon: PiggyBank,
    title: "Savings & Investments",
    description: "SACCOs, money market funds, fixed deposits",
    providers: "20+ Options"
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Health, life, motor, travel insurance coverage",
    providers: "10+ Insurers"
  },
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Investment advisory, retirement planning, portfolio management",
    providers: "8+ Advisors"
  }
];

const testimonials = [
  {
    name: "Jane Mwangi",
    role: "Freelance Designer",
    quote: "PataPesa helped me find the perfect savings account with better interest rates than my bank. The AI recommendations were spot-on!",
    avatar: "JM"
  },
  {
    name: "David Ochieng",
    role: "Small Business Owner",
    quote: "I compared 5 loan offers in minutes. Saved me weeks of running around to different lenders. The Financial Passport™ made approval instant.",
    avatar: "DO"
  },
  {
    name: "Grace Njeri",
    role: "Teacher",
    quote: "The life event anticipation feature recommended travel insurance before my trip. It's like having a personal financial advisor 24/7.",
    avatar: "GN"
  }
];

export function ForIndividuals() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
            <User className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">For Individuals</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Your Personal Financial Concierge
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect with verified financial providers, compare options instantly, and make smarter financial decisions—all in one place.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300">Everything you need to take control of your finances</p>
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
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: Value Proposition Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-3xl p-12 border border-[#D4A43B]/30 overflow-hidden relative"
        >
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A43B]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
              <Sparkles className="w-5 h-5 text-[#D4A43B]" />
              <span className="text-[#D4A43B] font-semibold">Our Value (User-Focused)</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Intelligent Finance, Tailored for You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We move beyond generic financial advice. Our platform anticipates your needs, protects against financial shocks, and empowers your growth through perfectly timed product delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={matchedProductsImg} 
                alt="Get Matched to Perfect Products" 
                className="w-full rounded-2xl shadow-2xl border border-[#D4A43B]/30"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl text-white mb-6">Your Financial Concierge</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-lg flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-semibold mb-2">Anticipate Life Events</h4>
                    <p className="text-gray-300">
                      Our Financial Concierge anticipates your life events, suggesting relevant products for travel, education, or wealth management, ensuring your lifestyle is always supported.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-semibold mb-2">Protect Against Shocks</h4>
                    <p className="text-gray-300">
                      Proactive alerts and product recommendations protect you from unexpected financial shocks, giving you peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-semibold mb-2">Perfectly Timed Delivery</h4>
                    <p className="text-gray-300">
                      Get matched to savings, investments, insurance, and capital precisely when you need them—not before, not after.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Financial Services You Can Access</h2>
          <p className="text-xl text-gray-300">All verified and regulatory-compliant providers</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-6 border border-[#D4A43B]/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <div className="inline-block px-3 py-1 bg-[#D4A43B]/20 rounded-full border border-[#D4A43B]/30">
                <span className="text-[#D4A43B] text-xs font-semibold">{service.providers}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-300">Real stories from real people</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-12 text-center border border-[#D4A43B]/30"
        >
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 50,000+ users who've already transformed their financial journey with PataPesa
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}