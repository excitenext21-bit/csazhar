import React, { useState, useRef, useEffect } from "react";
import { 
  Phone, Quote, ArrowRight, ArrowLeft, Building2, Award, 
  ShieldAlert, Scale, CheckCircle2, ChevronRight, ChevronLeft, Star,
  Layers, Compass, TrendingUp, Search, Globe2, BarChart3
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "../data";
import { ServiceItem } from "../types";
import IndustriesSection from "./IndustriesSection";
import FinancialGoalsCTA from "./FinancialGoalsCTA";

interface AboutFirmProps {
  onNavigateTeam: () => void;
  onOpenConsultation: (topic?: string) => void;
  onExploreServices?: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

export default function AboutFirm({ onNavigateTeam, onOpenConsultation, onExploreServices, onSelectService }: AboutFirmProps) {
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  const testimonials = [
    {
      id: "1",
      quote: "The legal team was always available to answer our questions, responding promptly and thoroughly. Azhar Shaikh & Associates handled our secretarial audit with skill and professionalism, ensuring the best statutory outcome.",
      author: "Rajesh V. Singhania",
      designation: "Managing Director",
      company: "FinTech Enterprise",
      service: "Secretarial Audit & Compliance",
      location: "Mumbai",
      avatar: "/client_rajesh.jpg",
      rating: 5
    },
    {
      id: "2",
      quote: "Their trademark prosecution and brand defense saved our core product identity. The level of personal attention, boardroom acumen, and prompt turnaround from CS Azhar Shaikh was truly outstanding.",
      author: "Kavita S. Merchant",
      designation: "Chief Executive Officer",
      company: "Healthcare Brand",
      service: "Trademark & Brand Rights",
      location: "Bengaluru",
      avatar: "/client_kavita.jpg",
      rating: 5
    },
    {
      id: "3",
      quote: "We rely on ASA for complex FEMA cross-border structuring and FDI single-master form filings. They combine deep statutory mastery with pragmatic boardroom acumen, giving our Board complete confidence.",
      author: "Vikramaditya Rao",
      designation: "Director & Board Member",
      company: "Infrastructure Conglomerate",
      service: "Cross-Border Structuring",
      location: "New Delhi",
      avatar: "/client_vikram.jpg",
      rating: 5
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // All 9 Services from Image 1 ("Services Offered")
  const practiceCards = [
    {
      id: "business-setup-and-closure-services",
      icon: Building2,
      title: "Business Setup & Closure Services",
      desc: "End-to-end incorporation of Private/Public companies, Section 8, OPC, foreign subsidiaries, and structured fast-track entity exit.",
      image: "/practice_corporate.jpg"
    },
    {
      id: "limited-liability-partnership",
      icon: Layers,
      title: "Limited Liability Partnership",
      desc: "Structuring, incorporation, tailored LLP agreements, partner additions/cessation, and annual statement of accounts & solvency filings.",
      image: "/practice_audit.jpg"
    },
    {
      id: "corporate-advisory-and-compliances",
      icon: Compass,
      title: "Corporate Advisory & Compliances",
      desc: "Retainer-based corporate secretarial services, statutory registers, board/shareholder meetings, and MCA V3 filings.",
      image: "/practice_ip.jpg"
    },
    {
      id: "corporate-and-financial-restructuring",
      icon: TrendingUp,
      title: "Corporate & Financial Restructuring",
      desc: "Strategic advisory on Mergers, Demergers, Fast-Track Amalgamations, Capital Reductions, and NCLT Schemes of Arrangement.",
      image: "/vision_card.jpg"
    },
    {
      id: "due-diligence",
      icon: Search,
      title: "Due Diligence",
      desc: "In-depth corporate health checks for M&A, private equity investments, bank loan credit facilities, and pre-IPO verification.",
      image: "/mission_card.jpg"
    },
    {
      id: "fema-and-rbi",
      icon: Globe2,
      title: "FEMA & RBI",
      desc: "Cross-border transaction reporting, Inbound FDI, Outbound Overseas Direct Investment (ODI), ECB, and FIRMS portal filings.",
      image: "/hero_bg.jpg"
    },
    {
      id: "audit-and-certification",
      icon: Award,
      title: "Audit & Certification",
      desc: "Mandatory Section 204 Secretarial Audits (Form MR-3), Annual Return Certifications (MGT-8), and Governance compliance.",
      image: "/practice_audit.jpg"
    },
    {
      id: "sebi-and-listing-compliances",
      icon: BarChart3,
      title: "SEBI & Listing Compliances",
      desc: "Advisory on SEBI (LODR), IPO secretarial readiness, Insider Trading (PIT) code, Takeover (SAST) disclosures, and delisting.",
      image: "/practice_corporate.jpg"
    },
    {
      id: "representation-and-other-services",
      icon: Scale,
      title: "Representation & Other Services",
      desc: "Advocacy, petitions, and appearances before NCLT, Ministry of Corporate Affairs, Regional Directors, RoC, and Trademark Registry.",
      image: "/hero_lady_justice.jpg"
    }
  ];

  const handleNextPractice = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 20 : 320;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const handlePrevPractice = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 20 : 320;
      
      if (container.scrollLeft <= 15) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  // Auto-scroll practice cards every 3.5 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNextPractice();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-scroll testimonials every 4.5 seconds, pauses when user hovers
  useEffect(() => {
    if (isTestimonialPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialPaused, testimonials.length]);

  return (
    <div id="about" className="w-full bg-[#fcfbf9] text-[#1e293b] font-sans">
      
      {/* =========================================================================
          SECTION 1: THE ABOUT US HERO / TOP NARRATIVE BLOCK (Exact Igual Design)
         ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Signature Arched Portrait with Central Badge & Quote Below */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Arched Portrait Container with sleek 2px border (Exact 2px sleek frame) */}
            <div className="relative rounded-t-[140px] rounded-b-[36px] overflow-hidden p-[2px] bg-white border border-zinc-200/80 shadow-2xl group">
              <div className="rounded-t-[138px] rounded-b-[34px] overflow-hidden h-[460px] sm:h-[500px] relative">
                <img 
                  src="/team/azhar_shaikh.jpg" 
                  alt="CS Azhar Shaikh - Senior Partner" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                  decoding="sync"
                />

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Bottom Floating Quote Box (Exact Igual Quote Component) */}
            <div className="flex items-start gap-4 pt-2 px-2">
              <div className="shrink-0 text-[#b8967e] mt-1">
                <Quote size={28} className="rotate-180 text-[#b8967e] fill-[#b8967e]/20" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-zinc-600 font-serif italic leading-relaxed">
                  "The good corporate advisor is not the man who has an eye to every side and angle of contingency, and qualifies; but one who builds an enduring shield of governance and enterprise trust."
                </p>
                <div className="text-[11px] font-mono font-bold text-[#b8967e] tracking-wider uppercase pt-1">
                  — CS Azhar Shaikh, Senior Partner
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Title, Story, Team Photo & Overlaid "ASK A PARTNER" Card */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#001B41] leading-[1.14] tracking-tight">
              We Provide High-End Legal, <br />
              <span className="font-serif italic text-[#b8967e]">Compliance, and Governance Advisory</span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
              <p>
                Azhar Shaikh & Associates (‘ASA’) is an ICSI Peer-Reviewed Practicing Company Secretary firm and 
                Certified Trademark Agent practice in Pune, Maharashtra. We provide high-end legal, compliance, and governance advisory 
                across all corporate development phases.
              </p>
              <p>
                Established in 2001, ASA brings over 24 years of seasoned practice in corporate secretarial audit, 
                NCLT compounding, SEBI LODR compliance, and cross-border FEMA structuring, delivering knowledge-based, 
                result-driven counsel to corporate boards, private enterprises, and institutional stakeholders.
              </p>
            </div>

            {/* Secondary Visual: Team Photo + Overlaid "ASK A PARTNER" Callout Card */}
            <div className="pt-2 relative">
              
              {/* Group Team Photo (image1 without watermark) */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200/90 h-[280px] sm:h-[320px] bg-zinc-100">
                <img 
                  src="/team_unity.jpg" 
                  alt="Azhar Shaikh & Associates Collaborative Governance & Advisory Team" 
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  decoding="sync"
                />
              </div>

              {/* Overlaid Floating Callout Card (Exact Igual Design: Rounded-tl Leaf Corner) */}
              <div className="relative -mt-16 sm:-mt-20 ml-4 sm:ml-8 max-w-[340px] sm:max-w-[360px] bg-white rounded-tl-[36px] rounded-tr-xl rounded-b-xl p-5 sm:p-6 shadow-2xl border border-zinc-200/80 z-20 space-y-3">
                

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#09172e] leading-snug">
                  We Provide CS Practice
                </h3>

                {/* Action Button: CALL US (phone number button removed per red line in image2) */}
                <div className="pt-1">
                  <a
                    href={`tel:${FIRM_INFO.contact.phone1}`}
                    className="inline-flex items-center gap-2 bg-[#001B41] hover:bg-[#002b66] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm border border-white/10 group cursor-pointer"
                  >
                    <Phone size={13} className="text-[#b8967e] group-hover:scale-110 transition-transform" />
                    <span>CALL US</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VISION & MISSION CARDS (Exact Igual Theme Cards from Image 1)
         ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-5xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#001B41] leading-tight">
              <span className="sm:whitespace-nowrap block">Strong Governance, Seamless Compliance,</span>
              <span className="block mt-1 sm:mt-1.5">Sustainable Growth</span>
            </h2>
          </div>

          {/* 2-Column Cards Grid (Exact Igual Card Style from Image 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: VISION */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
              
              {/* Top Photo with Stacked Corner Badge */}
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden bg-zinc-100">
                <img 
                  src="/vision_card.jpg" 
                  alt="Azhar Shaikh & Associates Corporate Vision" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />

                {/* Subtle dark gradient overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Stacked Corner Badge (Exact Igual Style from Image 1) */}
                <div className="absolute bottom-4 right-6 bg-[#b8967e] text-white px-4 py-2 rounded-lg shadow-lg text-center leading-tight z-10 border border-white/20 select-none">
                  <div className="text-[10px] font-mono font-bold tracking-widest uppercase">OUR</div>
                  <div className="text-sm font-serif font-bold tracking-wider uppercase">VISION</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-xs font-sans font-semibold tracking-wider uppercase text-zinc-400">
                    Vision, Emerging India
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal text-[#09172e] leading-snug group-hover:text-[#b8967e] transition-colors">
                    To attain global recognition and reputation as part of an emerging corporate India
                  </h3>
                </div>

                {/* Action Link: LEARN MORE + */}
                <div className="pt-2">
                  <button 
                    onClick={onNavigateTeam || (() => onOpenConsultation && onOpenConsultation("Corporate Vision"))}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.18em] uppercase text-[#b8967e] hover:text-[#09172e] transition-colors cursor-pointer group/btn"
                  >
                    <span>LEARN MORE</span>
                    <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">+</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Card 2: MISSION */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
              
              {/* Top Photo with Stacked Corner Badge */}
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden bg-zinc-100">
                <img 
                  src="/mission_card.jpg" 
                  alt="Azhar Shaikh & Associates Corporate Mission" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />

                {/* Subtle dark gradient overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Stacked Corner Badge (Exact Igual Style from Image 1) */}
                <div className="absolute bottom-4 right-6 bg-[#b8967e] text-white px-4 py-2 rounded-lg shadow-lg text-center leading-tight z-10 border border-white/20 select-none">
                  <div className="text-[10px] font-mono font-bold tracking-widest uppercase">OUR</div>
                  <div className="text-sm font-serif font-bold tracking-wider uppercase">MISSION</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-xs font-sans font-semibold tracking-wider uppercase text-zinc-400">
                    Mission, Governance & Compliance
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal text-[#09172e] leading-snug group-hover:text-[#b8967e] transition-colors">
                    To uphold utmost integrity & excellence for the attainment of corporate Governance and compliance of law of land
                  </h3>
                </div>

                {/* Action Link: LEARN MORE + */}
                <div className="pt-2">
                  <button 
                    onClick={onExploreServices || (() => onOpenConsultation && onOpenConsultation("Corporate Mission"))}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.18em] uppercase text-[#b8967e] hover:text-[#09172e] transition-colors cursor-pointer group/btn"
                  >
                    <span>LEARN MORE</span>
                    <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">+</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Slider Pagination Indicator Dots (Exact Igual Style from Image 1) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="w-5 h-2 rounded-full bg-[#b8967e] transition-all" />
            <span className="w-2 h-2 rounded-full bg-[#b8967e]/40 hover:bg-[#b8967e]/70 transition-all cursor-pointer" />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "WHAT WE DO" / PRACTICE AREAS WITH SCALLOPED LADY JUSTICE
         ========================================================================= */}
      <section id="services" className="py-20 lg:py-28 bg-[#fcfbf9] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Practicing Company Secretary & Legal Advocate (Full Image 2, full container) */}
            <div className="lg:col-span-4 relative h-[460px] sm:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-[#001B41] border border-zinc-200/80">
              <img 
                src="/cs_advocate.png" 
                alt="Practicing Company Secretary & Legal Advocate" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                loading="eager"
                decoding="sync"
              />
              
              {/* Subtle dark gradient overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Practice Areas Carousel */}
            <div className="lg:col-span-8 space-y-8 pl-0 lg:pl-6">
              
              {/* Top Header with Signature Two-Part Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200/80 pb-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#001B41] tracking-tight">
                    From Compliance to <br />
                    <span className="font-serif italic text-[#b8967e]">Corporate Excellence</span>
                  </h2>
                </div>

                {/* Signature Two-Part Action Button [ + | LEARN MORE ] */}
                <button
                  onClick={onExploreServices || (() => onOpenConsultation())}
                  className="igual-btn shrink-0"
                >
                  <span className="igual-btn-icon">
                    +
                  </span>
                  <span className="igual-btn-text">
                    LEARN MORE
                  </span>
                </button>
              </div>

              {/* 9 Practice Area Cards Auto-Scrollable Carousel (Exact Design from Image 2 & sleek rounded-br corner from Image 1) */}
              <div 
                ref={carouselRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {practiceCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={idx}
                      onClick={() => {
                        if (onSelectService) {
                          const srv = SERVICES.find(s => s.id === card.id);
                          if (srv) onSelectService(srv);
                        } else {
                          onOpenConsultation(card.title);
                        }
                      }}
                      className="shrink-0 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] snap-start bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-[#b8967e]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative"
                    >
                      {/* Top-Right Decorative Corner Accent (Exact Design from Image 2) */}
                      <div 
                        className="absolute top-0 right-0 w-12 sm:w-14 h-20 sm:h-24 pointer-events-none rounded-tr-2xl rounded-bl-[44px] bg-gradient-to-l from-[#b8967e]/45 via-[#d4baa8]/25 to-transparent transition-all duration-300 group-hover:from-[#b8967e]/60 group-hover:via-[#d4baa8]/35 z-10" 
                        aria-hidden="true"
                      />

                      {/* Top Content */}
                      <div className="p-5 space-y-3 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-[#f8f5f2] border border-[#b8967e]/30 flex items-center justify-center text-[#b8967e] group-hover:bg-[#b8967e] group-hover:text-white transition-colors">
                          <Icon size={18} />
                        </div>
                        <h3 className="font-serif text-base font-bold text-[#09172e] group-hover:text-[#b8967e] transition-colors line-clamp-1">
                          {card.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-sans leading-relaxed line-clamp-3">
                          {card.desc}
                        </p>
                      </div>

                      {/* Bottom Photo */}
                      <div className="h-32 w-full overflow-hidden border-t border-zinc-100">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                          decoding="sync"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Carousel Navigation Controls (Exact Design from Image 2: Leaf-Symmetric Buttons) */}
              <div className="flex items-center justify-end gap-2.5 pt-3">
                <button
                  onClick={handlePrevPractice}
                  className="w-12 h-11 bg-[#b8967e] hover:bg-[#a68269] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none"
                  aria-label="Previous practice area"
                >
                  <ArrowLeft size={18} strokeWidth={1.75} />
                </button>
                <button
                  onClick={handleNextPractice}
                  className="w-12 h-11 bg-[#b8967e] hover:bg-[#a68269] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95 rounded-tr-[24px] rounded-bl-[24px] rounded-tl-none rounded-br-none"
                  aria-label="Next practice area"
                >
                  <ArrowRight size={18} strokeWidth={1.75} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>
 
      {/* =========================================================================
          SECTION 3.2: INDUSTRIES SECTION (Clientele & Industry Verticals)
         ========================================================================= */}
      <IndustriesSection onOpenConsultation={onOpenConsultation} />

      {/* =========================================================================
          SECTION 3.5: CHARTERED ACCOUNTANT SERVICES CTA BANNER (Your Financial Goals. Our Expertise.)
         ========================================================================= */}
      <FinancialGoalsCTA onOpenConsultation={onOpenConsultation} />

      {/* =========================================================================
          SECTION 4: "OUR TESTIMONIALS" / WHAT THEY ARE TALKING ABOUT ASA (Exact Igual Style from Screenshot)
         ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#001B41] tracking-tight">
              Experiences That <br />
              <span className="font-serif italic text-[#b8967e]">Speak for Us</span>
            </h2>

            {/* Delicate Centered Accent Line (Exact Igual Theme Element) */}
            <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
          </div>

          {/* Testimonial Showcase Block (Exact Igual Layout from Screenshot) */}
          {(() => {
            const current = testimonials[activeTestimonialIdx];
            return (
              <div 
                onMouseEnter={() => setIsTestimonialPaused(true)}
                onMouseLeave={() => setIsTestimonialPaused(false)}
                className="pt-4 sm:pt-6"
              >
                
                <div 
                  key={activeTestimonialIdx}
                  className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 lg:gap-14 transition-all duration-500"
                >
                  
                  {/* Left Column: Circular Avatar with Dotted Ring & Nestled Midnight Star Rating Badge */}
                  <div className="shrink-0 flex flex-col items-center">
                    
                    {/* Dotted / Dashed Circular Ring Container */}
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2.5 border-2 border-dashed border-[#b8967e]/60 flex items-center justify-center relative">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-zinc-100">
                        <img 
                          src={current.avatar} 
                          alt={current.author} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="eager"
                          decoding="sync"
                        />
                      </div>
                    </div>

                    {/* Star Rating Badge: Midnight Navy (#001B41) Pill Nestled Under Avatar */}
                    <div className="-mt-4 z-10 bg-[#001B41] px-4 py-1.5 rounded-md shadow-xl border border-white/10 flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={13} 
                          className="text-[#f59e0b] fill-[#f59e0b]" 
                        />
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Quote Text, Author Info & Outline Quote Marks Icon */}
                  <div className="flex-1 relative space-y-5 pt-1 text-center md:text-left">
                    
                    {/* Testimonial Quote */}
                    <p className="font-sans text-base sm:text-lg lg:text-[20px] text-zinc-700 leading-relaxed font-normal">
                      "{current.quote}"
                    </p>

                    {/* Author Name and Designation */}
                    <div className="space-y-1 pt-1">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#b8967e]">
                        {current.author}
                      </h4>
                      <p className="text-xs font-sans text-zinc-500 uppercase tracking-wider font-medium">
                        {current.service || current.designation} — {current.company}
                      </p>
                    </div>

                    {/* Decorative Double Outline Quote Marks (Exact Igual Icon from Screenshot) */}
                    <div className="hidden sm:block absolute bottom-0 right-0 pointer-events-none select-none">
                      <svg 
                        className="w-14 h-14 sm:w-16 sm:h-16 text-[#b8967e] fill-none stroke-current" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.2"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 8" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 8" />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* Slider Pagination Controls (Brand Tan Dots & Subtle Arrows) */}
                <div className="flex items-center justify-center gap-4 pt-10">
                  <button 
                    onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    aria-label="Previous testimonial"
                    className="w-8 h-8 rounded-full border border-zinc-200 hover:border-[#b8967e] flex items-center justify-center text-zinc-600 hover:text-[#b8967e] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonialIdx(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          activeTestimonialIdx === idx 
                            ? "w-6 h-2 bg-[#b8967e]" 
                            : "w-2 h-2 bg-[#b8967e]/35 hover:bg-[#b8967e]/60"
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                    aria-label="Next testimonial"
                    className="w-8 h-8 rounded-full border border-zinc-200 hover:border-[#b8967e] flex items-center justify-center text-zinc-600 hover:text-[#b8967e] transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

    </div>
  );
}
