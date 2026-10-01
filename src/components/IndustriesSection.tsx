import React from "react";
import { 
  Factory, Landmark, Laptop, Activity, Building, TrendingUp 
} from "lucide-react";
import { INDUSTRY_SECTORS } from "../data";

interface IndustriesSectionProps {
  onOpenConsultation?: (topic?: string) => void;
}

const ICON_MAP: Record<string, any> = {
  Factory,
  Landmark,
  Laptop,
  Activity,
  Building,
  TrendingUp
};

export default function IndustriesSection({ onOpenConsultation }: IndustriesSectionProps) {
  return (
    <section id="industries" className="py-20 lg:py-24 bg-[#faf8f5] border-t border-zinc-200/80 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#001B41] tracking-tight">
            Governance Expertise <span className="font-serif italic text-[#b8967e]">Across Every Sector</span>
          </h2>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed pt-1">
            From high-growth tech disruptors to century-old manufacturing houses and BSE/NSE listed conglomerates, 
            our secretarial and trademark counsel adapts to the nuances of every regulated industry.
          </p>

          <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
        </div>

        {/* Industry Verticals 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRY_SECTORS.map((sector) => {
            const Icon = ICON_MAP[sector.iconName] || Factory;

            return (
              <div
                key={sector.id}
                onClick={() => onOpenConsultation?.(`${sector.title} Advisory`)}
                className="bg-white border border-zinc-200/80 hover:border-[#b8967e]/60 rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-5 group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle Luxury Corner Accent on Hover */}
                <div 
                  className="absolute top-0 right-0 w-12 h-16 pointer-events-none rounded-tr-2xl rounded-bl-[36px] bg-gradient-to-l from-[#b8967e]/35 via-[#d4baa8]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  aria-hidden="true"
                />

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center group-hover:bg-[#b8967e] group-hover:text-white transition-colors duration-300 shadow-md">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#09172e] group-hover:text-[#b8967e] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 font-sans mt-2.5 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-2 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9a7862] font-semibold block">
                    Domain Clusters:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.examples.map((ex, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-sans px-2.5 py-1 bg-[#faf8f5] border border-zinc-200/70 rounded-md text-zinc-700 font-medium group-hover:border-[#b8967e]/30 transition-colors"
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

      </div>
    </section>
  );
}
