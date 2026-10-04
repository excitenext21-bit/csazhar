import React from "react";
import { ArrowRight } from "lucide-react";

interface VisionMissionSectionProps {
  onNavigateTeam?: () => void;
  onExploreServices?: () => void;
  onOpenConsultation?: (topic?: string) => void;
}

export default function VisionMissionSection({ 
  onNavigateTeam, 
  onExploreServices, 
  onOpenConsultation 
}: VisionMissionSectionProps) {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-white relative overflow-hidden">
      {/* Subtle Ambient Background Depth */}
      <div 
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#b8967e]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#001B41]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#001B41] leading-tight tracking-tight">
            Our <span className="font-serif italic text-[#b8967e]">Purpose</span>
          </h2>

          <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
        </div>

        {/* Unified Purpose Showcase Container (Vision & Mission as One) */}
        <div className="bg-[#faf8f5]/60 rounded-[32px] border border-zinc-200/90 shadow-[0_8px_32px_rgba(0,27,65,0.04)] p-5 sm:p-7 lg:p-9 space-y-8 sm:space-y-10">
          
          {/* =========================================================================
              PART 1: OUR VISION (Image Left, Typography Right)
             ========================================================================= */}
          <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-10 group">
            
            {/* Inset Cinematic Photo Container */}
            <div className="w-full md:w-[46%] lg:w-[44%] shrink-0 h-[260px] sm:h-[320px] md:h-auto min-h-[300px] lg:min-h-[340px] rounded-2xl overflow-hidden relative bg-zinc-100 shadow-xs border border-zinc-200/60">
              <img 
                src="/vision_card.jpg" 
                alt="Azhar Shaikh & Associates Corporate Vision" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
                decoding="sync"
              />

              {/* Cinematic Ambient Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B41]/75 via-[#001B41]/15 to-transparent pointer-events-none" />

              {/* Corner Badge */}
              <div className="absolute bottom-4 right-5 bg-[#b8967e] text-white px-4 py-2 rounded-xl shadow-xl text-center leading-tight z-10 border border-white/25 select-none group-hover:bg-[#a68269] transition-colors duration-300">
                <div className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/90">OUR</div>
                <div className="text-sm font-serif font-bold tracking-wider uppercase">VISION</div>
              </div>
            </div>

            {/* Typography Content Area */}
            <div className="flex-1 py-3 sm:py-5 lg:py-6 pr-2 sm:pr-4 lg:pr-6 pl-2 sm:pl-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#9a7862]">
                  <span className="w-5 h-[1.5px] bg-[#b8967e]" />
                  <span>Vision, Emerging India</span>
                </div>

                {/* Primary Statement */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#001B41] leading-[1.3] group-hover:text-[#8c6b54] transition-colors duration-300 tracking-tight">
                  “To attain global recognition and reputation as part of an emerging corporate India”
                </h3>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-200/80 group-hover:border-[#b8967e]/30 transition-colors">
                <button 
                  onClick={onNavigateTeam || (() => onOpenConsultation && onOpenConsultation("Corporate Vision"))}
                  className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#001B41] group-hover:text-[#b8967e] transition-colors cursor-pointer group/btn"
                >
                  <span>LEARN MORE</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 group-hover:border-[#b8967e] flex items-center justify-center bg-white group-hover:bg-[#b8967e] text-[#001B41] group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Elegant Divider between Vision and Mission */}
          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-zinc-200/90" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#f7f4ef] px-4 text-[#b8967e]/60 flex items-center gap-2 rounded-full border border-zinc-200/60 shadow-xs py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8967e]/60" />
                <span className="w-2 h-2 rotate-45 border border-[#b8967e]/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8967e]/60" />
              </span>
            </div>
          </div>

          {/* =========================================================================
              PART 2: OUR MISSION (Typography Left, Image Right - Inverted for Rhythm)
             ========================================================================= */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 lg:gap-10 group">
            
            {/* Inset Cinematic Photo Container */}
            <div className="w-full md:w-[46%] lg:w-[44%] shrink-0 h-[260px] sm:h-[320px] md:h-auto min-h-[300px] lg:min-h-[340px] rounded-2xl overflow-hidden relative bg-zinc-100 shadow-xs border border-zinc-200/60">
              <img 
                src="/mission_card.jpg" 
                alt="Azhar Shaikh & Associates Corporate Mission" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
                decoding="sync"
              />

              {/* Cinematic Ambient Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B41]/75 via-[#001B41]/15 to-transparent pointer-events-none" />

              {/* Corner Badge */}
              <div className="absolute bottom-4 right-5 bg-[#b8967e] text-white px-4 py-2 rounded-xl shadow-xl text-center leading-tight z-10 border border-white/25 select-none group-hover:bg-[#a68269] transition-colors duration-300">
                <div className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/90">OUR</div>
                <div className="text-sm font-serif font-bold tracking-wider uppercase">MISSION</div>
              </div>
            </div>

            {/* Typography Content Area */}
            <div className="flex-1 py-3 sm:py-5 lg:py-6 pl-2 sm:pl-4 lg:pl-6 pr-2 sm:pr-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#9a7862]">
                  <span className="w-5 h-[1.5px] bg-[#b8967e]" />
                  <span>Mission, Governance & Compliance</span>
                </div>

                {/* Primary Statement */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#001B41] leading-[1.3] group-hover:text-[#8c6b54] transition-colors duration-300 tracking-tight">
                  “To uphold utmost integrity & excellence for the attainment of corporate Governance and compliance of law of land”
                </h3>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-200/80 group-hover:border-[#b8967e]/30 transition-colors">
                <button 
                  onClick={onExploreServices || (() => onOpenConsultation && onOpenConsultation("Corporate Mission"))}
                  className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#001B41] group-hover:text-[#b8967e] transition-colors cursor-pointer group/btn"
                >
                  <span>LEARN MORE</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 group-hover:border-[#b8967e] flex items-center justify-center bg-white group-hover:bg-[#b8967e] text-[#001B41] group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Minimalist Centered Brand Accent Insignia */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <span className="w-12 h-[1.5px] bg-[#b8967e]/30" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#b8967e] bg-white" />
          <span className="w-12 h-[1.5px] bg-[#b8967e]/30" />
        </div>

      </div>
    </section>
  );
}
