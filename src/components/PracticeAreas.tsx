import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface PracticeAreasProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (preselectedService?: string) => void;
  onNavigateHome?: () => void;
  initialServiceId?: string;
  selectedSubService?: string | null;
}

const SERVICE_IMAGES: Record<string, string> = {
  "business-setup-and-closure-services": "/cs_firm_consultation.jpg",
  "limited-liability-partnership": "/hero_corporate_desk.png",
  "corporate-advisory-and-compliances": "/practice_corporate.jpg",
  "corporate-and-financial-restructuring": "/mission_governance_boardroom.jpg",
  "due-diligence": "/ca_consultation_ultra_hd.jpg",
  "fema-and-rbi": "/commercial_goals_cta.jpg",
  "audit-and-certification": "/practice_audit.jpg",
  "sebi-and-listing-compliances": "/images/industry/Shares-Stock_hd.jpg",
  "representation-and-other-services": "/hero_lady_justice.jpg",
  "trademark-and-ip-rights": "/practice_ip.jpg"
};

const SERVICE_HEADLINES: Record<string, string> = {
  "business-setup-and-closure-services": "Understanding Corporate Formation & Structured Exit: Statutory Incorporation, SPICe+ & NCLT Winding-Up",
  "limited-liability-partnership": "Understanding Limited Liability Partnership: Agreement Vetting, Statutory Filings & Partner Governance",
  "corporate-advisory-and-compliances": "Understanding Corporate Secretarial Advisory: Board Governance, MCA V3 Surveillance & Annual Adherence",
  "corporate-and-financial-restructuring": "Understanding Corporate & Financial Restructuring: Schemes of Arrangement, Mergers & Capital Reorganization",
  "due-diligence": "Understanding Secretarial Due Diligence: Pre-Investment Audits, Risk Mapping & Transactional Assurance",
  "fema-and-rbi": "Understanding FEMA & Foreign Exchange Governance: Inbound FDI, ECB Structuring & RBI Reporting",
  "audit-and-certification": "Understanding Secretarial Audit & Assurance: Form MR-3 Certification, Board Due Diligence & Disclosures",
  "sebi-and-listing-compliances": "Understanding SEBI Listing Compliances: LODR Regulations, Insider Trading Controls & Exchange Liaison",
  "representation-and-other-services": "Understanding Regulatory Representation: Advocacy before NCLT, Ministry of Corporate Affairs & Regional Directors",
  "trademark-and-ip-rights": "Understanding Trademark & Brand Protection: Comprehensive Classification, Examination Replies & Opposition Defense"
};

