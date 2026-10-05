import React, { useState, useRef, useEffect } from "react";
import { 
  Factory, Landmark, Laptop, Activity, Building, TrendingUp, 
  Quote, Star, ShieldCheck, CheckCircle2, ArrowRight, Scale, 
  Sparkles, Layers, ChevronRight, ChevronLeft
} from "lucide-react";
import { TESTIMONIALS } from "../data";

interface ClienteleSectorsProps {
  initialIndustryId?: string;
  onOpenConsultation: (topic?: string) => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
}

interface DetailedIndustry {
  id: string;
  tabLabel: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  frameworks: string[];
  capabilities: string[];
  examples: string[];
  accentColor: string;
  image: string;
  illustrationType: "manufacturing" | "banking" | "tech" | "pharma" | "realestate" | "listed";
}

const DETAILED_INDUSTRIES: DetailedIndustry[] = [
  {
    id: "manufacturing-engineering",
    tabLabel: "Manufacturing",
    title: "Manufacturing & Heavy Engineering",
    tagline: "Industrial Governance, Capex Charges & Factory Law Compliance",
    icon: Factory,
    description: "Assisting major industrial manufacturing plants, capital goods producers, and auto-ancillary conglomerates with strict statutory factory governance, environmental board covenants, industrial licensing, and multi-crore consortium financing charges.",
    frameworks: [
      "Companies Act 2013",
      "Factories Act 1948",
      "State Pollution Control Boards (SPCB)",
      "MCA Form CHG-1 & CHG-4"
    ],
    capabilities: [
      "Creation, modification, and satisfaction of commercial consortium charges for heavy plant machinery",
      "Industrial land statutory diligence, conversion compliances, and factory expansion documentation",
      "Setting up captive Special Purpose Vehicles (SPVs) and auxiliary vendor joint ventures",
      "Secretarial audits and environmental governance certifications for heavy industrial units"
    ],
    examples: ["Precision Components", "Textile Conglomerates", "Industrial Machinery", "Chemical Processing", "Automotive Ancillaries"],
    accentColor: "#b8967e",
    image: "/images/industry/Manufacturing_hd.jpg",
    illustrationType: "manufacturing"
  },
  {
    id: "banking-nbfc",
    tabLabel: "Banking & NBFC",
    title: "Banking & Financial Services (NBFCs)",
    tagline: "RBI Master Directions, Systemic Governance & Credit Due Diligence",
    icon: Landmark,
    description: "Providing specialized secretarial due diligence, charge search reports across RoCs, board governance covenants, and statutory regulatory filings for non-banking financial companies (NBFCs) and banking institutions registered with the Reserve Bank of India.",
    frameworks: [
      "Reserve Bank of India Act 1934",
      "NBFC Master Directions 2023",
      "SARFAESI & Recovery Norms",
      "MCA V3 Charge Registry"
    ],
    capabilities: [
      "Exhaustive Search Reports and status reports from ROC records for bank loan sanctioning across India",
      "RBI compliance filings, statutory disclosures, and net owned fund (NOF) secretarial certificates",
      "Board committee structuring (Audit, Risk Management, ALCO) under RBI corporate governance rules",
      "Registration of commercial hypothecations, mortgage charges, and debenture trustee documentation"
    ],
    examples: ["Systemically Important NBFCs", "Microfinance Institutions", "Fintech Lending Platforms", "Housing Finance Companies"],
    accentColor: "#b8967e",
    image: "/images/industry/Non-Banking-Finance_hd.jpg",
    illustrationType: "banking"
  },
  {
    id: "it-tech-startups",
    tabLabel: "IT & Startups",
    title: "Information Technology & High-Growth Startups",
    tagline: "Venture Financing, ESOP Governance & Cross-Border Structuring",
    icon: Laptop,
    description: "Advising high-growth technology enterprises and venture-backed startups on ESOP scheme design, angel/seed/Series A-C investment documentation, SHA drafting, foreign subsidiary incorporation, and IP brand portfolio protection.",
    frameworks: [
      "DPIIT Startup India Framework",
      "SEBI (SBEB) Regulations 2021",
      "FEMA Inbound FDI (FC-GPR / FC-TRS)",
      "Companies Act Section 62"
    ],
    capabilities: [
      "Forensic drafting of Shareholders' Agreements (SHA), Share Subscription Agreements (SSA), and Founder Charters",
      "Design, statutory documentation, valuation coordination, and administration of ESOP Pools",
      "Cross-border holding company structuring and foreign subsidiary setup (Delaware, Singapore, UAE, UK)",
      "Filing Single Master Form (SMF) on the RBI FIRMS portal for overseas venture capital infusions"
    ],
    examples: ["SaaS Enterprises", "AI & Cloud Platforms", "E-Commerce Networks", "Digital Payments", "HealthTech Innovators"],
    accentColor: "#b8967e",
    image: "/images/industry/IT_hd.jpg",
    illustrationType: "tech"
  },
  {
    id: "pharmaceuticals-healthcare",
    tabLabel: "Pharma & Health",
    title: "Pharmaceuticals & Healthcare",
    tagline: "Drug Formulation IP Protection, Clinical FDI & Hospital Governance",
    icon: Activity,
    description: "Delivering high-velocity trademark brand defense for drug formulations, secretarial audits for healthcare providers, clinical joint ventures, and FDI compliances under stringent regulatory scrutiny.",
    frameworks: [
      "Drugs and Cosmetics Act 1940",
      "Trade Marks Act 1999 (NICE Class 5)",
      "CDSCO Regulatory Guidelines",
      "Corporate Social Responsibility Rules"
    ],
    capabilities: [
      "Comprehensive trademark search, classification, office action replies, and show-cause hearings for pharmaceuticals",
      "Secretarial audits and compliance management for diagnostic laboratory chains and multi-specialty hospitals",
      "Inbound FDI compliances under brownfield and greenfield pharmaceutical automatic and government routes",
      "Mandatory Corporate Social Responsibility (CSR) committee governance and annual disclosures"
    ],
    examples: ["API Formulation Units", "Diagnostic Laboratory Chains", "Medical Device Manufacturers", "Specialty Hospital Networks"],
    accentColor: "#b8967e",
    image: "/images/industry/Pharmaceuticals_hd.jpg",
    illustrationType: "pharma"
  },
  {
    id: "real-estate-infrastructure",
    tabLabel: "Real Estate & Infra",
    title: "Real Estate & Infrastructure",
    tagline: "SPV Structuring, RERA Alignment & Debenture Capital Documentation",
    icon: Building,
    description: "Joint development agreements, SPV formation for residential and commercial township projects, RERA alignment, private placement of non-convertible debentures (NCDs), and nationwide RoC title search reports.",
    frameworks: [
      "Real Estate (RERA) Act 2016",
      "Companies Act 2013 (PAS-3 & SH-7)",
      "Transfer of Property Act",
      "Debenture Trust Deed Compliances"
    ],
    capabilities: [
      "Special Purpose Vehicle (SPV) formation and secretarial governance for large-scale township and infrastructure assets",
      "Drafting Joint Development Agreements (JDA), development management contracts, and revenue-sharing covenants",
      "Private placement documentation, PAS-3 filings, and charge creation for secured Non-Convertible Debentures (NCDs)",
      "Exhaustive title diligence, mortgage charge registrations, and RoC search reports for institutional lenders"
    ],
    examples: ["Urban Township Developers", "Infrastructure EPC Contractors", "Commercial Asset SPVs", "Logistics & Warehousing Parks"],
    accentColor: "#b8967e",
    image: "/images/industry/Construction_hd.jpg",
    illustrationType: "realestate"
  },
  {
    id: "listed-entities",
    tabLabel: "Listed Corporates",
    title: "Public Listed Corporations",
    tagline: "Continuous SEBI LODR Surveillance, Postal Ballot Scrutiny & Insider Trading Control",
    icon: TrendingUp,
    description: "Delivering continuous SEBI LODR compliance, annual secretarial compliance reports under Regulation 24A, structured digital database monitoring under PIT regulations, and independent Scrutinizer roles for AGMs, EGMs, and postal ballots.",
    frameworks: [
      "SEBI (LODR) Regulations 2015",
      "SEBI (PIT) Regulations 2015",
      "Section 204 Secretarial Audit (MR-3)",
      "SEBI (SAST) Takeover Regulations"
    ],
    capabilities: [
      "Mandatory Annual Secretarial Audit under Section 204 of the Companies Act (Form MR-3) for mainboard listed entities",
      "Structured Digital Database (SDD) implementation and verification under SEBI Insider Trading regulations",
      "Independent Scrutinizer oversight for annual general meetings, court-convened meetings, and e-voting postal ballots",
      "Boardroom committee secretarial management (Audit, Nomination & Remuneration, Stakeholders Relationship, CSR)"
    ],
    examples: ["BSE / NSE Mainboard Entities", "SME Exchange Listed Companies", "High-Value Debt-Listed Corporates", "Public Limited Giants"],
    accentColor: "#b8967e",
    image: "/images/industry/Shares-Stock_hd.jpg",
    illustrationType: "listed"
  }
];

