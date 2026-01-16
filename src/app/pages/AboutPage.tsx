import { motion } from "motion/react";
import { CounterStat } from "@/app/components/CounterStat";
import { Target, Users, Globe, Lightbulb, Shield, Zap, Heart, TrendingUp, Linkedin } from "lucide-react";

const milestones = [
  { year: "2024", event: "PataPesa Founded", description: "Circle Fund Africa Ltd established with vision for financial inclusion" },
  { year: "2025", event: "PesaDirect™ Launch", description: "Non-custodial payment infrastructure goes live with 50+ providers" },
  { year: "2025", event: "Match Intelligence™", description: "AI engine launched with explainable recommendations" },
  { year: "2026", event: "ODPC Registration", description: "Full compliance with Kenya Data Protection Act (Ref: CF/2026/INST-01)" },
  { year: "2026", event: "150+ Providers", description: "Ecosystem expansion across banking, SACCOs, insurance, and wellness" }
];

const team = [
  {
    name: "Raphael Kirangu",
    role: "Founder & CEO",
    bio: "Drives strategic vision and fosters partnerships across the Kenyan financial landscape.",
    linkedin: "https://linkedin.com/in/raphaelkirangu",
    image: "/team-founder.jpg",
    color: "from-[#D4A43B] to-yellow-500"
  },
  {
    name: "Brenda Wairimu",
    role: "Lead Backend Engineer",
    bio: "Architected our scalable, bank-grade backend system.",
    linkedin: "https://linkedin.com/in/brendawairimu",
    image: "/team-cto.jpg",
    color: "from-[#003366] to-blue-600"
  },
  {
    name: "Titus Kiprono",
    role: "Lead Frontend Engineer",
    bio: "Creates seamless, accessible user experiences across web and mobile.",
    linkedin: "https://linkedin.com/in/tituskiprono",
    image: "/team-cpo.jpg",
    color: "from-[#D4A43B] to-yellow-500"
  }
];

const values = [
  {
    icon: Shield,
    title: "Non-Custodial First",
    description: "We never hold your money. Ever. PesaDirect™ routes payments directly to licensed providers.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description: "No black boxes. Match Intelligence™ provides transparent, understandable recommendations.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Privacy by Design",
    description: "ODPC-compliant data practices. You control what's shared, always.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Infrastructure, Not Marketplace",
    description: "We're the intelligence & routing layer connecting you to verified providers.",
    color: "from-[#D4A43B] to-yellow-500"
  }
];

export function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-full border border-[#D4A43B]/30 mb-6">
            <Globe className="w-5 h-5 text-[#D4A43B]" />
            <span className="text-[#D4A43B] font-semibold">About PataPesa</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            The Intelligence Layer for African Finance
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            We're building the non-custodial infrastructure that connects individuals, businesses, and institutions
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            PataPesa Africa (Circle Fund Africa Ltd) is not a bank, wallet, lender, or insurer. We're a licensed financial infrastructure provider delivering intelligent routing and AI-powered matching to democratize access to financial services and wellness solutions across Africa.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-4 font-semibold">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To democratize access to financial services and wellness solutions by building Africa's most intelligent, transparent, and secure non-custodial infrastructure layer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-4 font-semibold">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              An Africa where every individual and business has instant, intelligent access to the right financial products at the right moment—without intermediaries holding their money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30"
        >
          <h3 className="text-3xl text-white mb-8 text-center">PataPesa by the Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <CounterStat
              value={150}
              suffix="+"
              label="Licensed Providers"
              description="Banks, SACCOs, Insurers"
              color="from-blue-400 to-cyan-500"
            />
            <CounterStat
              value={2500000}
              prefix="KES "
              label="Capital Matched"
              description="Average per MSME monthly"
              color="from-purple-400 to-pink-500"
            />
            <CounterStat
              value={95}
              suffix="%"
              label="Match Accuracy"
              description="AI recommendation precision"
              color="from-green-400 to-emerald-500"
            />
            <CounterStat
              value={100}
              suffix="%"
              label="Non-Custodial"
              description="We never hold funds"
              color="from-[#D4A43B] to-yellow-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide every decision we make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-white mb-3 font-semibold">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From vision to Kenya's leading financial intelligence platform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-[#D4A43B]/30 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#D4A43B] to-yellow-500 -translate-x-[9px]"></div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="text-[#D4A43B] font-bold text-lg mb-2">{milestone.year}</div>
                <h3 className="text-xl text-white mb-2 font-semibold">{milestone.event}</h3>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership & Governance */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Leadership & Governance</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Nairobi-based team with deep roots in African fintech, compliance, engineering, and product. We operate with a compliance-first, user-first, and long-term mindset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center mx-auto mb-4 overflow-hidden`}>
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">{member.name}</h3>
              <p className="text-[#D4A43B] text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-semibold transition-all"
              >
                LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-300 max-w-3xl mx-auto"
        >
          Decisions are guided by an internal governance framework prioritizing regulatory alignment, platform neutrality, and sustainable growth.
        </motion.p>
      </section>

      {/* Compliance & Registration */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-12 h-12 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-white mb-2 font-semibold">Licensed & Compliant</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Circle Fund Africa Ltd is registered with the Office of the Data Protection Commissioner (ODPC) and fully compliant with the Kenya Data Protection Act, 2019.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-green-400 font-bold text-sm mb-1">Registration</div>
              <div className="text-white font-semibold">CF/2026/INST-01</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-green-400 font-bold text-sm mb-1">ODPC</div>
              <div className="text-white font-semibold">2026</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-green-400 font-bold text-sm mb-1">Entity</div>
              <div className="text-white font-semibold">Circle Fund Africa Ltd</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30"
        >
          <h3 className="text-3xl text-white mb-6">Join the PataPesa Ecosystem</h3>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're an individual, business, or financial institution, there's a place for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
            >
              Become a Partner
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}