import { motion } from "motion/react";
import { Heart, Users, Calendar, DollarSign, BarChart, Bell, Sparkles, CalendarCheck, CreditCard, UserCheck, AlertTriangle, TrendingUp, Shield, Target, Coins } from "lucide-react";

// Import the wellness images
import wellnessProviderImage from "@/assets/images/wellness-preview.png";
import corporateWellnessImage from "@/assets/images/corporate-wellness.png";

const corporateFeatures = [
  {
    icon: Coins,
    title: "Subsidized Wellness Credits",
    description: "Distribute 'Wellness Tokens' to employees, redeemable only at partner gyms, spas, or mental health professionals on your platform"
  },
  {
    icon: BarChart,
    title: "Usage Reports (Anonymized)",
    description: "HR departments receive data on company-wide wellness engagement (e.g., '60% of staff used their gym credits this month') without compromising individual privacy"
  },
  {
    icon: DollarSign,
    title: "Integrated Financial Wellness",
    description: "Direct access for employees to Financial Professionals for debt counseling or investment planning, managed via the same booking engine"
  }
];

const providerFeatures = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling & Bookings",
    description: "Seamless calendar interface allowing clients to book sessions via QR or App, with automated SMS/WhatsApp appointment reminders to reduce no-shows"
  },
  {
    icon: CreditCard,
    title: "Recurring Membership Management",
    description: "Automate monthly billing for gym memberships or wellness packages via M-PESA and Card with auto-renewal"
  },
  {
    icon: UserCheck,
    title: "Staff Commission Tracking",
    description: "Automatically calculate payouts for trainers or therapists based on completed sessions, visible in their own sub-dashboards"
  },
  {
    icon: AlertTriangle,
    title: "Client Retention Analytics",
    description: "Identify 'at-risk' members who haven't visited in 14 days and trigger automated re-engagement offers"
  }
];

export function WellnessPage() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-semibold">Wellness Solutions</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Corporate Wellness Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Empower employees with wellness benefits while helping providers grow their business
          </p>
        </motion.div>
      </section>

      {/* The Holistic Workspace */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-3xl p-12 border border-[#D4A43B]/30 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-300 font-semibold">The Holistic Workspace</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Combining Financial & Physical Wellness
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine <strong className="text-[#D4A43B]">Financial Wellness</strong> (loans, savings, and investments) with <strong className="text-pink-400">Physical Wellness</strong> (gym memberships, spa bookings, and health services) to create the ultimate employee benefits platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-[#D4A43B]/30"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-3">Financial Wellness</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A43B]">•</span>
                  <span>Access to savings accounts and investment products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A43B]">•</span>
                  <span>Employee loan programs with preferential rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A43B]">•</span>
                  <span>Financial literacy and coaching sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A43B]">•</span>
                  <span>Integration with Old Mutual MMF and other providers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/30"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-3">Physical Wellness</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <span>Gym memberships and fitness class bookings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <span>Spa treatments and massage therapy sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <span>Wellness coaching and mental health support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <span>Integration with Jubilee Health and wellness providers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl text-white mb-8 text-center">For Corporate Clients</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {corporateFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wellness Provider Dashboard - The Service Side */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Wellness Provider Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The Operational Command Center for gyms, spas, and wellness service providers
          </p>
        </motion.div>

        {/* Provider Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-[#D4A43B]/30 shadow-2xl">
            <img 
              src={wellnessProviderImage} 
              alt="Wellness Provider Dashboard - Operational Command Center" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {providerFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Wellness Portal - The Employer Side */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">For Employers & HR Teams</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Corporate Wellness Portal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The Employee Benefit Engine — Manage wellness perks for large companies with powerful HR tools
          </p>
        </motion.div>

        {/* Corporate Wellness Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
            <img 
              src={corporateWellnessImage} 
              alt="Corporate Wellness Portal - Employee Benefit Engine with Analytics Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Corporate Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Coins className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3 font-bold">Subsidized Wellness Credits</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Corporates can distribute <strong className="text-blue-300">"Wellness Tokens"</strong> to employees, 
              redeemable only at partner gyms, spas, or mental health professionals on your platform.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3">
              <p className="text-blue-300 text-xs font-semibold">
                ✓ Full control over budget allocation
              </p>
              <p className="text-blue-300 text-xs font-semibold">
                ✓ Prevent token misuse or cash-out
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <BarChart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3 font-bold">Usage Reports (Anonymized)</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              HR departments receive data on company-wide wellness engagement 
              (e.g., <strong className="text-purple-300">"60% of staff used their gym credits this month"</strong>) 
              without compromising individual privacy.
            </p>
            <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-3">
              <p className="text-purple-300 text-xs font-semibold">
                ✓ ODPC compliant reporting
              </p>
              <p className="text-purple-300 text-xs font-semibold">
                ✓ Department-level insights
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-[#D4A43B]/30"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3 font-bold">Integrated Financial Wellness</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Direct access for employees to <strong className="text-[#D4A43B]">Financial Professionals</strong> for 
              debt counseling or investment planning, managed via the same booking engine.
            </p>
            <div className="bg-[#D4A43B]/10 border border-[#D4A43B]/30 rounded-lg p-3">
              <p className="text-[#D4A43B] text-xs font-semibold">
                ✓ One-click financial advisor booking
              </p>
              <p className="text-[#D4A43B] text-xs font-semibold">
                ✓ Holistic employee support
              </p>
            </div>
          </motion.div>
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
            Ready to Transform Your Wellness Program?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations already providing comprehensive wellness benefits to their employees
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Request Corporate Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Provider Partnership Info
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}