export default function PracticeAreas({ 
  onSelectService, 
  onOpenConsultation, 
  onNavigateHome,
  initialServiceId,
  selectedSubService
}: PracticeAreasProps) {
  // Active service state initialized from initialServiceId or first service
  const [activeServiceId, setActiveServiceId] = useState<string>(
    initialServiceId || SERVICES[0]?.id || ""
  );

  // Sync state when parent navigates or URL changes
  useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService: ServiceItem = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const activeImage = SERVICE_IMAGES[activeService?.id] || "/cs_firm_consultation.jpg";
  const activeHeadline = SERVICE_HEADLINES[activeService?.id] || `Understanding ${activeService.title}: Causes, Impact, and Legal Protection`;

  const handleSelectService = (srv: ServiceItem) => {
    setActiveServiceId(srv.id);
    onSelectService(srv);
    if (window.innerWidth < 1024) {
      const el = document.getElementById("service-content-pane");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div id="services-page" className="bg-[#fcfbf9] text-[#1e293b] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 sm:mb-8">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#b8967e] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-zinc-600">Services</span>
          <span>/</span>
          <span className="text-[#b8967e] font-semibold truncate">{activeService.title}</span>
        </div>

        {/* =========================================================================
            TWO-COLUMN MAIN CONTAINER (MATCHING IMAGE 1 DESIGN WITH CLEAN ADJACENT BORDER)
            Left Column: "Our Services" Card
            Right Column: Featured Hero Image + Headline + Full Narrative + Structured Sections
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* -----------------------------------------------------------------------
              LEFT COLUMN (SIDEBAR): "Our Services" Card
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28">
            
            {/* OUR SERVICES CARD */}
            <div className="bg-[#FAF7F2] border border-[#e8dfd5] rounded-2xl p-5 sm:p-7 shadow-xs">
              
              {/* Header with Title & Accent Line */}
              <div className="flex items-center justify-between pb-4">
                <h3 className="font-serif sm:font-sans font-bold text-lg sm:text-xl text-[#001B41] tracking-tight">
                  Our Services
                </h3>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#b8967e] via-[#c5a880]/60 to-transparent ml-3 rounded-full" />
              </div>

              {/* Vertical Services List with Arrow ↗ */}
              <div className="space-y-2.5 mt-2">
                {SERVICES.map((srv) => {
                  const isActive = srv.id === activeService.id;

                  return (
                    <button
                      key={srv.id}
                      onClick={() => handleSelectService(srv)}
                      className={`w-full text-left py-3.5 px-4 rounded-lg flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#b8967e] text-white font-medium shadow-md shadow-[#b8967e]/20"
                          : "bg-white border border-zinc-200/80 text-zinc-800 font-medium hover:border-[#b8967e]/50 hover:bg-[#fffdfa] hover:text-[#001B41] shadow-2xs group"
                      }`}
                    >
                      <span className={`text-xs sm:text-sm tracking-wide leading-snug line-clamp-1 ${isActive ? "text-white font-semibold" : "text-zinc-800 group-hover:text-[#001B41]"}`}>
                        {srv.title}
                      </span>

                      <ArrowUpRight 
                        size={17} 
                        className={`shrink-0 transition-transform duration-200 ${
                          isActive 
                            ? "text-white" 
                            : "text-zinc-400 group-hover:text-[#b8967e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN: HERO IMAGE + HEADLINE + FULL NARRATIVE + CLEAN POINTS
              With adjacent vertical border dividing left & right columns
             ----------------------------------------------------------------------- */}
          <div 
            id="service-content-pane" 
            className="lg:col-span-8 xl:col-span-8 space-y-6 sm:space-y-8 lg:border-l lg:border-zinc-200/80 lg:pl-8 xl:pl-10"
          >
            
            {/* 1. Large Top Hero Featured Image */}
            <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 group">
              <img 
                src={activeImage} 
                alt={`${activeService.title} - Corporate Secretarial Advisory`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase bg-[#001B41]/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-bold shadow-md">
                  {activeService.category} Practice
                </span>
              </div>
            </div>

            {/* 2. Main Headline (Serif font matching Image 1) */}
            <div className="space-y-3">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#001B41] leading-tight tracking-tight">
                {activeHeadline}
              </h1>
            </div>

            {/* Sub-Navigation Focus Callout (if navigated via a specific sub-service) */}
            {selectedSubService && (
              <div className="bg-[#b8967e]/15 border border-[#b8967e]/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c6b54] font-bold block">
                    Selected Sub-Navigation Focus
                  </span>
                  <div className="text-sm font-semibold text-[#001B41]">
                    {selectedSubService}
                  </div>
                </div>
                <button
                  onClick={() => onOpenConsultation(`${activeService.title} - ${selectedSubService}`)}
                  className="px-4 py-2 bg-[#b8967e] hover:bg-[#a68269] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-md"
                >
                  Inquire for This Sub-Service
                </button>
              </div>
            )}

            {/* 3. Full Narrative Description */}
            <div className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                {activeService.fullDesc || activeService.shortDesc}
              </p>
            </div>

            {/* 4. Structured Scope & Deliverables (clean points with -) */}
            {activeService.sections && activeService.sections.length > 0 ? (
              <div className="space-y-8 pt-6 border-t border-zinc-200/80">
                {activeService.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base text-[#b8967e] font-bold">•</span>
                      <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-[#001B41]">
                        {section.heading}
                      </h3>
                    </div>

                    {section.intro && (
                      <p className="text-xs sm:text-sm text-zinc-600 font-sans italic">
                        {section.intro}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                      {section.items.map((item, iIdx) => {
                        const isSubSelected = selectedSubService && (item.toLowerCase().includes(selectedSubService.toLowerCase()) || selectedSubService.toLowerCase().includes(item.toLowerCase()));
                        return (
                          <div 
                            key={iIdx} 
                            className={`flex items-start gap-2.5 text-xs sm:text-[14px] leading-relaxed transition-colors ${
                              isSubSelected
                                ? "text-[#001B41] font-semibold bg-[#b8967e]/15 px-3 py-1.5 rounded-lg"
                                : "text-zinc-700 hover:text-[#001B41]"
                            }`}
                          >
                            <span className="text-[#b8967e] font-bold select-none shrink-0 text-sm sm:text-base leading-snug">-</span>
                            <span className="leading-snug">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 pt-6 border-t border-zinc-200/80">
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#b8967e] font-bold">•</span>
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-[#001B41]">
                    Comprehensive Scope of Services & Deliverables:
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                  {(activeService.subServices || activeService.keyOfferings).map((item, idx) => {
                    const isSubSelected = selectedSubService && (item.toLowerCase().includes(selectedSubService.toLowerCase()) || selectedSubService.toLowerCase().includes(item.toLowerCase()));
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-start gap-2.5 text-xs sm:text-[14px] leading-relaxed transition-colors ${
                          isSubSelected
                            ? "text-[#001B41] font-semibold bg-[#b8967e]/15 px-3 py-1.5 rounded-lg"
                            : "text-zinc-700 hover:text-[#001B41]"
                        }`}
                      >
                        <span className="text-[#b8967e] font-bold select-none shrink-0 text-sm sm:text-base leading-snug">-</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
