import React, { useState, useEffect, useRef } from "react";
import { 
  Phone, Mail, MapPin, ChevronDown, ChevronRight, Menu, X, 
  ArrowRight, Award, Compass, Scale, ExternalLink, Search,
  Building2, Layers, TrendingUp, Globe2, BarChart3, 
  ShieldAlert, Sparkles, CheckCircle2
} from "lucide-react";
import { FIRM_INFO, SERVICES, NAV_SERVICES } from "../data";
import { PageSlug } from "../types";

interface HeaderProps {
  activePage: PageSlug;
  onNavigate: (page: PageSlug, serviceId?: string, subService?: string) => void;
  onOpenConsultation: (topic?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "business-setup-and-closure-services": Building2,
  "limited-liability-partnership": Layers,
  "corporate-advisory-and-compliances": Compass,
  "corporate-and-financial-restructuring": TrendingUp,
  "due-diligence": Search,
  "fema-and-rbi": Globe2,
  "audit-and-certification": Award,
  "sebi-and-listing-compliances": BarChart3,
  "representation-and-other-services": Scale,
  "trademark-and-ip-rights": ShieldAlert
};

export default function Header({ activePage, onNavigate, onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Mobile menu accordion states
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      
      {/* Topbar: email | address | ICSI Disclaimer */}
      <div className={`w-full bg-[#001B41] text-zinc-300 text-xs border-b border-white/10 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "py-2 px-4 sm:px-8"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left subtle indicator */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8967e]" />
            <span className="tracking-wider uppercase">{FIRM_INFO.peerReviewStatus}</span>
          </div>

          {/* Right items: email | address | ICSI Disclaimer */}
          <div className="flex items-center gap-4 text-[11px] font-sans">
            <span className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors">
              <Mail size={13} className="text-[#b8967e]" />
              <a href={`mailto:${FIRM_INFO.contact.emailPrimary}`}>{FIRM_INFO.contact.emailPrimary}</a>
            </span>

            <span className="hidden sm:inline-block text-white/20">|</span>

            <span className="hidden sm:flex items-center gap-1.5 text-zinc-300">
              <MapPin size={13} className="text-[#b8967e]" />
              <span>Pune, Maharashtra, India</span>
            </span>

            <span className="text-white/20">|</span>

            <button 
              onClick={() => onNavigate("disclaimer")}
              className="text-zinc-400 hover:text-[#b8967e] transition-colors underline-offset-2 hover:underline"
            >
              ICSI Disclaimer
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-[#001B41]/98 backdrop-blur-md shadow-2xl py-3 border-b border-[#b8967e]/30" 
          : "bg-[#001B41]/90 backdrop-blur-sm py-4 border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on the left */}
          <div className="flex items-center">
            <div 
              onClick={() => onNavigate("home")} 
              className="cursor-pointer group flex items-center transition-transform duration-200 hover:opacity-95"
            >
              <img 
                src="/logo.png" 
                alt="Azhar Shaikh & Associates" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>

            {/* Vertical separator line between logo and navigation links */}
            <div className="hidden lg:block h-8 w-px bg-white/15 mx-4 xl:mx-6" />
          </div>

          {/* Desktop Navigation Links: Home | About Us | Services | Industries | Careers | Contact Us */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            
            {/* 1. HOME - Distinct dark pill button as in reference image */}
            <button 
              onClick={() => onNavigate("home")}
              className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-all rounded-lg flex items-center justify-center ${
                activePage === "home" 
                  ? "bg-[#2b2724] text-white border border-[#524438] shadow-sm font-bold" 
                  : "text-zinc-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>HOME</span>
            </button>

            {/* 2. ABOUT US Dropdown - 2-line layout as in reference image */}
            <div 
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <a 
                href="#"
                onClick={(e) => e.preventDefault()}
                className="px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-lg flex items-center gap-1 group text-zinc-200 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                <span>ABOUT US</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isAboutDropdownOpen ? "rotate-180 text-[#b8967e]" : "text-zinc-400 group-hover:text-white"}`} />
              </a>

              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-[#001B41]/98 backdrop-blur-xl border border-[#b8967e]/30 shadow-2xl rounded-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); setIsAboutDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#15233a] text-zinc-200 hover:text-[#b8967e] text-xs font-medium transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>Why Choose Us</span>
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#b8967e]" />
                  </a>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); setIsAboutDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#15233a] text-zinc-200 hover:text-[#b8967e] text-xs font-medium transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>Our Leadership & Team</span>
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#b8967e]" />
                  </a>
                </div>
              )}
            </div>

