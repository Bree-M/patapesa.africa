import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    title: "General Inquiries",
    email: "info@patapesa.africa",
    description: "General questions and information"
  },
  {
    icon: Mail,
    title: "Business & Partnerships",
    email: "contact@circlefund.africa",
    description: "Partnership opportunities and business inquiries"
  },
  {
    icon: Mail,
    title: "Customer Support",
    email: "support@patapesa.africa",
    description: "Technical support and customer service"
  },
  {
    icon: Mail,
    title: "Privacy Requests",
    email: "privacy@patapesa.africa",
    description: "Data protection and privacy inquiries"
  },
  {
    icon: Mail,
    title: "Media Inquiries",
    email: "media@patapesa.africa",
    description: "Press and media relations"
  }
];

export function ContactPage() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Have questions? We're here to help 24/7
          </p>
          <div className="inline-flex flex-col gap-2 px-6 py-4 bg-gradient-to-r from-[#D4A43B]/20 to-yellow-500/20 rounded-xl border border-[#D4A43B]/30">
            <div className="text-white font-semibold">Registered Entity</div>
            <div className="text-[#D4A43B] text-lg">Circle Fund Africa Ltd</div>
            <div className="text-gray-300 text-sm">Nairobi, Kenya</div>
          </div>
        </motion.div>
      </section>

      {/* Email Contacts Grid */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl text-white mb-8 text-center">Contact Channels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A43B]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mb-4">
                <channel.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-white font-semibold mb-2">{channel.title}</h3>
              <a 
                href={`mailto:${channel.email}`}
                className="text-[#D4A43B] hover:text-yellow-500 transition-colors block mb-2"
              >
                {channel.email}
              </a>
              <p className="text-gray-400 text-sm">{channel.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <div className="text-gray-300">+254 (0) 700 000 000</div>
                  <div className="text-gray-400 text-sm">Mon-Fri 8am-6pm EAT</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">WhatsApp Business</div>
                  <div className="text-gray-300">+254 (0) 700 000 001</div>
                  <div className="text-gray-400 text-sm">Instant messaging support</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Office</div>
                  <div className="text-gray-300">Circle Fund Africa Ltd</div>
                  <div className="text-gray-300">Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl text-white mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A43B] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A43B] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A43B] transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A43B] transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}