import React from "react";
import { 
  Factory, Landmark, Laptop, Activity, Building, TrendingUp, Scale
} from "lucide-react";
import { INDUSTRY_SECTORS } from "../data";

interface IndustriesSectionProps {
  onOpenConsultation?: (topic?: string) => void;
  onNavigateServices?: () => void;
  onNavigateIndustry?: (industryId: string) => void;
}

const ICON_MAP: Record<string, any> = {
  Factory,
  Landmark,
  Laptop,
  Activity,
  Building,
  TrendingUp,
  Scale
};

const STAGGER_DELAYS = ["0s", "0.6s", "1.2s", "1.8s", "0.9s", "1.5s"];

export default function IndustriesSection({ 
  onOpenConsultation, 
  onNavigateServices,
  onNavigateIndustry 
}: IndustriesSectionProps) {
  const handleItemClick = (sectorId: string) => {
    if (onNavigateIndustry) {
      onNavigateIndustry(sectorId);
    } else if (onNavigateServices) {
      onNavigateServices();
    } else if (onOpenConsultation) {
      onOpenConsultation(`${sectorId} Practice`);
    }
  };

  return (
    <section id="industries" className="pt-20 lg:pt-24 pb-[92px] lg:pb-[110px] bg-white border-t border-zinc-200/80 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#001B41] leading-tight tracking-tight font-['Playfair_Display',serif]">
            Industries We Serve
          </h2>

          {/* Decorative Accent Divider Matching Screenshot */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="w-10 h-[1.5px] bg-[#c5a880]/60 rounded-full" />
            <span className="w-3.5 h-[3px] bg-[#b8967e] rounded-full" />
            <span className="w-10 h-[1.5px] bg-[#c5a880]/60 rounded-full" />
          </div>
        </div>

        {/* 6 Industry Verticals - 3 Columns Layout Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-12 lg:gap-y-16">
          {INDUSTRY_SECTORS.map((sector, idx) => {
            const Icon = ICON_MAP[sector.iconName] || Factory;

            return (
              <div
                key={sector.id}
                onClick={() => handleItemClick(sector.id)}
                className="group cursor-pointer flex items-start gap-4 sm:gap-5 transition-all duration-300 select-none"
                title={`Explore ${sector.title} in Industries`}
              >
                {/* Left Sleek Icon - 1px Stroke, No Circle Border, Animated */}
                <div className="shrink-0 pt-0.5 text-[#b8967e] flex items-center justify-center">
                  <div 
                    className="relative animate-sleek-icon transition-all duration-500 ease-out transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:text-[#001B41] filter group-hover:drop-shadow-[0_8px_16px_rgba(184,150,126,0.35)]"
                    style={{ animationDelay: STAGGER_DELAYS[idx % STAGGER_DELAYS.length] }}
                  >
                    <Icon size={38} strokeWidth={1} className="transition-all duration-500" />
                  </div>
                </div>

                {/* Right Text Area: Title + Small Divider + Description */}
                <div className="flex-1 min-w-0 space-y-1">
                  {/* Heading in Playfair Display, serif */}
                  <h3 className="font-['Playfair_Display',serif] text-lg sm:text-[20px] font-bold text-[#001B41] group-hover:text-[#b8967e] transition-colors duration-300 leading-snug tracking-tight">
                    {sector.title}
                  </h3>

                  {/* Small Horizontal Accent Line under Heading */}
                  <div className="w-9 h-[1.5px] bg-[#c5a880]/70 my-2 group-hover:w-14 group-hover:bg-[#b8967e] transition-all duration-300" />

                  {/* Description in Open Sans, sans-serif */}
                  <p className="font-['Open_Sans',sans-serif] text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal group-hover:text-zinc-800 transition-colors">
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
