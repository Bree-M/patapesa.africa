import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram, Mail, ArrowUp } from "lucide-react";

// Custom X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "Individuals", page: "individuals" },
        { label: "Businesses (MSMEs)", page: "businesses" },
        { label: "Corporate & HR", page: "corporate-hr" },
        { label: "Wellness Providers", page: "wellness-providers" },
        { label: "Institutions / Providers", page: "institutions" },
      ]
    },
    {
      title: "Technology",
      links: [
        { label: "PesaDirect™", page: "pesadirect" },
        { label: "Match Intelligence™", page: "match-intelligence" },
        { label: "Partners", page: "partners" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Insights / Reports", page: "insights" },
        { label: "FAQs", page: "faq" },
        { label: "About", page: "about" },
        { label: "Contact", page: "contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", page: "legal" },
        { label: "Privacy Policy", page: "legal" },
        { label: "Data Protection", page: "legal" },
        { label: "Cookie Policy", page: "legal" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/company/patapesa-africa/", label: "LinkedIn" },
    { icon: XIcon, url: "https://x.com/patapesaafrica", label: "X (Twitter)" },
    { icon: Facebook, url: "https://www.facebook.com/share/1CTz5FmfAW/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/patapesa.africa/", label: "Instagram" },
  ];

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/10 relative">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A43B] to-yellow-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
<img 
  src="src/assets/images/patapesa-logo.png" 
  alt="PataPesa Africa Logo" 
  className="w-6 h-6 object-contain"
/>                </motion.div>
                <div>
                  <div className="text-white font-bold text-xl">
                    <span className="text-white">Pata</span>
                    <span className="text-[#D4A43B]">Pesa</span>
                    <span className="text-white ml-1">Africa</span>
                  </div>
                  <div className="text-gray-400 text-xs font-semibold">Africa's Financial Infrastructure</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed font-medium">
                Non-custodial financial infrastructure powering intelligent connections between users and verified providers across Africa.
              </p>
              
              {/* Important Disclaimer - Moved Above Social Links */}
              <motion.div 
                className="bg-gradient-to-r from-[#D4A43B]/10 to-yellow-500/10 rounded-lg p-4 border border-[#D4A43B]/30 mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white text-sm font-bold mb-2">
                  ⚠️ Important Disclaimer
                </p>
                <p className="text-gray-300 text-xs font-semibold leading-relaxed">
                  <strong className="text-[#D4A43B]">PataPesa</strong> is a <strong>financial infrastructure provider</strong>, 
                  <strong className="text-white"> NOT a bank, wallet, lender, or marketplace</strong>. 
                  All financial products are provided by <strong>licensed third-party institutions</strong>. 
                  PataPesa operates a <strong className="text-[#D4A43B]">100% non-custodial platform</strong> and 
                  <strong className="text-white"> never holds your money</strong>.
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#003366] hover:to-[#D4A43B] border border-white/10 hover:border-[#D4A43B] flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      onClick={() => handleLinkClick(link.page)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-[#D4A43B] transition-all text-sm font-semibold text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compliance References - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-5 border border-[#D4A43B]/30 hover:border-[#D4A43B]/60 transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="text-[#D4A43B] font-bold mb-1 text-sm">Compliance Reference</div>
              <div className="text-white text-base font-semibold">CF/2026/INST-01</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-5 border border-[#D4A43B]/30 hover:border-[#D4A43B]/60 transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="text-[#D4A43B] font-bold mb-1 text-sm">ODPC Registration</div>
              <div className="text-white text-base font-semibold">2026</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-5 border border-[#D4A43B]/30 hover:border-[#D4A43B]/60 transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="text-[#D4A43B] font-bold mb-1 text-sm">Entity</div>
              <div className="text-white text-base font-semibold">Circle Fund Africa Ltd</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Information - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Contact Us</h3>
              <div className="space-y-3">
                <motion.a 
                  href="mailto:info@patapesa.africa" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4A43B] transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">info@patapesa.africa</span>
                </motion.a>
                <motion.a 
                  href="mailto:contact@circlefund.africa" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4A43B] transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">contact@circlefund.africa</span>
                </motion.a>
                <motion.a 
                  href="mailto:support@patapesa.africa" 
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4A43B] transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">support@patapesa.africa</span>
                </motion.a>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Our Location</h3>
              <div className="rounded-lg overflow-hidden border-2 border-[#D4A43B]/30 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8160165491536!2d36.817223314770764!3d-1.2833687359890168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d644b8000b%3A0x2d4c0f24c5e3e5b5!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1614363287214!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="PataPesa Africa Location - Nairobi, Kenya"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                <strong className="text-white">Circle Fund Africa Ltd</strong><br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Enhanced Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm font-semibold">
              © {new Date().getFullYear()} Circle Fund Africa Ltd. All rights reserved. Registered in Kenya.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#D4A43B] to-yellow-500 text-white flex items-center justify-center shadow-lg hover:shadow-2xl z-40"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}