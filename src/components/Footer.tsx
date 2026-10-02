import React from "react";
import { 
  Mail, Phone, ChevronRight,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Globe
} from "lucide-react";
import { FIRM_INFO, SERVICES } from "../data";
import { PageSlug, ServiceItem } from "../types";

interface FooterProps {
  onNavigate: (page: PageSlug, serviceId?: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavigate, onSelectService, onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#001B41] text-zinc-300 font-sans border-t border-white/10 relative overflow-hidden select-none">
      
      {/* =========================================================================
          TOP SECTION: GET IN TOUCH BANNER & LUXURY PHONE CARD (Exact Reference Style)
         ========================================================================= */}
      <div className="relative pt-16 pb-12 px-4 sm:px-8 lg:px-12 border-b border-white/10">
        
        {/* Left Decorative Copper Triangular Chevron Wedge */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-28 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 100 160" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="footerChevronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4baa8" />
                <stop offset="45%" stopColor="#b8967e" />
                <stop offset="100%" stopColor="#543725" />
              </linearGradient>
            </defs>
            <polygon points="0,0 85,80 0,160" fill="url(#footerChevronGrad)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pl-12 sm:pl-20 lg:pl-24">
          
          {/* Left Title Area - Single Line */}
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="font-serif text-[30px] font-normal leading-normal text-white tracking-tight whitespace-nowrap">
              Let's Get Started With Us
            </h3>
          </div>

          {/* Right Luxury Leaf-Shaped Phone Card: Box Size Decreased by 15% & Made Sleek */}
          <div className="w-full sm:w-auto shrink-0">
            <a 
              href={`tel:${FIRM_INFO.contact.phone1}`}
              className="group block relative rounded-tl-[28px] rounded-br-[28px] rounded-tr-md rounded-bl-md overflow-hidden px-5 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-[#b8967e]/15 border border-[#b8967e]/40 hover:border-[#b8967e]/80"
              style={{
                background: "linear-gradient(135deg, rgba(184, 150, 126, 0.95) 0%, rgba(67, 42, 28, 0.9) 45%, rgba(0, 27, 65, 0.95) 100%)",
              }}
            >
              {/* Subtle inner highlight glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />

              <div className="relative z-10 space-y-0.5">
                {/* Phone Number: Clean Sans-Serif font style exactly matching Image 1 */}
                <div className="font-sans text-[20px] sm:text-[25px] lg:text-[25px] text-white font-medium tracking-wide group-hover:text-[#f8f5f2] transition-colors whitespace-nowrap leading-tight">
                  {FIRM_INFO.contact.phone1}
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.24em] text-[#dfcdbf] font-bold">
                  FEEL FREE TO CALL US
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MAIN 3-COLUMN FOOTER
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Column 1: Our Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                Our Address
              </h4>
              <span className="w-8 h-[1.5px] bg-[#b8967e]/60 inline-block" />
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
              {FIRM_INFO.contact.addressLine1},<br />
              {FIRM_INFO.contact.addressLine2},<br />
              {FIRM_INFO.contact.city} {FIRM_INFO.contact.pincode}, {FIRM_INFO.contact.state}, India.
            </p>
          </div>

          {/* Column 2: Connect with Us */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                Connect with Us
              </h4>
              <span className="w-8 h-[1.5px] bg-[#b8967e]/60 inline-block" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-sans">
              <div className="flex items-center gap-2.5 group">
                <Mail size={15} className="text-[#b8967e] shrink-0" />
                <a 
                  href={`mailto:${FIRM_INFO.contact.emailPrimary}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {FIRM_INFO.contact.emailPrimary}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <Phone size={15} className="text-[#b8967e] shrink-0" />
                <a 
                  href={`tel:${FIRM_INFO.contact.phone1}`}
                  className="hover:text-white transition-colors"
                >
                  {FIRM_INFO.contact.phone1}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <Globe size={15} className="text-[#b8967e] shrink-0" />
                <a 
                  href={`https://${FIRM_INFO.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors truncate"
                >
                  {FIRM_INFO.contact.website}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quicklinks */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                Quicklinks
              </h4>
              <span className="w-8 h-[1.5px] bg-[#b8967e]/60 inline-block" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <button 
                  onClick={() => onNavigate("home")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("about-profile")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("industries")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>Industries</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("faq")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>FAQ</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")} 
                  className="hover:text-[#b8967e] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight size={13} className="text-[#b8967e] transition-transform group-hover:translate-x-1" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM COPYRIGHT & SOCIAL BAR WITH LEAF SCROLL-TOP BUTTON
         ========================================================================= */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-8 lg:px-12 bg-[#00132e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left relative">
          
          {/* Copyright notice */}
          <div className="text-xs text-zinc-400 font-sans">
            © Copyright {new Date().getFullYear()}. All rights reserved.{" "}
            <span className="text-[#b8967e] font-medium">Azhar Shaikh & Associates</span>.
          </div>

          {/* Social Icons & Scroll-to-Top Button */}
          <div className="flex items-center gap-6">
            
            {/* Social Pill Badges */}
            <div className="flex items-center gap-2.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#002252] hover:bg-[#b8967e] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#002252] hover:bg-[#b8967e] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Twitter / X"
              >
                <Twitter size={14} />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#002252] hover:bg-[#b8967e] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#002252] hover:bg-[#b8967e] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#002252] hover:bg-[#b8967e] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>

            {/* Leaf-Symmetric Scroll to Top Button (Exact Reference Design in Far Right) */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 bg-[#b8967e] hover:bg-[#a68269] text-[#001B41] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label="Scroll to top"
            >
              {/* Upward geometric triangle indicator matching screenshot */}
              <span className="text-xs font-black leading-none mb-0.5 select-none">▲</span>
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
}
