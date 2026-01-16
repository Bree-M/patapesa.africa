import { motion } from "motion/react";
import { User, Building2, Heart, ChevronRight } from "lucide-react";
import { useState } from "react";

const segments = [
  {
    icon: User,
    title: "Individual Users (B2C)",
    subtitle: "Financial Concierge Dashboard",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Connect M-PESA and bank accounts securely",
      "AI-driven financial insights & spending analysis",
      "Personalized product recommendations",
      "Goal-based savings tracking",
      "Life event anticipation (travel, education, wealth)",
      "Instant product comparison across providers",
      "One-click application routing"
    ],
    journey: [
      "Connect Your World - Secure account linking",
      "AI Learns Your Lifestyle - Transaction analysis",
      "Get Matched to Perfect Products"
    ]
  },
  {
    icon: Building2,
    title: "Business Users (MSMEs)",
    subtitle: "BIZNA HUB Dashboard",
    color: "from-purple-500 to-pink-500",
    features: [
      "Bulk payroll processing (M-PESA, Airtel, banks)",
      "Supplier payment disbursements",
      "QR payment acceptance - universal QR",
      "Financial Passport™ - operational resume building",
      "Real-time business health score",
      "Cash flow velocity tracking",
      "AI-driven capital matching",
      "Invoice management & tracking"
    ],
    journey: [
      "Transform operational data into financing",
      "Reduce loan friction with automated history",
      "Access preferential rates through verified performance"
    ]
  },
  {
    icon: Heart,
    title: "Corporate Wellness",
    subtitle: "Employee & Provider Solutions",
    color: "from-pink-500 to-rose-500",
    features: [
      "Employee wellness credit distribution",
      "CSV bulk upload for onboarding",
      "Usage analytics dashboard",
      "Integrated benefits management",
      "Smart scheduling & bookings",
      "Recurring membership management",
      "Staff commission tracking",
      "Client retention analytics"
    ],
    journey: [
      "Direct-to-staff wellness distribution",
      "Automated compliance reporting",
      "At-risk member identification & re-engagement"
    ]
  }
];

export function UserSegments() {
  const [activeSegment, setActiveSegment] = useState(0);
  const ActiveIcon = segments[activeSegment].icon;

  return (
    <section className="py-20 bg-black/20" id="solutions">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Solutions for Everyone
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Tailored experiences for individuals, businesses, and corporate wellness
          </p>
        </motion.div>

        {/* Segment Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {segments.map((segment, index) => {
            const SegmentIcon = segment.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveSegment(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                  activeSegment === index
                    ? `bg-gradient-to-r ${segment.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <SegmentIcon className="w-5 h-5" />
                <span className="font-semibold">{segment.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Segment Content */}
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Features */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${segments[activeSegment].color} rounded-full mb-4`}>
                <ActiveIcon className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">{segments[activeSegment].subtitle}</span>
              </div>
              <h3 className="text-2xl text-white mb-6">Key Features</h3>
              <div className="space-y-3">
                {segments[activeSegment].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: User Journey */}
            <div>
              <h3 className="text-2xl text-white mb-6">User Journey</h3>
              <div className="space-y-4">
                {segments[activeSegment].journey.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`bg-gradient-to-r ${segments[activeSegment].color} bg-opacity-10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-purple-400/50 transition-all cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${segments[activeSegment].color} flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                        {idx + 1}
                      </div>
                      <p className="text-white pt-1">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full px-6 py-4 bg-gradient-to-r ${segments[activeSegment].color} rounded-xl font-semibold text-white shadow-lg`}
              >
                Get Started with {segments[activeSegment].title}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}