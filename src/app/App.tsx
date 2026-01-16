import { useState } from "react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "@/app/pages/HomePage";
import { ForIndividuals } from "@/app/pages/ForIndividuals";
import { ForBusinesses } from "@/app/pages/ForBusinesses";
import { CorporateHRPage } from "@/app/pages/CorporateHRPage";
import { WellnessPage } from "@/app/pages/WellnessPage";
import { ForInstitutions } from "@/app/pages/ForInstitutions";
import { PesaDirectPage } from "@/app/pages/PesaDirectPage";
import { MatchIntelligencePage } from "@/app/pages/MatchIntelligencePage";
import { PartnersPage } from "@/app/pages/PartnersPage";
import { InsightsPage } from "@/app/pages/InsightsPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { LegalPage } from "@/app/pages/LegalPage";
import { FAQPage } from "@/app/pages/FAQPage";
import { HowItWorksPage } from "@/app/pages/HowItWorksPage";
import { BlogPage } from "@/app/pages/BlogPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      
      // Solutions
      case "individuals":
        return <ForIndividuals />;
      case "businesses":
        return <ForBusinesses />;
      case "corporate-hr":
        return <CorporateHRPage />;
      case "wellness-providers":
        return <WellnessPage />;
      case "institutions":
        return <ForInstitutions />;
      
      // Technology
      case "pesadirect":
        return <PesaDirectPage />;
      case "match-intelligence":
        return <MatchIntelligencePage />;
      
      // Other
      case "partners":
        return <PartnersPage />;
      case "insights":
        return <InsightsPage />;
      case "blog":
        return <BlogPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "legal":
        return <LegalPage />;
      case "faq":
        return <FAQPage />;
      case "how-it-works":
        return <HowItWorksPage onNavigate={setCurrentPage} />;
      
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#003366] to-slate-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}