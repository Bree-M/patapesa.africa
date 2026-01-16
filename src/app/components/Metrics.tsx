import { motion } from "motion/react";
import { Activity, Zap, Users, TrendingUp, Target, Clock, CheckCircle, Award } from "lucide-react";

const platformMetrics = [
  {
    icon: Activity,
    metric: "System Uptime",
    target: "99.9%",
    current: "99.95%",
    status: "excellent"
  },
  {
    icon: Zap,
    metric: "API Response Time",
    target: "<200ms",
    current: "145ms",
    status: "excellent"
  },
  {
    icon: CheckCircle,
    metric: "Transaction Success",
    target: ">99%",
    current: "99.7%",
    status: "excellent"
  },
  {
    icon: Clock,
    metric: "Page Load Time",
    target: "<3s",
    current: "2.1s",
    status: "excellent"
  }
];

const businessMetrics = [
  {
    label: "Monthly Active Users",
    value: "50,000+",
    trend: "+45%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    label: "Transaction Volume",
    value: "KES 2.5B",
    trend: "+67%",
    color: "from-purple-500 to-pink-500"
  },
  {
    label: "Provider Network",
    value: "150+",
    trend: "+23%",
    color: "from-green-500 to-emerald-500"
  },
  {
    label: "LTV:CAC Ratio",
    value: "4.2:1",
    trend: "Target: >3:1",
    color: "from-yellow-500 to-orange-500"
  },
  {
    label: "Net Promoter Score",
    value: "62",
    trend: "Target: >50",
    color: "from-indigo-500 to-violet-500"
  },
  {
    label: "Avg Time to First Transaction",
    value: "5 days",
    trend: "Target: <7",
    color: "from-pink-500 to-rose-500"
  }
];

const providerMetrics = [
  {
    icon: TrendingUp,
    title: "Cost Reduction",
    value: "~40%",
    description: "vs traditional channels",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Lead Conversion",
    value: "24%",
    description: "Target: >20%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Provider Satisfaction",
    value: "4.7/5",
    description: "Target: >4.5/5",
    color: "from-[#D4A43B] to-yellow-500"
  }
];

export function Metrics() {
  return (
    <section className="py-20 bg-black/20" id="metrics">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Performance Metrics & KPIs
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Real-time platform performance and business metrics
          </p>
        </motion.div>

        {/* Platform Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-6 text-center">Platform Performance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-6 border border-[#D4A43B]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">{metric.metric}</div>
                    <div className="text-xs text-gray-500">Target: {metric.target}</div>
                  </div>
                </div>
                <div className="text-3xl text-white font-bold mb-1">{metric.current}</div>
                <div className="inline-flex px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                  <span className="text-xs text-green-400 font-semibold">Excellent</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-6 text-center">Business Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
              >
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">{metric.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Provider Success Metrics */}
        <div>
          <h3 className="text-2xl text-white mb-6 text-center">Provider Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {providerMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg text-white mb-2">{metric.title}</h4>
                <div className="text-4xl text-white font-bold mb-2">{metric.value}</div>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