export default function ClienteleSectors({ 
  initialIndustryId,
  onOpenConsultation, 
  onNavigateServices 
}: ClienteleSectorsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    return initialIndustryId || "manufacturing-engineering";
  });

  useEffect(() => {
    if (initialIndustryId) {
      setActiveTabId(initialIndustryId);
    }
  }, [initialIndustryId]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTestimonialsPaused, setIsTestimonialsPaused] = useState<boolean>(false);

  // Auto-scroll testimonials carousel every 5 seconds
  useEffect(() => {
    if (isTestimonialsPaused) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // If at the end, smoothly loop back to the beginning
        if (container.scrollLeft >= maxScroll - 15) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Advance smoothly by one exact card width + gap
          const firstCard = container.querySelector(".snap-start") as HTMLElement | null;
          const scrollStep = firstCard ? firstCard.offsetWidth + 24 : 360;
          container.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isTestimonialsPaused]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const firstCard = container.querySelector(".snap-start") as HTMLElement | null;
      const scrollStep = firstCard ? firstCard.offsetWidth + 24 : 360;

      if (direction === "right") {
        if (container.scrollLeft >= maxScroll - 15) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      } else {
        if (container.scrollLeft <= 15) {
          container.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -scrollStep, behavior: "smooth" });
        }
      }
    }
  };

  const activeSector = DETAILED_INDUSTRIES.find(s => s.id === activeTabId) || DETAILED_INDUSTRIES[0];

  return (
    <div id="industries" className="bg-[#fcfbf9] text-[#1e293b] relative overflow-hidden min-h-screen">
      <span id="clientele" className="sr-only" />

      {/* Ambient background glows */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#b8967e]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 -left-40 w-[600px] h-[600px] bg-[#001B41]/5 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24 relative z-10 space-y-16 sm:space-y-20">
        
        {/* =========================================================================
            SECTION 1: MASTHEAD
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#001B41] leading-[1.15] tracking-tight">
            Industries We <span className="font-serif italic text-[#b8967e]">Serve</span>
          </h1>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            From high-growth tech innovators to century-old manufacturing houses, financial institutions, and BSE/NSE listed conglomerates, 
            our secretarial and legal advisory adapts to the nuances of every regulated sector.
          </p>

          <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
        </div>

        {/* =========================================================================
            SECTION 2: ULTRA-MODERN TABBED INDUSTRY SHOWCASE (DARK NAVY THEME - SCREENSHOT 2 PALETTE)
            Top: Segmented Horizontal Icon Tabs Bar (with dividers & active highlight)
            Bottom: Split Area (Left: Modern Vector Art Illustration | Right: Narrative, Extra Content & DETAILS Pill Button)
           ========================================================================= */}
        <div className="bg-[#001B41] text-white rounded-[32px] border border-[#b8967e]/35 shadow-2xl overflow-hidden relative">
          
          {/* Top Horizontal Segmented Tab Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-white/10 divide-x divide-white/10 bg-[#001433]">
            {DETAILED_INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeTabId === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setActiveTabId(ind.id);
                    window.history.replaceState(null, "", `?page=industries&industry=${encodeURIComponent(ind.id)}`);
                  }}
                  className={`group flex flex-col items-center justify-center py-5 sm:py-6 px-3 cursor-pointer transition-all duration-300 relative text-center focus:outline-none ${
                    isActive 
                      ? "bg-[#001B41] shadow-xs text-[#b8967e]" 
                      : "hover:bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Top Active Indicator Strip */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#b8967e]" />
                  )}

                  {/* Icon */}
                  <div className={`transition-all duration-300 transform ${
                    isActive 
                      ? "text-[#b8967e] scale-110 drop-shadow-xs" 
                      : "text-zinc-400 group-hover:text-white group-hover:-translate-y-0.5"
                  }`}>
                    <Icon size={26} strokeWidth={isActive ? 2 : 1.7} />
                  </div>

                  {/* Tab Label */}
                  <span className={`text-xs font-mono tracking-wider mt-2.5 transition-colors uppercase ${
                    isActive 
                      ? "font-bold text-[#b8967e]" 
                      : "font-semibold text-zinc-400 group-hover:text-white"
                  }`}>
                    {ind.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Split Showcase Area */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* -----------------------------------------------------------------------
                LEFT COLUMN: INDUSTRY SECTOR PHOTOGRAPHY (ONLY THE IMAGE, TRANSPARENT)
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/15 group bg-transparent">
                <img 
                  src={activeSector.image} 
                  alt={activeSector.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* -----------------------------------------------------------------------
                RIGHT COLUMN: TYPOGRAPHY, RICH CONTENT, CHECKLIST & DETAILS BUTTON
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header: Title */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight tracking-tight">
                  {activeSector.title}
                </h2>
              </div>

              {/* Main Narrative Description */}
              <p className="text-zinc-300 font-sans text-sm sm:text-[15px] leading-relaxed">
                {activeSector.description}
              </p>

              {/* Core Advisory Capabilities Checklist */}
              <div className="pt-3 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSector.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-200 font-sans">
                      <CheckCircle2 size={14} className="text-[#b8967e] shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: DETAILS Pill Button */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenConsultation(`${activeSector.title} Advisory`)}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b8967e] to-[#a68269] hover:from-[#c5a880] hover:to-[#b8967e] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>DETAILS</span>
                  <ArrowRight size={14} />
                </button>

                {onNavigateServices && (
                  <button
                    onClick={onNavigateServices}
                    className="text-xs font-mono font-bold tracking-wider uppercase text-[#e2cfc2] hover:text-[#b8967e] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>View All Services</span>
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            SECTION 3: CLIENT ENDORSEMENTS & TESTIMONIALS (LIGHT "INDUSTRIES WE SERVE" THEME)
           ========================================================================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/90 shadow-[0_12px_45px_rgba(0,27,65,0.04)] relative overflow-hidden">
          
          {/* Header Row: Title & Scroll Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#001B41]">
              What Clients <span className="font-serif italic text-[#b8967e]">Say</span>
            </h3>

            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-zinc-200/90 bg-[#faf8f5] hover:bg-[#001B41] text-[#001B41] hover:text-white transition-all flex items-center justify-center shadow-xs hover:shadow-md cursor-pointer group"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-zinc-200/90 bg-[#faf8f5] hover:bg-[#001B41] text-[#001B41] hover:text-white transition-all flex items-center justify-center shadow-xs hover:shadow-md cursor-pointer group"
              >
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Horizontally Auto-Scrollable Testimonials Carousel */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsTestimonialsPaused(true)}
            onMouseLeave={() => setIsTestimonialsPaused(false)}
            onTouchStart={() => setIsTestimonialsPaused(true)}
            onTouchEnd={() => setIsTestimonialsPaused(false)}
            className="flex gap-6 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start bg-[#faf8f5] border border-zinc-200/90 hover:border-[#b8967e]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md select-none"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#b8967e]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#b8967e]" />
                      ))}
                    </div>
                    <Quote size={20} className="text-[#b8967e]/40" />
                  </div>

                  <p className="text-xs text-zinc-600 font-sans leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/80">
                  <div className="font-serif text-sm font-bold text-[#001B41]">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#8c6b54] font-sans font-medium">
                    {t.designation}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenConsultation("Enterprise Sector Advisory")}
              className="igual-btn cursor-pointer inline-flex"
            >
              <span className="igual-btn-icon bg-[#b8967e] text-white px-4 py-3 flex items-center justify-center text-lg font-bold border-r border-[#c5a880]/40">
                +
              </span>
              <span className="igual-btn-text bg-[#001B41] text-white hover:bg-[#071d3a] px-6 py-3 flex items-center justify-center text-xs sm:text-sm font-serif tracking-wider font-semibold transition-colors">
                Engage Dedicated Sector Counsel
              </span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// INLINE VECTOR GRAPHIC COMPONENT (Matching screenshot aesthetic)
// -----------------------------------------------------------------------------
function IndustryVectorGraphic({ type }: { type: string }) {
  switch (type) {
    case "pharma":
      // Laboratory test tubes rack
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Flask */}
          <path d="M70 120L45 160C42 165 46 170 52 170H108C114 170 118 165 115 160L90 120V70H70V120Z" fill="#b8967e" fillOpacity="0.15" stroke="#b8967e" strokeWidth="2.5" />
          <path d="M52 155L65 135H95L108 155C104 162 56 162 52 155Z" fill="#b8967e" fillOpacity="0.35" />
          
          {/* Test Tube Stand */}
          <rect x="25" y="150" width="170" height="8" rx="4" fill="#001B41" />
          <path d="M35 158V175M185 158V175" stroke="#001B41" strokeWidth="4" strokeLinecap="round" />
          <rect x="35" y="105" width="150" height="6" rx="3" fill="#001B41" />

          {/* Test Tube 1 (Amber / Gold) */}
          <rect x="52" y="75" width="22" height="70" rx="11" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <path d="M54 110H72V134C72 139 68 143 63 143C58 143 54 139 54 134V110Z" fill="#c5a880" />
          <circle cx="63" cy="120" r="2.5" fill="white" fillOpacity="0.8" />
          <circle cx="67" cy="130" r="1.5" fill="white" fillOpacity="0.8" />

          {/* Test Tube 2 (Purple / Plum) */}
          <rect x="99" y="75" width="22" height="70" rx="11" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <path d="M101 100H119V134C119 139 115 143 110 143C105 143 101 139 101 134V100Z" fill="#8c6b54" />
          <circle cx="110" cy="115" r="2" fill="white" fillOpacity="0.8" />
          <circle cx="106" cy="126" r="1.5" fill="white" fillOpacity="0.8" />

          {/* Test Tube 3 (Red / Warm Terracotta) */}
          <rect x="146" y="75" width="22" height="70" rx="11" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <path d="M148 118H166V134C166 139 162 143 157 143C152 143 148 139 148 134V118Z" fill="#b8967e" />
          <circle cx="157" cy="128" r="2" fill="white" fillOpacity="0.8" />

          {/* Bubbles / Vapor Cloud above Test Tubes */}
          <circle cx="110" cy="50" r="12" fill="#e8dacf" stroke="#001B41" strokeWidth="2" />
          <circle cx="124" cy="42" r="10" fill="#e8dacf" stroke="#001B41" strokeWidth="2" />
          <circle cx="98" cy="42" r="8" fill="#e8dacf" stroke="#001B41" strokeWidth="2" />
          <circle cx="115" cy="30" r="7" fill="#f4ece5" stroke="#001B41" strokeWidth="2" />
          <circle cx="86" cy="60" r="4" fill="#b8967e" fillOpacity="0.4" />
          <circle cx="138" cy="58" r="3" fill="#b8967e" fillOpacity="0.4" />
        </svg>
      );

    case "manufacturing":
      // Industrial gears, calipers, precision blueprint
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="95" r="70" fill="#b8967e" fillOpacity="0.08" stroke="#b8967e" strokeWidth="2" strokeDasharray="4 4" />
          {/* Main Gear */}
          <circle cx="110" cy="95" r="42" fill="white" stroke="#001B41" strokeWidth="3" />
          <circle cx="110" cy="95" r="20" fill="#c5a880" stroke="#001B41" strokeWidth="2.5" />
          <circle cx="110" cy="95" r="8" fill="white" stroke="#001B41" strokeWidth="2" />
          {/* Gear Cogs */}
          <rect x="105" y="45" width="10" height="12" rx="2" fill="#001B41" />
          <rect x="105" y="133" width="10" height="12" rx="2" fill="#001B41" />
          <rect x="60" y="90" width="12" height="10" rx="2" fill="#001B41" />
          <rect x="148" y="90" width="12" height="10" rx="2" fill="#001B41" />
          <rect x="73" y="58" width="11" height="11" rx="2" transform="rotate(45 73 58)" fill="#001B41" />
          <rect x="135" y="120" width="11" height="11" rx="2" transform="rotate(45 135 120)" fill="#001B41" />
          <rect x="135" y="58" width="11" height="11" rx="2" transform="rotate(-45 135 58)" fill="#001B41" />
          <rect x="73" y="120" width="11" height="11" rx="2" transform="rotate(-45 73 120)" fill="#001B41" />
          {/* Smaller Interlocking Gear */}
          <circle cx="160" cy="50" r="22" fill="#faf8f5" stroke="#b8967e" strokeWidth="2.5" />
          <circle cx="160" cy="50" r="8" fill="#001B41" />
        </svg>
      );

    case "banking":
      // Classical columns facade, financial vault shield
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Crest */}
          <circle cx="110" cy="95" r="70" fill="#b8967e" fillOpacity="0.08" />
          {/* Bank Pediment (Triangle) */}
          <path d="M40 70L110 35L180 70H40Z" fill="white" stroke="#001B41" strokeWidth="3" />
          <path d="M110 50L115 58H105L110 50Z" fill="#b8967e" />
          {/* Architrave */}
          <rect x="42" y="70" width="136" height="8" fill="#c5a880" stroke="#001B41" strokeWidth="2" />
          {/* Columns */}
          <rect x="52" y="78" width="16" height="60" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <rect x="84" y="78" width="16" height="60" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <rect x="120" y="78" width="16" height="60" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <rect x="152" y="78" width="16" height="60" fill="white" stroke="#001B41" strokeWidth="2.5" />
          {/* Base Steps */}
          <rect x="36" y="138" width="148" height="8" rx="2" fill="#c5a880" stroke="#001B41" strokeWidth="2" />
          <rect x="28" y="146" width="164" height="10" rx="2" fill="white" stroke="#001B41" strokeWidth="2.5" />
          {/* Central Security Shield */}
          <path d="M110 90C110 90 125 94 125 106C125 120 110 128 110 128C110 128 95 120 95 106C95 94 110 90 110 90Z" fill="#b8967e" stroke="#001B41" strokeWidth="2" />
          <path d="M105 108L109 112L116 104" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tech":
      // Laptop terminal, cloud network, brackets
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="95" r="70" fill="#b8967e" fillOpacity="0.08" />
          {/* Laptop Screen */}
          <rect x="50" y="55" width="120" height="80" rx="6" fill="#001B41" stroke="#001B41" strokeWidth="3" />
          <rect x="56" y="61" width="108" height="68" rx="3" fill="#0a192f" />
          {/* Screen Content: Code Brackets & Lines */}
          <path d="M72 82L64 92L72 102M88 82L96 92L88 102" stroke="#b8967e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M82 80L78 104" stroke="#c5a880" strokeWidth="2" strokeLinecap="round" />
          <rect x="108" y="78" width="40" height="4" rx="2" fill="#b8967e" fillOpacity="0.6" />
          <rect x="108" y="88" width="30" height="4" rx="2" fill="white" fillOpacity="0.4" />
          <rect x="108" y="98" width="44" height="4" rx="2" fill="#b8967e" fillOpacity="0.8" />
          {/* Laptop Base */}
          <path d="M35 135H185L175 145H45L35 135Z" fill="#c5a880" stroke="#001B41" strokeWidth="2.5" />
          <rect x="95" y="136" width="30" height="3" rx="1.5" fill="#001B41" />
        </svg>
      );

    case "realestate":
      // Architectural skyline, crane, blueprints
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="95" r="70" fill="#b8967e" fillOpacity="0.08" />
          {/* Building 1 (Left) */}
          <rect x="50" y="80" width="36" height="75" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <rect x="58" y="90" width="6" height="8" fill="#b8967e" />
          <rect x="72" y="90" width="6" height="8" fill="#b8967e" />
          <rect x="58" y="105" width="6" height="8" fill="#b8967e" />
          <rect x="72" y="105" width="6" height="8" fill="#b8967e" />
          <rect x="58" y="120" width="6" height="8" fill="#b8967e" />
          <rect x="72" y="120" width="6" height="8" fill="#b8967e" />
          {/* Tower (Center) */}
          <rect x="92" y="45" width="44" height="110" fill="#faf8f5" stroke="#001B41" strokeWidth="3" />
          <path d="M92 45L114 25L136 45H92Z" fill="#c5a880" stroke="#001B41" strokeWidth="2.5" />
          <line x1="114" y1="25" x2="114" y2="15" stroke="#001B41" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="100" y="55" width="8" height="10" fill="#001B41" />
          <rect x="120" y="55" width="8" height="10" fill="#001B41" />
          <rect x="100" y="75" width="8" height="10" fill="#b8967e" />
          <rect x="120" y="75" width="8" height="10" fill="#b8967e" />
          <rect x="100" y="95" width="8" height="10" fill="#001B41" />
          <rect x="120" y="95" width="8" height="10" fill="#001B41" />
          <rect x="100" y="115" width="8" height="10" fill="#b8967e" />
          <rect x="120" y="115" width="8" height="10" fill="#b8967e" />
          {/* Building 3 (Right) */}
          <rect x="142" y="95" width="34" height="60" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <rect x="150" y="105" width="6" height="8" fill="#c5a880" />
          <rect x="162" y="105" width="6" height="8" fill="#c5a880" />
          <rect x="150" y="120" width="6" height="8" fill="#c5a880" />
          <rect x="162" y="120" width="6" height="8" fill="#c5a880" />
        </svg>
      );

    case "listed":
    default:
      // Stock exchange graph, bull growth trajectory, corporate badge
      return (
        <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="95" r="70" fill="#b8967e" fillOpacity="0.08" />
          {/* Graph Grid */}
          <rect x="40" y="45" width="140" height="100" rx="8" fill="white" stroke="#001B41" strokeWidth="2.5" />
          <line x1="40" y1="75" x2="180" y2="75" stroke="#f0ebe4" strokeWidth="1.5" />
          <line x1="40" y1="105" x2="180" y2="105" stroke="#f0ebe4" strokeWidth="1.5" />
          <line x1="40" y1="135" x2="180" y2="135" stroke="#f0ebe4" strokeWidth="1.5" />
          <line x1="75" y1="45" x2="75" y2="145" stroke="#f0ebe4" strokeWidth="1.5" />
          <line x1="110" y1="45" x2="110" y2="145" stroke="#f0ebe4" strokeWidth="1.5" />
          <line x1="145" y1="45" x2="145" y2="145" stroke="#f0ebe4" strokeWidth="1.5" />
          {/* Candlestick Bars */}
          <rect x="62" y="100" width="10" height="25" fill="#c5a880" rx="1" />
          <line x1="67" y1="92" x2="67" y2="130" stroke="#c5a880" strokeWidth="2" strokeLinecap="round" />
          <rect x="97" y="80" width="10" height="35" fill="#b8967e" rx="1" />
          <line x1="102" y1="72" x2="102" y2="120" stroke="#b8967e" strokeWidth="2" strokeLinecap="round" />
          <rect x="132" y="60" width="10" height="40" fill="#001B41" rx="1" />
          <line x1="137" y1="52" x2="137" y2="108" stroke="#001B41" strokeWidth="2" strokeLinecap="round" />
          {/* Ascending Trend Line */}
          <path d="M55 125L90 100L125 80L165 52" stroke="#b8967e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="165" cy="52" r="5" fill="#001B41" stroke="#b8967e" strokeWidth="2.5" />
        </svg>
      );
  }
}
