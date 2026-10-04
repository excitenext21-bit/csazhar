import React, { useState, useMemo } from "react";
import { 
  Building2, ShieldAlert, Layers, Compass, TrendingUp, Search, 
  Globe2, Award, BarChart3, Scale, ArrowRight, ArrowUpRight, CheckCircle2, 
  Sparkles, ShieldCheck, Clock, X
} from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface PracticeAreasProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (preselectedService?: string) => void;
  initialServiceId?: string;
}

const SERVICE_IMAGES: Record<string, string> = {
  "business-setup-and-closure-services": "/cs_firm_consultation.jpg",
  "limited-liability-partnership": "/cs_firm_consultation.jpg",
  "corporate-advisory-and-compliances": "/cs_firm_consultation.jpg",
  "corporate-and-financial-restructuring": "/mission_governance_boardroom.jpg",
  "due-diligence": "/ca_consultation_ultra_hd.jpg",
  "fema-and-rbi": "/practice_corporate.jpg",
  "audit-and-certification": "/practice_audit.jpg",
  "sebi-and-listing-compliances": "/cs_firm_consultation.jpg",
  "representation-and-other-services": "/hero_corporate_desk.png",
  "trademark-and-ip-rights": "/practice_ip.jpg"
};

export default function PracticeAreas({ onSelectService, onOpenConsultation, initialServiceId }: PracticeAreasProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Default active service set to initialServiceId or "corporate-advisory-and-compliances" (index 2 / 03), matching the screenshot
  const [activeServiceId, setActiveServiceId] = useState<string>(
    initialServiceId || SERVICES[2]?.id || SERVICES[0]?.id || ""
  );

  React.useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
      const target = SERVICES.find(s => s.id === initialServiceId);
      if (target && selectedCategory !== "All" && target.category !== selectedCategory) {
        setSelectedCategory("All");
      }
    }
  }, [initialServiceId]);

  const categories = [
    "All",
    "Corporate Law",
    "Compliance & Audit",
    "Intellectual Property",
    "Secretarial",
    "Restructuring",
    "Cross-Border"
  ];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((srv) => {
      const matchesCategory = selectedCategory === "All" || srv.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || (
        srv.title.toLowerCase().includes(q) ||
        srv.shortDesc.toLowerCase().includes(q) ||
        (srv.statutoryFramework && srv.statutoryFramework.toLowerCase().includes(q)) ||
        srv.keyOfferings.some(k => k.toLowerCase().includes(q)) ||
        (srv.subServices && srv.subServices.some(s => s.toLowerCase().includes(q)))
      );
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const activeService = useMemo(() => {
    return SERVICES.find(s => s.id === activeServiceId) || filteredServices[0] || SERVICES[0];
  }, [activeServiceId, filteredServices]);

  const statHighlights = [
    { value: "10 Core", label: "Practice Verticals", desc: "Full-Spectrum Corporate Law" },
    { value: "60+", label: "Advisory Disciplines", desc: "From Incorporation to NCLT" },
    { value: "100%", label: "Statutory Adherence", desc: "MCA V3 & SEBI Compliance" },
    { value: "ICSI Unit", label: "Peer-Reviewed Practice", desc: "COP No. 8924 | TM Agent 28419" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Scope & Statutory Risk Mapping",
      desc: "Comprehensive diagnostic under the Companies Act, SEBI, or FEMA to establish compliance feasibility and eliminate penalty exposure.",
      phase: "DIAGNOSTIC"
    },
    {
      step: "02",
      title: "Charter & Resolution Drafting",
      desc: "Forensic drafting of board resolutions, notices, MoA/AoA amendments, and shareholder covenants ensuring zero legal ambiguity.",
      phase: "GOVERNANCE"
    },
    {
      step: "03",
      title: "Regulatory Filing & Scrutiny Management",
      desc: "Flawless electronic filings via MCA V3, RBI FIRMS, or TM Registry with proactive procedural follow-ups to guarantee timely approvals.",
      phase: "EXECUTION"
    },
    {
      step: "04",
      title: "Assurance Certification & Post-Filing Audit",
      desc: "Issuance of official Secretarial Compliance Reports, updated statutory registers, and ongoing governance surveillance.",
      phase: "ASSURANCE"
    }
  ];

  return (
    <div id="services" className="bg-[#fcfbf9] text-[#1e293b] relative overflow-hidden min-h-screen">
      
      {/* Background Decorative Ambient Layers */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#b8967e]/5 blur-[160px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#001B41]/5 blur-[180px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-20 relative z-10 space-y-14 sm:space-y-18">
        
        {/* =========================================================================
            SECTION 1: MASTHEAD & CAPABILITY STATS
           ========================================================================= */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#b8967e]/10 border border-[#b8967e]/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#001B41] font-bold">
                PRACTICE SPECTRUM & REGULATORY JURISPRUDENCE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#001B41] leading-[1.15] tracking-tight">
              Corporate Governance & <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#b8967e]">Statutory Practice Areas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Full-spectrum corporate secretarial, capital markets, statutory audit, and intellectual property solutions 
              designed to mitigate statutory risks, resolve complex corporate disputes, and maintain impeccable governance standards.
            </p>

            <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
          </div>

          {/* Trust & Capability Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {statHighlights.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-zinc-200/90 hover:border-[#b8967e]/60 rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,27,65,0.03)] hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#001B41] group-hover:text-[#b8967e] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#8c6b54] mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 font-sans mt-1 line-clamp-1">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================================
            SECTION 2: SERVICES SHOWCASE (SCREENSHOT REPLICA LAYOUT)
            Left: CS Firm Consultation Image + Active Service Overview
            Right: Numbered Services List with ↗ arrows & Brand Tan Active Highlight
           ========================================================================= */}
        <div className="bg-white border border-zinc-200/90 rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,27,65,0.04)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* -----------------------------------------------------------------------
                LEFT COLUMN: CS FIRM CONSULTATION IMAGE & SERVICE CARD
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
              
              {/* CS Firm Professional Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 group">
                <img 
                  src={SERVICE_IMAGES[activeService?.id] || "/cs_firm_consultation.jpg"}
                  alt={`${activeService?.title} - Azhar Shaikh & Associates CS Firm`}
                  className="w-full h-[280px] sm:h-[350px] lg:h-[390px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001B41]/85 via-[#001B41]/20 to-transparent pointer-events-none" />

                {/* Corner Category Capsule */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#001B41]/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 font-bold shadow-md">
                    {activeService?.category}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#e2cfc2] mb-1 font-semibold">
                    SELECTED PRACTICE VERTICAL
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-white drop-shadow-sm">
                    {activeService?.title}
                  </h3>
                </div>
              </div>

              {/* Active Service Overview Card */}
              {activeService && (
                <div className="bg-[#faf8f5] border border-zinc-200/90 rounded-2xl p-5 space-y-3.5 shadow-xs">
                  {activeService.statutoryFramework && (
                    <div className="text-[11px] font-mono font-semibold text-[#8c6b54] tracking-wide flex items-center gap-1.5">
                      <Scale size={13} className="shrink-0 text-[#b8967e]" />
                      <span className="truncate">{activeService.statutoryFramework}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-[13px] text-zinc-600 font-sans leading-relaxed line-clamp-3">
                    {activeService.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-zinc-200 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(activeService)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#001B41] hover:text-[#b8967e] transition-colors cursor-pointer group/btn"
                    >
                      <span>Explore Scope</span>
                      <div className="w-6 h-6 rounded-full border border-zinc-300 group-hover/btn:border-[#b8967e] flex items-center justify-center bg-white text-[#001B41] group-hover/btn:bg-[#b8967e] group-hover/btn:text-white transition-all shadow-xs">
                        <ArrowUpRight size={12} />
                      </div>
                    </button>

                    <button
                      onClick={() => onOpenConsultation(activeService.title)}
                      className="text-xs font-sans font-semibold px-3.5 py-1.5 rounded-xl bg-[#001B41] text-white hover:bg-[#b8967e] transition-colors cursor-pointer shadow-xs"
                    >
                      Inquire Practice
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* -----------------------------------------------------------------------
                RIGHT COLUMN: NUMBERED SERVICES ACCORDION / LIST (AS PER SCREENSHOT)
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Search & Category Filter Navigation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200">
                
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-sans transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "bg-[#001B41] text-white font-semibold shadow-xs"
                            : "bg-[#faf8f5] text-zinc-600 hover:text-[#001B41] hover:bg-zinc-200/70 border border-zinc-200/80"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Quick Search */}
                <div className="relative w-full sm:w-48 shrink-0">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search practice..."
                    className="w-full bg-[#faf8f5] border border-zinc-200 rounded-xl px-3 py-1.5 pl-8 pr-7 text-xs text-[#001B41] placeholder:text-zinc-400 focus:outline-none focus:border-[#b8967e]"
                  />
                  <Search size={12} className="absolute left-2.5 top-2.5 text-zinc-400 pointer-events-none" />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-2 text-zinc-400 hover:text-black cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>

              </div>

              {/* Exact Screenshot Replica List */}
              <div className="divide-y divide-zinc-200/90 border-b border-zinc-200/90">
                {filteredServices.length === 0 ? (
                  <div className="py-12 text-center text-zinc-500 text-sm">
                    No services found matching "{searchQuery}".
                    <button 
                      onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                      className="block mx-auto mt-2 text-xs font-mono font-bold text-[#b8967e] hover:underline"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredServices.map((srv, idx) => {
                    const isSelected = activeService?.id === srv.id;
                    const numStr = String(idx + 1).padStart(2, "0");

                    return (
                      <div
                        key={srv.id}
                        onClick={() => setActiveServiceId(srv.id)}
                        className={`group flex items-center justify-between py-4 sm:py-4.5 px-4 sm:px-6 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "bg-[#c5a880] text-[#001B41] font-semibold shadow-xs rounded-lg my-1"
                            : "hover:bg-[#faf8f5]/80 text-[#001B41]"
                        }`}
                      >
                        {/* Left: Sequence Number */}
                        <span 
                          className={`font-mono text-xs sm:text-sm tracking-wider w-10 sm:w-12 shrink-0 ${
                            isSelected 
                              ? "text-[#001B41] font-bold" 
                              : "text-zinc-400 group-hover:text-[#001B41]"
                          }`}
                        >
                          {numStr}
                        </span>

                        {/* Middle: Service Title */}
                        <span 
                          className={`flex-1 font-serif sm:font-sans text-base sm:text-lg tracking-tight transition-colors ${
                            isSelected 
                              ? "text-[#001B41] font-bold" 
                              : "font-normal group-hover:text-[#8c6b54]"
                          }`}
                        >
                          {srv.title}
                        </span>

                        {/* Right: Arrow Up Right ↗ */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(srv);
                          }}
                          title={`Explore ${srv.title}`}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer ${
                            isSelected
                              ? "text-[#001B41] hover:bg-black/10"
                              : "text-zinc-500 group-hover:text-[#001B41] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`}
                        >
                          <ArrowUpRight size={19} strokeWidth={2.2} />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom List Help Info */}
              <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Showing {filteredServices.length} practice areas</span>
                <span className="text-[#8c6b54]">Click row to preview • Click ↗ to explore scope</span>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            SECTION 3: 4-PHASE STATUTORY EXECUTION METHODOLOGY
           ========================================================================= */}
        <div className="space-y-8 pt-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#b8967e] font-bold">
              METHODOLOGY & STANDARDS
            </div>
            
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#001B41]">
              Our Regulatory <span className="font-serif italic text-[#b8967e]">Execution Architecture</span>
            </h2>

            <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How Azhar Shaikh & Associates delivers statutory certainty from preliminary scoping to post-filing audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {executionSteps.map((stepItem, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-6 space-y-3 relative hover:border-[#b8967e]/60 transition-colors shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[#b8967e]">
                    {stepItem.step}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-500 bg-[#faf8f5] px-2 py-0.5 rounded border border-zinc-200">
                    {stepItem.phase}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#001B41] group-hover:text-[#b8967e] transition-colors leading-snug">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================================
            SECTION 4: PARTNER ADVISORY CONCIERGE BANNER
           ========================================================================= */}
        <div className="bg-[#001B41] text-white border border-[#b8967e]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
          
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#b8967e_0%,transparent_70%)] opacity-15 pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e2cfc2] font-semibold block">
              PARTNER DESK ADVISORY
            </span>

            <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
              Need Tailored Secretarial Due Diligence or <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#b8967e]">Trademark Litigation Counsel?</span>
            </h3>

            <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
              CS Azhar Shaikh and Senior Associates personally evaluate complex corporate governance structures, 
              pending NCLT matters, and brand portfolio disputes with absolute discretion and precision.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-300 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#b8967e]" />
                Direct Partner Review
              </span>
              <span className="hidden sm:inline text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#b8967e]" />
                Expedited 4-Hour Response Desk
              </span>
              <span className="hidden sm:inline text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#b8967e]" />
                Strict ICSI Non-Solicitation Adherence
              </span>
            </div>

            {/* Signature Igual Two-Part CTA Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onOpenConsultation()}
                className="igual-btn cursor-pointer"
              >
                <span className="igual-btn-icon bg-[#b8967e] text-white px-4 py-3 flex items-center justify-center text-lg font-bold border-r border-[#c5a880]/40">
                  +
                </span>
                <span className="igual-btn-text bg-[#001433] text-white hover:bg-[#071d3a] px-6 py-3 flex items-center justify-center text-xs sm:text-sm font-serif tracking-wider font-semibold transition-colors">
                  Request Confidential Partner Review
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