            {/* 3. SERVICES Dropdown - Giving ONLY the sub-navigations names */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <a 
                href="#"
                onClick={(e) => e.preventDefault()}
                className="px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-lg flex items-center gap-1 group text-zinc-200 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                <span>SERVICES</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180 text-[#b8967e]" : "text-zinc-400 group-hover:text-white"}`} />
              </a>

              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-72 sm:w-80 bg-[#001B41]/98 backdrop-blur-xl border border-[#b8967e]/35 shadow-2xl rounded-2xl py-2 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-white"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="space-y-0.5">
                    {NAV_SERVICES.map((srv) => (
                      <a
                        key={srv.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#162740] text-zinc-200 hover:text-[#b8967e] text-xs font-medium transition-all flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#b8967e]/30"
                      >
                        <span className="leading-snug truncate group-hover:text-white font-medium">
                          {srv.title}
                        </span>
                        <ChevronRight size={13} className="text-[#b8967e] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. INDUSTRIES */}
            <a 
              href="#"
              onClick={(e) => e.preventDefault()}
              className="px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-lg flex items-center justify-center text-zinc-200 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              <span>INDUSTRIES</span>
            </a>

            {/* 5. FAQ */}
            <a 
              href="#"
              onClick={(e) => e.preventDefault()}
              className="px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-all rounded-lg flex items-center justify-center text-zinc-200 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              <span>FAQ</span>
            </a>

          </div>

          {/* Right Action Elements: Signature CONNECT US Button & CS Logo */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            
            {/* Signature CONNECT US Action Button [ + | CONNECT US ] */}
            <button 
              onClick={() => onNavigate("contact")}
              className={`flex items-center rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#b8967e]/20 transition-all group cursor-pointer border border-[#c5a880]/35 ${
                activePage === "contact" ? "ring-2 ring-[#b8967e]" : ""
              }`}
            >
              <span className="w-8 h-8 xl:w-8.5 xl:h-8.5 bg-white text-[#001B41] flex items-center justify-center font-bold text-base group-hover:bg-zinc-100 transition-colors">
                +
              </span>
              <span className="bg-[#b8967e] group-hover:bg-[#a68269] text-white px-3.5 xl:px-4 h-8 xl:h-8.5 flex items-center text-xs font-bold uppercase tracking-[0.1em] transition-colors whitespace-nowrap">
                CONNECT US
              </span>
            </button>

            {/* Official ICSI CS Logo to the right of Connect Us */}
            <div className="flex items-center pl-1">
              <img 
                src="/cs-logo.png" 
                alt="ICSI CS Logo" 
                className="h-8.5 xl:h-9 w-auto object-contain transition-all duration-200 hover:scale-105 drop-shadow-sm cursor-pointer"
                title="Practicing Company Secretary"
                onClick={() => onNavigate("about-profile")}
              />
            </div>

          </div>

          {/* Mobile Hamburger Button & CS Logo */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onNavigate("contact")}
              className="flex items-center rounded-md overflow-hidden shadow-sm border border-[#c5a880]/30"
            >
              <span className="w-7 h-7 bg-white text-[#001B41] flex items-center justify-center font-bold text-sm">
                +
              </span>
              <span className="bg-[#b8967e] text-white text-[11px] font-bold px-2.5 h-7 flex items-center uppercase tracking-wider">
                Connect Us
              </span>
            </button>

            <img 
              src="/cs-logo.png" 
              alt="CS Logo" 
              className="h-7 w-auto object-contain rounded-xs"
            />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-200 hover:text-[#b8967e] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#001B41] border-t border-[#b8967e]/20 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              
              {/* Mobile Home */}
              <button
                onClick={() => { onNavigate("home"); setIsMobileMenuOpen(false); }}
                className={`text-left py-2 text-sm font-semibold uppercase ${activePage === "home" ? "text-[#b8967e]" : "text-zinc-200"}`}
              >
                Home
              </button>
              
              {/* Mobile About Us Accordion */}
              <div className="border-t border-white/5 pt-2">
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-semibold text-zinc-200 uppercase"
                >
                  <span className={activePage === "about" || activePage === "about-profile" || activePage === "about-team" ? "text-[#b8967e]" : ""}>
                    About Us
                  </span>
                  <ChevronDown size={16} className={`transition-transform text-[#b8967e] ${isMobileAboutOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileAboutOpen && (
                  <div className="pl-3 py-1 space-y-1.5 border-l border-[#b8967e]/30 ml-2 mt-1">
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
                      className="text-left py-1 text-xs text-zinc-300 block hover:text-[#b8967e] cursor-pointer"
                    >
                      • Why Choose Us
                    </a>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
                      className="text-left py-1 text-xs text-zinc-300 block hover:text-[#b8967e] cursor-pointer"
                    >
                      • Our Leadership & Team
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion - Sub-Navigations Only */}
              <div className="border-t border-white/5 pt-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-semibold text-zinc-200 uppercase"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform text-[#b8967e] ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-3 py-1.5 space-y-1 border-l border-[#b8967e]/30 ml-2 mt-1">
                    {NAV_SERVICES.map((srv) => (
                      <a
                        key={srv.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-1.5 px-2 text-xs text-zinc-300 hover:text-[#b8967e] hover:bg-white/5 rounded-lg block transition-colors cursor-pointer"
                      >
                        • {srv.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Mobile Industries */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
                className="text-left py-2 text-sm font-semibold uppercase border-t border-white/5 text-zinc-200 hover:text-[#b8967e] block cursor-pointer"
              >
                Industries
              </a>

              {/* 5. Mobile FAQ */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}
                className="text-left py-2 text-sm font-semibold uppercase border-t border-white/5 text-zinc-200 hover:text-[#b8967e] block cursor-pointer"
              >
                FAQ
              </a>
            </div>

            {/* Mobile Contact & Action Button: CONNECT US */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button 
                onClick={() => { onNavigate("contact"); setIsMobileMenuOpen(false); }}
                className="w-full flex items-center rounded-lg overflow-hidden shadow-lg border border-[#c5a880]/30"
              >
                <span className="w-11 h-11 bg-white text-[#001B41] flex items-center justify-center font-bold text-lg">
                  +
                </span>
                <span className="flex-1 bg-[#b8967e] text-white py-3 font-bold uppercase tracking-wider text-xs text-center block">
                  CONNECT US
                </span>
              </button>
              <div className="text-[11px] text-zinc-400 text-center space-y-1">
                <div>Email: {FIRM_INFO.contact.emailPrimary}</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
