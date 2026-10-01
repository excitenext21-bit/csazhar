import React from "react";
import { Calculator } from "lucide-react";

interface FinancialGoalsCTAProps {
  onOpenConsultation?: (topic?: string) => void;
}

export default function FinancialGoalsCTA({ onOpenConsultation }: FinancialGoalsCTAProps) {
  const handleAction = () => {
    if (onOpenConsultation) {
      onOpenConsultation("Chartered Accountant Services - Your Financial Goals");
    }
  };

  return (
    <section className="w-full bg-[#001B41] relative overflow-hidden select-none border-0 shadow-none">
      
      {/* =========================================================================
          DESKTOP & TABLET LAYOUT: Full-Width Razor-Sharp Vector + 8K HD Photo
         ========================================================================= */}
      <div className="hidden md:flex relative w-full min-h-[360px] lg:min-h-[400px] xl:min-h-[440px] items-center">
        
        {/* Left Side: Angled Consultation Photo & Parallel Copper/Gold Stripes */}
        <div className="absolute left-0 top-0 bottom-0 w-[46%] lg:w-[48%] xl:w-[49%] h-full overflow-hidden">
          <svg 
            viewBox="0 0 490 360" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <defs>
              {/* Copper gradient for the left diagonal stripe */}
              <linearGradient id="copperStripe" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#001B41" />
                <stop offset="35%" stopColor="#3d261b" />
                <stop offset="65%" stopColor="#b8967e" />
                <stop offset="100%" stopColor="#dfbe9f" />
              </linearGradient>

              {/* Gold gradient for the right separating stripe */}
              <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dfbe9f" />
                <stop offset="45%" stopColor="#b8967e" />
                <stop offset="85%" stopColor="#7a5238" />
                <stop offset="100%" stopColor="#3b2016" />
              </linearGradient>

              {/* Clipped polygon for the consultation photo */}
              <clipPath id="photoTrapezoid">
                <polygon points="95,0 415,0 490,360 170,360" />
              </clipPath>
            </defs>

            {/* Deep navy wedge at the far top-left */}
            <polygon points="0,0 55,0 0,165" fill="#001B41" />

            {/* Left Copper Diagonal Band */}
            <polygon points="55,0 95,0 170,360 0,360 0,165" fill="url(#copperStripe)" />

            {/* Ultra-Clear 8K Consultation Photo inside the Parallel Diagonal Trapezoid */}
            <g clipPath="url(#photoTrapezoid)">
              <image 
                href="/ca_consultation_ultra_hd.jpg" 
                x="45" 
                y="-10" 
                width="460" 
                height="380" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </g>

            {/* Left crisp line separating copper and photo */}
            <line x1="95" y1="0" x2="170" y2="360" stroke="#001B41" strokeWidth="2.5" />

            {/* Right sleek Gold Gradient Accent Line */}
            <line x1="415" y1="0" x2="490" y2="360" stroke="url(#goldAccent)" strokeWidth="3" />
          </svg>
        </div>

        {/* Right Side: Midnight Navy Canvas with Watermark, Typography, and Action Button */}
        <div className="w-full relative z-10 flex">
          {/* Spacer corresponding to the left photo */}
          <div className="w-[43%] lg:w-[45%] xl:w-[47%] shrink-0" aria-hidden="true" />

          {/* Right Content Area */}
          <div className="w-[57%] lg:w-[55%] xl:w-[53%] py-10 lg:py-14 pr-8 sm:pr-12 lg:pr-20 pl-4 sm:pl-8 flex flex-col justify-center relative">
            
            {/* Background Subtle Laurel Watermark 1 (Behind text) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 w-44 h-72 text-[#b8967e] opacity-[0.08] pointer-events-none -z-10 rotate-[-12deg]">
              <svg viewBox="0 0 160 300" fill="currentColor" className="w-full h-full">
                <path d="M80 10 Q70 150 80 290" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M78 30 C55 20 45 40 76 42 Z" />
                <path d="M82 30 C105 20 115 40 84 42 Z" />
                <path d="M76 65 C48 55 40 78 74 80 Z" />
                <path d="M84 65 C112 55 120 78 86 80 Z" />
                <path d="M74 105 C42 95 35 122 72 125 Z" />
                <path d="M86 105 C118 95 125 122 88 125 Z" />
                <path d="M73 145 C38 135 32 165 71 170 Z" />
                <path d="M87 145 C122 135 128 165 89 170 Z" />
                <path d="M73 185 C38 178 32 208 71 212 Z" />
                <path d="M87 185 C122 178 128 208 89 212 Z" />
                <path d="M74 225 C42 220 38 250 72 254 Z" />
                <path d="M86 225 C118 220 122 250 88 254 Z" />
                <path d="M76 265 C52 262 50 286 75 288 Z" />
                <path d="M84 265 C108 262 110 286 85 288 Z" />
              </svg>
            </div>

            {/* Background Subtle Laurel Watermark 2 (On far right edge) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-52 h-80 text-[#b8967e] opacity-[0.11] pointer-events-none -z-10 rotate-[14deg]">
              <svg viewBox="0 0 160 300" fill="currentColor" className="w-full h-full">
                <path d="M80 10 Q70 150 80 290" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M78 30 C55 20 45 40 76 42 Z" />
                <path d="M82 30 C105 20 115 40 84 42 Z" />
                <path d="M76 65 C48 55 40 78 74 80 Z" />
                <path d="M84 65 C112 55 120 78 86 80 Z" />
                <path d="M74 105 C42 95 35 122 72 125 Z" />
                <path d="M86 105 C118 95 125 122 88 125 Z" />
                <path d="M73 145 C38 135 32 165 71 170 Z" />
                <path d="M87 145 C122 135 128 165 89 170 Z" />
                <path d="M73 185 C38 178 32 208 71 212 Z" />
                <path d="M87 185 C122 178 128 208 89 212 Z" />
                <path d="M74 225 C42 220 38 250 72 254 Z" />
                <path d="M86 225 C118 220 122 250 88 254 Z" />
              </svg>
            </div>

            {/* Eyebrow: Calculator Icon + Label */}
            <div className="flex items-center gap-2.5 text-[#b8967e] mb-3">
              <Calculator size={19} strokeWidth={1.8} className="text-[#b8967e]" />
              <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.24em] font-semibold text-[#c5a085]">
                CHARTERED ACCOUNTANT SERVICES
              </span>
            </div>

            {/* Main Headline: Serif Pure White & Champagne Gold */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold leading-[1.12] tracking-tight">
              <span className="text-white block">Your Financial Goals.</span>
              <span className="text-[#c5a085] block mt-1.5 font-serif font-bold">Our Expertise.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-300 font-sans tracking-wide leading-relaxed mt-3.5 max-w-xl">
              Strategic advice. Compliant solutions. Lasting value.
            </p>

            {/* CTA Button: Sleek Two-Part Design matching Hero Section Button exactly */}
            <div className="pt-5 sm:pt-6">
              <button
                type="button"
                onClick={handleAction}
                className="inline-flex items-center rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group focus:outline-none border border-[#c5a880]/30 shadow-none hover:shadow-none"
                aria-label="Get in Touch with our Chartered Accountant team"
              >
                {/* Left White Square with + */}
                <span className="w-10 h-10 sm:w-11 sm:h-11 bg-white text-[#001B41] flex items-center justify-center font-bold text-base sm:text-lg group-hover:bg-zinc-100 transition-colors select-none">
                  +
                </span>

                {/* Right Gold Capsule with Text */}
                <span className="px-6 sm:px-7 h-10 sm:h-11 bg-[#b8967e] group-hover:bg-[#a68269] text-white font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase flex items-center justify-center transition-colors whitespace-nowrap">
                  GET IN TOUCH
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================================
          MOBILE LAYOUT: Full-Width Stacked Touch Experience
         ========================================================================= */}
      <div className="md:hidden flex flex-col w-full bg-[#001B41] text-white">
        {/* Photo Container with Fade */}
        <div className="relative w-full h-64 overflow-hidden">
          <img 
            src="/ca_consultation_ultra_hd.jpg" 
            alt="Chartered Accountant Services Consultation" 
            className="w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B41] via-[#001B41]/40 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#001B41] to-transparent" />
          
          {/* Subtle Diagonal Gold Line across bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8967e] to-transparent" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#b8967e]">
            <Calculator size={17} strokeWidth={1.8} />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#c5a085]">
              CHARTERED ACCOUNTANT SERVICES
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
            <span className="text-white">Your Financial Goals.</span><br />
            <span className="text-[#c5a085]">Our Expertise.</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            Strategic advice. Compliant solutions. Lasting value.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center rounded-lg overflow-hidden active:scale-95 transition-transform border border-[#c5a880]/30 shadow-none hover:shadow-none cursor-pointer"
            >
              <span className="w-10 h-10 bg-white text-[#001B41] flex items-center justify-center font-bold text-base select-none">
                +
              </span>
              <span className="px-6 h-10 bg-[#b8967e] text-white text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center whitespace-nowrap">
                GET IN TOUCH
              </span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
