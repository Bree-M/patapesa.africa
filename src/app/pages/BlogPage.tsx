import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const featuredPost = {
  title: "Understanding Non-Custodial Financial Infrastructure in Africa",
  excerpt: "Why the future of African fintech is about intelligent routing, not digital wallets—and what it means for financial inclusion.",
  category: "Industry Insights",
  readTime: "8 min read",
  date: "January 2026",
  image: "financial infrastructure"
};

const recentPosts = [
  {
    title: "How AI is Transforming Credit Access for African MSMEs",
    excerpt: "Match Intelligence™ uses transaction data to unlock working capital for small businesses—without traditional collateral.",
    category: "Financial Education",
    readTime: "6 min read",
    date: "January 2026"
  },
  {
    title: "PesaDirect™ Explained: One API for All Payment Rails",
    excerpt: "Technical deep-dive into our payment orchestration layer that consolidates M-PESA, cards, banks, and stablecoins.",
    category: "Product Explainer",
    readTime: "10 min read",
    date: "December 2025"
  },
  {
    title: "The True Cost of Customer Acquisition in African Banking",
    excerpt: "Data-backed analysis showing how AI-driven distribution reduces CAC by 70% compared to traditional methods.",
    category: "Industry Commentary",
    readTime: "7 min read",
    date: "December 2025"
  },
  {
    title: "Financial Passport™: Your Business's Operational Resume",
    excerpt: "How MSMEs can turn daily transactions into creditworthiness documentation without manual paperwork.",
    category: "Product Explainer",
    readTime: "5 min read",
    date: "November 2025"
  },
  {
    title: "Kenya Data Protection Act: What Fintech Users Need to Know",
    excerpt: "Plain-language guide to your data rights under ODPC regulations and how PataPesa protects your privacy.",
    category: "Compliance & Privacy",
    readTime: "9 min read",
    date: "November 2025"
  },
  {
    title: "Corporate Wellness Credits: The Win-Win Employee Benefit",
    excerpt: "How HR teams are using subsidized wellness tokens to boost employee engagement and retention.",
    category: "Corporate Solutions",
    readTime: "6 min read",
    date: "October 2025"
  }
];

const categories = [
  "All Posts",
  "Financial Education",
  "Product Explainers",
  "Industry Commentary",
  "Compliance & Privacy",
  "Corporate Solutions"
];

export function BlogPage() {
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
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">Knowledge Hub</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            PataPesa Blog
          </h1>
          <p className="text-xl text-gray-300">
            Financial education, product insights, and industry commentary from Africa's financial infrastructure layer
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-[#D4A43B]/50 transition-all cursor-pointer">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-[#003366] to-[#D4A43B]/20 flex items-center justify-center p-12">
                <TrendingUp className="w-32 h-32 text-[#D4A43B] opacity-50" />
              </div>
              <div className="md:w-3/5 p-8">
                <div className="inline-block px-3 py-1 bg-[#D4A43B]/20 border border-[#D4A43B]/30 rounded-full text-[#D4A43B] text-sm font-semibold mb-4">
                  Featured
                </div>
                <h2 className="text-3xl text-white mb-4 font-semibold leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-gray-300">
                    {featuredPost.category}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-[#D4A43B] font-semibold hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">Recent Articles</h2>
          <p className="text-xl text-gray-300">
            SEO-optimized content designed for financial education and discoverability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recentPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4A43B]/50 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-[#003366] to-[#003366]/50 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-[#D4A43B] opacity-50" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-gray-300 text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl text-white mb-3 font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-[#D4A43B] font-semibold text-sm hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#003366] to-[#003366]/80 rounded-2xl p-12 border border-[#D4A43B]/30 text-center"
        >
          <h3 className="text-3xl text-white mb-4">Stay Informed</h3>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly financial insights, product updates, and industry analysis delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#D4A43B]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
