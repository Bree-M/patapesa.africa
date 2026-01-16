import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navStructure = [
  { id: "home", label: "Home" },
  {
    id: "solutions",
    label: "Solutions",
    submenu: [
      { id: "individuals", label: "Individuals" },
      { id: "businesses", label: "Businesses (MSMEs)" },
      { id: "corporate-hr", label: "Corporate & HR" },
      { id: "wellness-providers", label: "Wellness & Service Providers" },
      { id: "institutions", label: "Institutions / Providers" },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    submenu: [
      { id: "pesadirect", label: "PesaDirect™" },
      { id: "match-intelligence", label: "Match Intelligence™" },
    ],
  },
  { id: "partners", label: "Partners" },
  { id: "how-it-works", label: "How It Works" },
  {
    id: "resources",
    label: "Resources",
    submenu: [
      { id: "blog", label: "Blog" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
      { id: "faq", label: "FAQs" },
      { id: "insights", label: "Insights (Provider Analytics)" },
    ],
  },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#003366] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
{/* Logo - real image version */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => handleNavigate("home")}
>
  <img
    src="src/assets/images/patapesa-logo.png"  // root-relative path (Vite serves it correctly)
    alt="PataPesa Africa Logo"
    className="w-10 h-10 object-contain rounded-lg shadow-md"
  />

  {/* Optional: keep text beside the logo if you want both */}
  <div className="hidden sm:block">
    <div className="text-white font-bold text-xl">
      <span className="text-[#D4A43B]">Pata</span>
      <span className="text-white">Pesa</span>
      <span className="text-white ml-1">Africa</span>
    </div>
    <div className="text-gray-300 text-xs font-semibold">
      Africa's Financial Infrastructure
    </div>
  </div>
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navStructure.map((item) => (
              <div key={item.id} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`px-4 py-2 text-white hover:text-[#D4A43B] transition-colors flex items-center gap-1 font-medium text-sm ${
                        item.lowVisibility ? 'opacity-60' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[260px]"
                        >
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleNavigate(subItem.id)}
                              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-[#003366] hover:text-white transition-colors text-sm font-medium"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`px-4 py-2 transition-colors font-medium text-sm ${
                      currentPage === item.id
                        ? "text-[#D4A43B]"
                        : "text-white hover:text-[#D4A43B]"
                    } ${item.lowVisibility ? 'opacity-60' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("contact")}
              className="px-6 py-3 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg text-sm"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              {navStructure.map((item) => (
                <div key={item.id}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.id ? null : item.id)
                        }
                        className="w-full text-left px-4 py-3 text-white hover:text-[#D4A43B] transition-colors flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white/10 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleNavigate(subItem.id)}
                                className="w-full text-left px-8 py-2 text-white hover:text-[#D4A43B] transition-colors text-sm"
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        currentPage === item.id
                          ? "text-[#D4A43B]"
                          : "text-white hover:text-[#D4A43B]"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavigate("contact")}
                className="w-full mt-4 mx-4 px-6 py-3 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg"
                style={{ width: "calc(100% - 2rem)" }}
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}