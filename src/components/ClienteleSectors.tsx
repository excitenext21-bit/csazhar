import React, { useState } from "react";
import { 
  Factory, Landmark, Laptop, Activity, Building, TrendingUp, 
  Quote, Star, ShieldCheck, CheckCircle2, ArrowRight 
} from "lucide-react";
import { INDUSTRY_SECTORS, TESTIMONIALS } from "../data";

interface ClienteleSectorsProps {
  onOpenConsultation: () => void;
}

const ICON_MAP: Record<string, any> = {
  Factory,
  Landmark,
  Laptop,
  Activity,
  Building,
  TrendingUp
};

export default function ClienteleSectors({ onOpenConsultation }: ClienteleSectorsProps) {
  return (
    <section id="industries" className="py-24 bg-[#fcfbf9] text-[#1e293b] relative overflow-hidden scroll-mt-24">
      <span id="clientele" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="section-title text-3xl sm:text-5xl text-[#001B41]">
            Governance Expertise <span className="font-serif italic text-[#b8967e]">Across Every Sector</span>
          </h2>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
            From high-growth tech disruptors to century-old manufacturing houses and BSE/NSE listed conglomerates, 
            our secretarial and trademark counsel adapts to the nuances of every regulated industry.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        {/* Industry Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {INDUSTRY_SECTORS.map((sector) => {
            const Icon = ICON_MAP[sector.iconName] || Factory;

            return (
              <div
                key={sector.id}
                className="bg-white border border-zinc-200/80 hover:border-[#b8967e]/60 rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center transition-colors duration-300 shadow-md">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#09172e] group-hover:text-[#b8967e] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-zinc-600 font-sans mt-2 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9a7862] font-semibold block">
                    Domain Clusters:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.examples.map((ex, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-sans px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded-lg text-zinc-700"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
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
              Experiences That <span className="font-serif italic text-[#b8967e]">Speak for Us</span>
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
