import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutFirm from "./components/AboutFirm";
import PracticeAreas from "./components/PracticeAreas";
import LeadershipTeam from "./components/LeadershipTeam";
import ClienteleSectors from "./components/ClienteleSectors";
import KnowledgeHub from "./components/KnowledgeHub";
import FAQSection from "./components/FAQSection";
import ContactConsultation from "./components/ContactConsultation";
import Footer from "./components/Footer";
import ServiceDetailModal from "./components/ServiceDetailModal";
import ConsultationModal from "./components/ConsultationModal";
import ICSIDisclaimerModal from "./components/ICSIDisclaimerModal";
import StatsCounterBar from "./components/StatsCounterBar";
import { SERVICES, FIRM_INFO } from "./data";
import { PageSlug, ServiceItem } from "./types";

export default function App() {
  const [activePage, setActivePage] = useState<PageSlug>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const p = urlParams.get("page") as PageSlug;
    return p || "home";
  });
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string | undefined>(undefined);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted ICSI disclaimer or bypassed for screenshot
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("nodisclaimer") === "true") {
      setIsDisclaimerOpen(false);
      return;
    }

    const accepted = localStorage.getItem("asa_icsi_disclaimer_accepted");
    if (!accepted) {
      setIsDisclaimerOpen(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem("asa_icsi_disclaimer_accepted", "true");
    setIsDisclaimerOpen(false);
  };

  const handleNavigate = (page: PageSlug, serviceId?: string, subService?: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (serviceId) {
      const srv = SERVICES.find(s => s.id === serviceId);
      if (srv) {
        setSelectedService(srv);
        setSelectedSubService(subService || null);
      }
    } else {
      setSelectedSubService(null);
    }
  };

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1e293b] font-sans flex flex-col selection:bg-[#b8967e] selection:text-white">
      {/* ICSI Code Compliance Disclaimer Modal */}
      <ICSIDisclaimerModal 
        isOpen={isDisclaimerOpen} 
        onAccept={handleAcceptDisclaimer} 
      />

      {/* Global Sticky Header */}
      <Header 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === "home" && (
          <>
            <Hero 
              onExploreServices={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onOpenConsultation={() => handleOpenConsultation()}
              onNavigateAbout={() => handleNavigate("about-team")}
            />
            
            {/* Stats Counter Bar (Igual transition counter below hero) */}
            <StatsCounterBar />

            {/* About Firm with Arched Portrait, 6-Stat Grid, Scalloped Lady Justice & Testimonials */}
            <AboutFirm 
              onNavigateTeam={() => handleNavigate("about-team")}
              onOpenConsultation={(topic) => handleOpenConsultation(topic || "Firm Retainer Advisory")}
              onExploreServices={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else handleNavigate("services");
              }}
              onSelectService={(srv) => setSelectedService(srv)}
            />

            {/* Frequently Asked Questions Section */}
            <FAQSection 
              onOpenConsultation={(topic) => handleOpenConsultation(topic || "FAQ Support Inquiry")}
              onNavigateContact={() => handleNavigate("contact")}
            />
          </>
        )}

        {/* Dedicated Page: About Firm Profile (Exact Igual About Us Page Structure) */}
        {(activePage === "about" || activePage === "about-profile") && (
          <div className="pt-24 sm:pt-32">
            <AboutFirm 
              onNavigateTeam={() => handleNavigate("about-team")}
              onOpenConsultation={(topic) => handleOpenConsultation(topic || "Firm Retainer Advisory")}
              onExploreServices={() => handleNavigate("services")}
              onSelectService={(srv) => setSelectedService(srv)}
            />
            <LeadershipTeam 
              onOpenConsultation={(topic) => handleOpenConsultation(topic)}
            />
          </div>
        )}

        {/* Dedicated Page: About Leadership & Team */}
        {activePage === "about-team" && (
          <div className="pt-28 sm:pt-36">
            <LeadershipTeam 
              onOpenConsultation={(topic) => handleOpenConsultation(topic)}
            />
            <AboutFirm 
              onNavigateTeam={() => handleNavigate("about-team")}
              onOpenConsultation={() => handleOpenConsultation("Firm Retainer Advisory")}
              onSelectService={(srv) => setSelectedService(srv)}
            />
          </div>
        )}

        {/* Dedicated Page: All Practice Areas */}
        {activePage === "services" && (
          <div className="pt-28 sm:pt-36">
            <PracticeAreas 
              onSelectService={(srv) => setSelectedService(srv)}
              onOpenConsultation={(topic) => handleOpenConsultation(topic)}
            />
          </div>
        )}

        {/* Dedicated Page: Industries & Sectors */}
        {(activePage === "industries" || activePage === "clientele") && (
          <div className="pt-28 sm:pt-36">
            <ClienteleSectors 
              onOpenConsultation={() => handleOpenConsultation("Industry Sector Engagement")}
            />
          </div>
        )}

        {/* Dedicated Page: Knowledge Base & Compliance Calendar */}
        {activePage === "knowledge-base" && (
          <div className="pt-28 sm:pt-36">
            <KnowledgeHub 
              onOpenConsultation={(subject) => handleOpenConsultation(subject)}
            />
          </div>
        )}

        {/* Dedicated Page: Frequently Asked Questions (FAQ) */}
        {(activePage === "faq" || activePage === "careers") && (
          <div className="pt-24 sm:pt-32">
            <FAQSection 
              onOpenConsultation={(topic) => handleOpenConsultation(topic || "FAQ Support Inquiry")}
              onNavigateContact={() => handleNavigate("contact")}
            />
          </div>
        )}

        {/* Dedicated Page: Contact Us */}
        {activePage === "contact" && (
          <div className="pt-24 sm:pt-28">
            <ContactConsultation 
              preselectedSubject={consultationTopic}
            />
          </div>
        )}

        {/* Dedicated Page: ICSI Disclaimer Notice */}
        {activePage === "disclaimer" && (
          <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#b8967e] font-bold">
                Statutory Code of Conduct
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#09172e]">
                ICSI Professional Disclaimer
              </h1>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-12 shadow-md space-y-6 text-sm text-zinc-700 font-sans leading-relaxed">
              <p>
                This website is operated by <strong>Azhar Shaikh & Associates</strong>, Practicing Company Secretary & Trademark Agent, 
                in strict conformity with the guidelines formulated by <strong>The Institute of Company Secretaries of India (ICSI)</strong>.
              </p>
              
              <div className="space-y-4 border-l-2 border-[#b8967e] pl-4 py-1 text-zinc-600">
                <p>
                  1. The contents of this website are purely for general informational guidance regarding corporate secretarial laws, 
                  trademark procedures, and statutory compliance frameworks in India. Nothing contained herein constitutes formal legal advice.
                </p>
                <p>
                  2. Under ICSI regulations, Practicing Company Secretaries are prohibited from soliciting clients or advertising services. 
                  By visiting this site, the visitor acknowledges that they have accessed this information of their own accord without any solicitation, 
                  advertisement, or personal inducement from the firm or its partners.
                </p>
                <p>
                  3. Transmitting or receiving information through this portal does not establish an attorney-client or professional engagement relationship. 
                  Clients requiring professional assistance are encouraged to seek formalized engagement.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div>{FIRM_INFO.registrationNumber}</div>
                <div>{FIRM_INFO.peerReviewStatus}</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectService={(srv) => setSelectedService(srv)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        subService={selectedSubService}
        onClose={() => { setSelectedService(null); setSelectedSubService(null); }}
        onConsult={(title) => handleOpenConsultation(`Inquiry for ${title}`)}
      />

      {/* Advisory Consultation Booking Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTopic={consultationTopic}
      />
    </div>
  );
}
