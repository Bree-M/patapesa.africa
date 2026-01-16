import { motion } from "motion/react";

const coreTeam = [
  {
    name: "Raphael Kirangu",
    role: "Founder & CEO",
    initials: "RK",
    description: "Product vision, partnerships, and company strategy",
    gradient: "from-[#003366] via-[#D4A43B] to-[#003366]"
  },
  {
    name: "Brenda Wairimu",
    role: "Lead Backend Engineer",
    initials: "BW",
    description: "Core API development, provider integrations, backend architecture",
    gradient: "from-[#D4A43B] via-[#003366] to-[#D4A43B]"
  },
  {
    name: "Titus Kiprono",
    role: "Lead Frontend Engineer",
    initials: "TK",
    description: "App UI/UX, PWA interface, user experience design",
    gradient: "from-[#003366] via-yellow-500 to-[#D4A43B]"
  }
];

const expandingRoles = [
  "Head of Product",
  "Head of Partnerships",
  "Data Scientist",
  "DevOps Engineer",
  "Security Engineer",
  "Customer Success Manager",
  "Marketing Manager",
  "Compliance Officer",
  "Finance Manager",
  "Legal Counsel"
];

export function TeamSection() {
  return (
    <section className="py-20" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Meet the innovators building Africa's financial marketplace
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4A43B]/50 transition-all text-center"
            >
              {/* Profile Avatar with Gold/Blue Gradient */}
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                <span className="text-4xl text-white font-bold relative z-10">{member.initials}</span>
              </div>
              <h3 className="text-2xl text-white mb-1">{member.name}</h3>
              <div className="text-sm font-semibold text-[#D4A43B] mb-3">
                {member.role}
              </div>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expanding Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-8 border border-[#D4A43B]/30"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Growing Team - Join Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {expandingRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-[#D4A43B]/50 transition-all text-center cursor-pointer"
              >
                <span className="text-gray-300 text-sm">{role}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
