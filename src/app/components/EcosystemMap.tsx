import { motion } from "motion/react";
import { Search, Globe, Code, Share2, Mail, Zap, Users, TrendingUp, ArrowDown, ArrowRight } from "lucide-react";

const ecosystemLayers = [
  {
    layer: 1,
    title: "User Entry Points",
    items: [
      {
        icon: Search,
        title: "User Searches",
        subtitle: "Google / AI / Apps",
        color: "from-blue-500 to-cyan-500"
      }
    ]
  },
  {
    layer: 2,
    title: "Content Hub",
    items: [
      {
        icon: Globe,
        title: "PataPesa Website",
        subtitle: "Blogs, Guides, FAQ",
        color: "from-[#D4A43B] to-yellow-500"
      }
    ]
  },
  {
    layer: 3,
    title: "Distribution Channels",
    items: [
      {
        icon: Code,
        title: "API Layer",
        subtitle: "/financial-services, /pesadirect, /faq",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Share2,
        title: "Social Media",
        subtitle: "LinkedIn, X, YouTube, TikTok",
        color: "from-green-500 to-emerald-500"
      },
      {
        icon: Mail,
        title: "Newsletter",
        subtitle: "Lead Magnets, Guides, Tools",
        color: "from-orange-500 to-red-500"
      }
    ]
  },
  {
    layer: 4,
    title: "AI Integration",
    items: [
      {
        icon: Zap,
        title: "AI Platforms",
        subtitle: "ChatGPT, Bing AI, Copilot, LangChain",
        color: "from-indigo-500 to-violet-500"
      }
    ]
  },
  {
    layer: 5,
    title: "User Engagement",
    items: [
      {
        icon: Users,
        title: "Engagement & Retention",
        subtitle: "Website, App, PesaDirect™ Usage",
        color: "from-[#003366] to-[#D4A43B]"
      }
    ]
  }
];

export function EcosystemMap() {
  return (
    <section className="py-20 bg-black/20" id="ecosystem">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            PataPesa Ecosystem
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Multi-channel user acquisition and engagement strategy
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {ecosystemLayers.map((layer, layerIndex) => (
            <div key={layerIndex}>
              {/* Layer Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: layerIndex * 0.1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <TrendingUp className="w-4 h-4 text-[#D4A43B]" />
                  <span className="text-sm text-gray-300 font-semibold">{layer.title}</span>
                </div>
              </motion.div>

              {/* Layer Items */}
              <div className={`grid gap-6 mb-8 ${layer.items.length === 1 ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
                {layer.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: layerIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#D4A43B]/50 transition-all ${
                      layer.items.length === 1 ? 'max-w-md mx-auto' : ''
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-white mb-2 text-center font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              {/* Arrow Connector */}
              {layerIndex < ecosystemLayers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: layerIndex * 0.1 + 0.3 }}
                  className="flex justify-center mb-8"
                >
                  <div className="flex flex-col items-center">
                    <ArrowDown className="w-8 h-8 text-[#D4A43B]" />
                    {layer.items.length > 1 && layerIndex === 2 && (
                      <div className="flex gap-4 mt-2">
                        <ArrowRight className="w-6 h-6 text-[#D4A43B]/50" />
                        <ArrowRight className="w-6 h-6 text-[#D4A43B]/50" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { label: "Content Pieces", value: "150+", color: "from-blue-500 to-cyan-500" },
            { label: "API Integrations", value: "3 Live", color: "from-[#D4A43B] to-yellow-500" },
            { label: "Social Channels", value: "5 Active", color: "from-green-500 to-emerald-500" },
            { label: "AI Platforms", value: "4+ Compatible", color: "from-purple-500 to-pink-500" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-300">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* API Endpoints Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 bg-gradient-to-br from-[#111111] to-[#003366]/20 rounded-2xl p-8 border border-[#D4A43B]/30 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-[#D4A43B]" />
            <h3 className="text-2xl text-white font-semibold">Live API Endpoints</h3>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-green-400">GET</span>
              <code className="text-gray-300">https://patapesa.africa/api/financial-services</code>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-green-400">GET</span>
              <code className="text-gray-300">https://patapesa.africa/api/pesadirect</code>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-green-400">GET</span>
              <code className="text-gray-300">https://patapesa.africa/api/faq</code>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            OpenAPI 3.0 compliant • ChatGPT Plugin compatible • Real-time responses
          </p>
        </motion.div>
      </div>
    </section>
  );
}
