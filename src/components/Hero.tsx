import React from "react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenConsultation: () => void;
  onNavigateAbout: () => void;
}

export default function Hero({ onExploreServices }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#001B41] text-white">
      
      {/* Background Image: Corporate Secretarial Desk with Scales of Justice & Law Books */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/hero_corporate_desk.png" 
          alt="Corporate Secretarial Desk with Scales of Justice and Company Law Books" 
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[center_right] lg:object-[right_center]"
        />

        {/* Cinematic dark navy gradients to blend seamlessly with #001B41 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B41] via-[#001B41]/90 sm:via-[#001B41]/70 to-transparent w-full lg:w-[55%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B41] via-transparent to-[#001B41]/50" />
        
        {/* Subtle warm bronze ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] rounded-full bg-[#b8967e]/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
          
          {/* Far-Left Vertical Experience Rail (Exact Igual screenshot layout) */}
          <div className="hidden sm:flex flex-col items-center shrink-0 pt-2 lg:pt-6 select-none">
            
            {/* Dashed Circular Ring Badge: 15+ Years */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-dashed border-[#b8967e]/60 flex flex-col items-center justify-center bg-black/25 backdrop-blur-xs transition-transform duration-300 hover:scale-105 shadow-lg">
              <span className="font-serif italic text-2xl lg:text-3xl text-[#d6c0b0] font-normal leading-none">
                15+
              </span>
              <span className="text-[10px] lg:text-[11px] text-zinc-300 font-sans tracking-[0.2em] uppercase font-normal mt-1">
                Years
              </span>
            </div>

            {/* Downward Arrow */}
            <div className="text-[#b8967e] text-lg lg:text-xl my-3 font-light select-none">
              ↓
            </div>

            {/* Vertical Rotated Text */}
            <div className="[writing-mode:vertical-lr] text-[10px] lg:text-[11px] tracking-[0.45em] uppercase text-zinc-400 font-mono font-medium select-none">
              CS FIRM
            </div>
          </div>

          {/* Main Hero Content Block */}
          <div className="max-w-3xl flex-1 space-y-7 sm:space-y-8">

            {/* Headline in Classical Luxury Serif Typography */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-normal leading-[1.1] text-white tracking-tight space-y-1">
              <div>Practicing Company</div>
              <div>Secretary &</div>
              <div>Trademark Agent.</div>
            </h1>

            {/* Signature Two-Part Action Button */}
            <div className="pt-2 sm:pt-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={onExploreServices}
                  className="flex items-center rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#b8967e]/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border border-[#c5a880]/30 group"
                >
                  <span className="w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#001B41] flex items-center justify-center font-bold text-lg group-hover:bg-zinc-100 transition-colors">
                    +
                  </span>
                  <span className="bg-[#b8967e] group-hover:bg-[#a68269] text-white px-7 sm:px-8 h-11 sm:h-12 flex items-center text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-colors whitespace-nowrap">
                    Explore Practice
                  </span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative Laurel Branch Watermark in the bottom-left corner */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-20 pointer-events-none text-[#b8967e] select-none">
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 90 C 25 75, 45 55, 75 25" strokeLinecap="round" />
          <path d="M20 80 C 22 72, 28 70, 32 75 C 28 82, 22 83, 20 80 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M35 65 C 37 57, 43 55, 47 60 C 43 67, 37 68, 35 65 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M50 50 C 52 42, 58 40, 62 45 C 58 52, 52 53, 50 50 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M65 35 C 67 27, 73 25, 77 30 C 73 37, 67 38, 65 35 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M25 85 C 33 87, 35 93, 30 97 C 23 93, 22 87, 25 85 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M40 70 C 48 72, 50 78, 45 82 C 38 78, 37 72, 40 70 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M55 55 C 63 57, 65 63, 60 67 C 53 63, 52 57, 55 55 Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

    </section>
  );
}
