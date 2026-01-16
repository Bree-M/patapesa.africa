import { motion } from "motion/react";
import { CheckCircle, Clock } from "lucide-react";

const roadmapData = [
  {
    month: 1,
    focus: "API & Website MVP",
    actions: "Deploy public API & MVP website with landing pages and 3-5 blogs",
    deliverables: "Phase One MVP ready",
    status: "completed"
  },
  {
    month: 2,
    focus: "SEO Setup",
    actions: "Technical SEO, schema, internal links, mobile optimization",
    deliverables: "SEO-ready site",
    status: "completed"
  },
  {
    month: 3,
    focus: "Content Expansion",
    actions: "Publish guides, comparisons, lead magnets",
    deliverables: "10+ blogs + lead magnets",
    status: "in-progress"
  },
  {
    month: 4,
    focus: "AI Integration",
    actions: "ChatGPT plugin + OpenAPI live testing",
    deliverables: "AI answers start recommending PataPesa/PesaDirect™",
    status: "in-progress"
  },
  {
    month: 5,
    focus: "Social & Newsletter",
    actions: "Launch LinkedIn, X, YouTube channels; start weekly posts & newsletter",
    deliverables: "Initial audience engagement",
    status: "upcoming"
  },
  {
    month: 6,
    focus: "External Mentions",
    actions: "Guest posts, press, fintech directories",
    deliverables: "Authority + backlinks for AI & SEO",
    status: "upcoming"
  },
  {
    month: 7,
    focus: "Analytics & Feedback",
    actions: "Track SEO rankings, API usage, AI queries",
    deliverables: "Optimize API & content",
    status: "upcoming"
  },
  {
    month: 8,
    focus: "Content Refresh",
    actions: "Update blogs, add new services",
    deliverables: "Continuous improvement",
    status: "upcoming"
  },
  {
    month: 9,
    focus: "AI Optimization",
    actions: "Refine API responses, add FAQs",
    deliverables: "Better AI answer quality",
    status: "upcoming"
  },
  {
    month: 10,
    focus: "User Engagement Growth",
    actions: "Webinars, videos, interactive guides",
    deliverables: "Higher adoption & PesaDirect™ visibility",
    status: "upcoming"
  },
  {
    month: 11,
    focus: "Cross-Promotion",
    actions: "Highlight PesaDirect™ across all pages",
    deliverables: "Ecosystem adoption",
    status: "upcoming"
  },
  {
    month: 12,
    focus: "Review & Scale",
    actions: "Audit SEO, AI, API; plan next 12 months",
    deliverables: "Ready for Year 2 growth",
    status: "upcoming"
  }
];

export function Roadmap() {
  return (
    <section className="py-20 bg-black/20" id="roadmap">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            12-Month Execution Roadmap
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Month-by-month strategy for market dominance
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all ${
                  item.status === "completed"
                    ? "border-green-500/50 bg-green-500/5"
                    : item.status === "in-progress"
                    ? "border-[#D4A43B]/50 bg-[#D4A43B]/5"
                    : "border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Month Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                    item.status === "completed"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      : item.status === "in-progress"
                      ? "bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}>
                    M{item.month}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl text-white font-semibold">{item.focus}</h3>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                        item.status === "completed"
                          ? "bg-green-500/20 border border-green-500/30"
                          : item.status === "in-progress"
                          ? "bg-[#D4A43B]/20 border border-[#D4A43B]/30"
                          : "bg-white/5 border border-white/10"
                      }`}>
                        {item.status === "completed" ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-xs text-green-400 font-semibold">Completed</span>
                          </>
                        ) : item.status === "in-progress" ? (
                          <>
                            <Clock className="w-4 h-4 text-[#D4A43B]" />
                            <span className="text-xs text-[#D4A43B] font-semibold">In Progress</span>
                          </>
                        ) : (
                          <span className="text-xs text-gray-400 font-semibold">Upcoming</span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="font-semibold text-gray-400">Actions:</span> {item.actions}
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold">Deliverables:</span> {item.deliverables}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-8 border border-[#D4A43B]/30"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl text-green-400 font-bold mb-2">2/12</div>
              <div className="text-gray-300">Completed</div>
            </div>
            <div>
              <div className="text-4xl text-[#D4A43B] font-bold mb-2">2/12</div>
              <div className="text-gray-300">In Progress</div>
            </div>
            <div>
              <div className="text-4xl text-gray-400 font-bold mb-2">8/12</div>
              <div className="text-gray-300">Upcoming</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
