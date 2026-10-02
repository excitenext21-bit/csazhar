import React, { useState } from "react";
import { 
  Factory, Landmark, Laptop, Activity, Building, TrendingUp, 
  Quote, Star, ShieldCheck, CheckCircle2, ArrowRight 
} from "lucide-react";
import { INDUSTRY_SECTORS, TESTIMONIALS } from "../data";

interface ClienteleSectorsProps {
  onOpenConsultation: () => void;
  onNavigateServices?: () => void;
}

const ICON_MAP: Record<string, any> = {
  Factory,
  Landmark,
  Laptop,
  Activity,
  Building,
  TrendingUp
};

export default function ClienteleSectors({ onOpenConsultation, onNavigateServices }: ClienteleSectorsProps) {
  const handleItemClick = () => {
    if (onNavigateServices) {
      onNavigateServices();
    } else {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "services";
      }
    }
  };

  return (
    <section id="industries" className="py-24 bg-white text-[#1e293b] relative overflow-hidden scroll-mt-24">
      <span id="clientele" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#001B41] leading-tight tracking-tight">
            Industries We <span className="font-serif italic text-[#b8967e]">Serve</span>
          </h2>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed max-w-4xl mx-auto pt-1">
            <span className="sm:block">From high-growth tech disruptors to century-old manufacturing houses and BSE/NSE listed conglomerates,</span>
            <span className="sm:block">our secretarial and trademark counsel adapts to the nuances of every regulated industry.</span>
          </p>

          <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
        </div>

        {/* Industry Verticals - Elegant Unboxed Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-12 lg:gap-y-16 mb-[110px]">
          {INDUSTRY_SECTORS.map((sector) => {
            const Icon = ICON_MAP[sector.iconName] || Factory;

            return (
              <div
                key={sector.id}
                onClick={handleItemClick}
                className="group cursor-pointer relative pt-7 border-t border-zinc-200/90 transition-all duration-300 flex flex-col justify-between text-center"
              >
                {/* Sleek Golden Accent Line Expanding on Hover */}
                <div 
                  className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#b8967e] via-[#d4baa8] to-[#b8967e] transition-all duration-500 ease-out" 
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar: Centered Minimal Line Icon */}
                  <div className="flex justify-center pb-2 text-[#001B41] group-hover:text-[#b8967e] group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  {/* Industry Name */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#001B41] group-hover:text-[#b8967e] transition-colors duration-300 mt-2.5 leading-snug tracking-tight">
                    {sector.title}
                  </h3>

                  {/* Two Lines from Content as given */}
                  <p 
                    className="text-zinc-600 font-sans text-sm sm:text-[14px] leading-relaxed mt-2.5 line-clamp-2 group-hover:text-zinc-800 transition-colors max-w-sm mx-auto"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Testimonials Section (Igual Testimonial Style) */}
        <div className="bg-[#001B41] text-white rounded-3xl p-8 sm:p-12 border border-[#b8967e]/30 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="sub-title">DIRECTOR & COUNSEL ENDORSEMENTS</span>
            <h3 className="section-title text-2xl sm:text-3xl font-bold text-white">
              What Clients <span className="font-serif italic text-[#b8967e]">Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#0d1e38] border border-white/10 hover:border-[#b8967e]/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1"
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

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="font-serif text-sm font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#b8967e] font-sans">
                    {t.designation}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenConsultation}
              className="igual-btn"
            >
              <span className="igual-btn-icon">
                +
              </span>
              <span className="igual-btn-text">
                Discuss Sector Engagement
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
