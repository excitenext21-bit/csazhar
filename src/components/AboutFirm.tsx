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
  onNavigateIndustry?: (industryId: string) => void;
}

export default function AboutFirm({ 
  onNavigateTeam, 
  onOpenConsultation, 
  onExploreServices, 
  onSelectService,
  onNavigateIndustry
}: AboutFirmProps) {
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

  // All 9 Services with concise 2-line descriptions
  const practiceCards = [
    {
      id: "business-setup-and-closure-services",
      icon: Building2,
      title: "Business Setup & Closure Services",
      desc: "End-to-end incorporation of companies, Section 8, OPCs, and structured corporate exits.",
    },
    {
      id: "limited-liability-partnership",
      icon: Layers,
      title: "Limited Liability Partnership",
      desc: "LLP incorporation, tailored partnership agreements, modifications, and annual compliances.",
    },
    {
      id: "corporate-advisory-and-compliances",
      icon: Compass,
      title: "Corporate Advisory & Compliances",
      desc: "Corporate secretarial audit, board & shareholder meetings, registers, and MCA V3 filings.",
    },
    {
      id: "corporate-and-financial-restructuring",
      icon: TrendingUp,
      title: "Corporate & Financial Restructuring",
      desc: "Advisory on mergers, demergers, capital reductions, and NCLT schemes of arrangement.",
    },
    {
      id: "due-diligence",
      icon: Search,
      title: "Due Diligence",
      desc: "Comprehensive corporate compliance checks for M&A, PE funding, and credit facilities.",
    },
    {
      id: "fema-and-rbi",
      icon: Globe2,
      title: "FEMA & RBI",
      desc: "Cross-border transaction reporting, inbound FDI, outbound ODI, and RBI FIRMS filings.",
    },
    {
      id: "audit-and-certification",
      icon: Award,
      title: "Audit & Certification",
      desc: "Section 204 secretarial audits (Form MR-3), annual returns (MGT-8), and certifications.",
    },
    {
      id: "sebi-and-listing-compliances",
      icon: BarChart3,
      title: "SEBI & Listing Compliances",
      desc: "Advisory on SEBI LODR, IPO secretarial readiness, insider trading code, and takeover norms.",
    },
    {
      id: "representation-and-other-services",
      icon: Scale,
      title: "Representation & Other Services",
      desc: "Advocacy and regulatory representation before NCLT, MCA, RD, ROC, and Trademark Registry.",
    }
  ];

  const handleNextPractice = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 260;
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
      const cardWidth = card ? card.offsetWidth : 260;
      
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
          SECTION 1: ABOUT US SECTION (Exact Style from Screenshot)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Portrait with Offset Gold/Tan Block Backdrop (50% of screenshot thickness: 9px desktop, 7px mobile) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative pt-[7px] pl-[7px] sm:pt-[9px] sm:pl-[9px] w-full max-w-[420px]">
                {/* Offset Background Block in Brand Gold/Tan (Sleek 9px / 7px thickness) */}
                <div 
                  className="absolute top-0 left-0 w-[calc(100%-7px)] sm:w-[calc(100%-9px)] h-[calc(100%-7px)] sm:h-[calc(100%-9px)] bg-[#b8967e] rounded-none shadow-sm"
                  aria-hidden="true" 
                />

                {/* Foreground Photo (Extending Down & Right over the Block) */}
                <div className="relative z-10 w-full aspect-[3.8/5] sm:aspect-[4/5] bg-zinc-100 overflow-hidden shadow-2xl group">
                  <img 
                    src="/team/azhar_shaikh.jpg" 
                    alt="CS Azhar Shaikh - Senior Partner" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Title, Content Paragraphs, More About Us Button & Signature */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 max-w-2xl">
              
              {/* Heading: About Us */}
              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#001B41] leading-tight tracking-tight">
                About Us
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-5 text-sm sm:text-[15px] text-zinc-600 font-['Open_Sans',sans-serif] leading-relaxed font-normal">
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

              {/* More About Us Button (Rectangular Gold Button matching Screenshot) */}
              <div className="pt-2">
                <button
                  onClick={onNavigateTeam}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#b8967e] hover:bg-[#a68269] text-white font-['Open_Sans',sans-serif] text-sm font-semibold tracking-wide rounded-[3px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  More About Us
                </button>
              </div>

              {/* Signature Section Matching Screenshot (Circled in Green) */}
              <div className="pt-2">
                <div className="inline-block space-y-1">
                  <div className="font-['Alex_Brush',cursive] text-4xl sm:text-5xl text-[#001B41] font-normal leading-none tracking-wide select-none py-1 transform -rotate-1">
                    Azhar Shaikh
                  </div>
                  <div className="text-xs font-['Open_Sans',sans-serif] text-zinc-500 font-medium tracking-wide">
                    CS Azhar Shaikh — Founder & Senior Partner
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
          SECTION 3: "WHAT WE DO" / PRACTICE AREAS WITH SCALLOPED LADY JUSTICE
         ========================================================================= */}
      <section id="services-overview" className="py-16 lg:py-20 bg-[#fcfbf9] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Practicing Company Secretary & Legal Advocate (Height adjusted to match services box) */}
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl bg-[#001B41] border border-zinc-200/80 min-h-[340px] h-[360px] sm:h-[400px] lg:h-full">
              <img 
                src="/cs_advocate.png" 
                alt="Practicing Company Secretary & Legal Advocate" 
                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-102"
                loading="eager"
                decoding="sync"
              />
              
              {/* Subtle dark gradient overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Practice Areas Carousel */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6 sm:space-y-7 pl-0 lg:pl-3">
              
              {/* Top Header with Heading, 2-Line Subtitle & Signature Action Button */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-zinc-200/80 pb-6">
                <div className="space-y-2 max-w-2xl sm:max-w-3xl">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[42px] font-normal text-[#001B41] leading-tight tracking-tight">
                    Services We <span className="font-serif italic text-[#b8967e]">Provide</span>
                  </h2>
                  <p className="text-[17px] text-zinc-600 font-sans leading-relaxed">
                    We, at Azhar Shaikh & Associates ('ASA'), offer full range of secretarial & legal services that are specifically designed to manage business compliances, to provide simple solutions to complicated business scenarios and to assist in decision making processes.
                  </p>
                </div>

                {/* Signature Two-Part Action Button [ + | KNOW MORE ] - Redirects to Services Page */}
                <button
                  onClick={onExploreServices || (() => onOpenConsultation())}
                  className="igual-btn shrink-0 md:self-end mb-1"
                  aria-label="Know more about our services"
                >
                  <span className="igual-btn-icon">
                    +
                  </span>
                  <span className="igual-btn-text">
                    KNOW MORE
                  </span>
                </button>
              </div>

              {/* Single Unified Joined Services Box with Sleek Faint Partition Lines */}
              <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm overflow-hidden mt-1 sm:mt-2 transition-all duration-300">
                <div 
                  ref={carouselRef}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {practiceCards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <div 
                        key={idx}
                        onClick={() => {
                          const srv = SERVICES.find(s => s.id === card.id);
                          if (srv && onSelectService) {
                            onSelectService(srv);
                          } else if (onExploreServices) {
                            onExploreServices();
                          } else {
                            onOpenConsultation(card.title);
                          }
                        }}
                        className="shrink-0 w-full sm:w-1/2 md:w-1/3 snap-start p-6 sm:p-7 border-r border-zinc-200/60 last:border-r-0 sleek-card-1px hover:shadow-[inset_0_0_0_1px_#b8967e] hover:bg-[#faf7f2] hover:z-10 transition-all duration-300 group cursor-pointer flex flex-col justify-start space-y-3.5 relative overflow-hidden first:rounded-l-3xl last:rounded-r-3xl"
                      >
                        {/* Top Section: Icon with Scale & Glow on Hover */}
                        <div>
                          <div className="w-11 h-11 rounded-xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center group-hover:bg-[#b8967e] group-hover:text-white group-hover:border-[#b8967e] transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:shadow-md">
                            <Icon size={20} strokeWidth={1.75} />
                          </div>
                        </div>

                        {/* Title & Gold Accent Line */}
                        <div className="space-y-2">
                          <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#001B41] group-hover:text-[#b8967e] transition-colors duration-300 leading-snug line-clamp-2 min-h-[44px] flex items-center">
                            {card.title}
                          </h3>
                          <div className="w-6 h-[1.5px] bg-[#b8967e]/40 group-hover:w-14 group-hover:bg-[#b8967e] transition-all duration-300" />
                        </div>

                        {/* Description - Strictly 2 lines */}
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-700 font-sans leading-relaxed line-clamp-2 h-9 transition-colors duration-300">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Carousel Navigation Controls - Directionally Animated Arrows (No Box) */}
              <div className="flex items-center justify-end gap-6 pt-1">
                <button
                  onClick={handlePrevPractice}
                  className="bg-transparent border-0 p-2 text-[#b8967e] hover:text-[#001B41] transition-colors cursor-pointer flex items-center justify-center focus:outline-none group/prev"
                  aria-label="Previous practice area"
                >
                  <ArrowLeft 
                    size={30} 
                    strokeWidth={2.2} 
                    className="animate-arrow-left transition-transform duration-300 group-hover/prev:scale-110" 
                  />
                </button>
                <button
                  onClick={handleNextPractice}
                  className="bg-transparent border-0 p-2 text-[#b8967e] hover:text-[#001B41] transition-colors cursor-pointer flex items-center justify-center focus:outline-none group/next"
                  aria-label="Next practice area"
                >
                  <ArrowRight 
                    size={30} 
                    strokeWidth={2.2} 
                    className="animate-arrow-right transition-transform duration-300 group-hover/next:scale-110" 
                  />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>
 
      {/* =========================================================================
          SECTION 3.2: INDUSTRIES SECTION (Clientele & Industry Verticals)
         ========================================================================= */}
      <IndustriesSection 
        onOpenConsultation={onOpenConsultation} 
        onNavigateServices={onExploreServices}
        onNavigateIndustry={onNavigateIndustry}
      />

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

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[42px] font-normal text-[#001B41] leading-tight tracking-tight">
              What Clients <span className="font-serif italic text-[#b8967e]">Say</span>
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
                    <p className="font-serif italic text-base sm:text-lg lg:text-[20px] text-zinc-700 leading-relaxed font-normal">
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
