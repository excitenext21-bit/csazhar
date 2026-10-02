import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenConsultation: () => void;
  onNavigateAbout: () => void;
}

export default function Hero({ onExploreServices }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[580px] lg:min-h-[640px] max-h-[1080px] lg:max-h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-12 lg:pb-8 overflow-hidden bg-[#001B41] text-white">
      
      {/* Background Layer with Subtle Cinematic Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        
        {/* Slow Breathing Ken Burns Zoom on Corporate Secretarial Desk */}
        <img 
          src="/hero_corporate_desk.png" 
          alt="Corporate Secretarial Desk with Scales of Justice and Company Law Books" 
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[center_right] lg:object-[right_center] animate-hero-slow-zoom will-change-transform"
        />

        {/* Cinematic dark navy gradients to blend seamlessly with #001B41 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B41] via-[#001B41]/90 sm:via-[#001B41]/75 to-transparent w-full lg:w-[58%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B41] via-transparent to-[#001B41]/50" />
        
        {/* Subtle Moving Ambient Warm Gold Glow Orb */}
        <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-[#b8967e]/12 blur-[130px] animate-hero-glow-1 will-change-transform" />

        {/* Subtle Moving Midnight Sapphire / Blue Ambient Orb */}
        <div className="absolute bottom-1/4 right-1/3 w-[360px] h-[360px] rounded-full bg-[#1b3d6d]/25 blur-[120px] animate-hero-glow-2 will-change-transform" />

        {/* Subtle Atmospheric Light Drift Wave */}
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-br from-transparent via-[#b8967e]/4 to-transparent rotate-12 animate-hero-sheen pointer-events-none" />

        {/* Subtle Atmospheric Fine Starlight Grid Pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(#b8967e_0.75px,transparent_0.75px)] [background-size:48px_48px] opacity-[0.05] animate-pulse-slow pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
          
          {/* Far-Left Vertical Experience Rail (Exact Igual screenshot layout) */}
          <div className="hidden sm:flex flex-col items-center shrink-0 pt-2 lg:pt-4 select-none">
            
            {/* Clean Typography Experience Badge: 15+ Years Exp (Inner & Outer Circles Removed) */}
            <div className="flex flex-col items-center justify-center select-none py-1 group/badge cursor-default">
              <span className="font-serif italic text-3xl sm:text-4xl lg:text-[42px] text-[#d6c0b0] font-normal leading-none transition-transform duration-300 group-hover/badge:scale-105 drop-shadow-sm">
                15+
              </span>
              <span className="text-[10px] lg:text-[11px] text-zinc-300 font-sans tracking-[0.2em] uppercase font-bold mt-1 text-center leading-tight whitespace-nowrap">
                Years Exp
              </span>
            </div>

            {/* Downward Arrow */}
            <div className="text-[#b8967e] text-lg lg:text-xl my-2.5 font-light select-none animate-bounce [animation-duration:2.5s]">
              ↓
            </div>

            {/* Vertical Rotated Text */}
            <div className="[writing-mode:vertical-lr] text-[10px] lg:text-[11px] tracking-[0.45em] uppercase text-zinc-400 font-mono font-medium select-none">
              CS FIRM
            </div>
          </div>

          {/* Main Hero Content Block */}
          <div className="max-w-3xl flex-1 space-y-6 sm:space-y-7">

            {/* Headline in Classical Luxury Serif Typography */}
            <h1 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.18] text-white tracking-tight space-y-1">
              <div>Practicing Company</div>
              <div>Secretary &</div>
              <div>Trademark Agent</div>
            </h1>

            {/* Signature Two-Part Action Button with Interactive Slide Text Bar */}
            <div className="pt-2 sm:pt-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={onExploreServices}
                  className="flex items-center rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#b8967e]/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border border-[#c5a880]/40 group"
                  aria-label="Explore Practice Areas"
                >
                  {/* Left Signature Plus Icon with Rotate on Hover */}
                  <span className="w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#001B41] flex items-center justify-center font-bold text-lg group-hover:bg-zinc-100 transition-all duration-300 group-hover:rotate-90 shrink-0">
                    +
                  </span>

                  {/* Interactive Slide Text Bar Container */}
                  <div className="relative bg-[#b8967e] overflow-hidden px-6 sm:px-8 h-11 sm:h-12 flex items-center gap-2.5 transition-colors duration-300">
                    
                    {/* Sliding Background Fill Bar (Slides from Left to Right on Hover) */}
                    <span 
                      className="absolute inset-0 bg-[#8f6f57] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" 
                      aria-hidden="true" 
                    />

                    {/* Sliding Light Beam Sheen across Text Bar */}
                    <span 
                      className="absolute -inset-y-2 -left-20 w-16 bg-white/20 -skew-x-20 group-hover:left-[130%] transition-all duration-700 ease-in-out pointer-events-none" 
                      aria-hidden="true" 
                    />

                    {/* Kinetic Vertical Sliding Text (Original slides up, Clone slides in from bottom) */}
                    <div className="relative z-10 overflow-hidden h-5 flex flex-col justify-center">
                      <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                        Explore Practice
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 whitespace-nowrap">
                        Explore Practice
                      </span>
                    </div>

                    {/* Animated Sliding Right Arrow */}
                    <span className="relative z-10 overflow-hidden w-0 group-hover:w-4.5 transition-all duration-300 ease-out inline-flex items-center">
                      <ArrowRight size={15} className="text-white shrink-0 -translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />
                    </span>

                  </div>
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
