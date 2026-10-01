import React, { useState } from "react";
import { 
  Building2, ShieldAlert, Layers, Compass, TrendingUp, Search, 
  Globe2, Award, BarChart3, Scale, ArrowRight, CheckCircle2, 
  ExternalLink, Sparkles, Filter 
} from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface PracticeAreasProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

const ICON_MAP: Record<string, any> = {
  Building2,
  ShieldAlert,
  Layers,
  Compass,
  TrendingUp,
  Search,
  Globe2,
  Award,
  BarChart3,
  Scale
};

export default function PracticeAreas({ onSelectService, onOpenConsultation }: PracticeAreasProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Corporate Law",
    "Intellectual Property",
    "Compliance & Audit",
    "Secretarial",
    "Restructuring",
    "Cross-Border"
  ];

  const filteredServices = SERVICES.filter((srv) => {
    const matchesCategory = selectedCategory === "All" || srv.category === selectedCategory;
    const matchesQuery = 
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.keyOfferings.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="py-24 bg-[#001B41] text-white relative overflow-hidden">
      {/* Background Decorative Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#b8967e_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#b8967e]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="sub-title">COMPREHENSIVE LEGAL & SECRETARIAL SPECTRUM</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl text-white">
            From Compliance to <span className="italic font-serif text-[#b8967e]">Corporate Excellence</span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Full-spectrum corporate secretarial, capital markets, statutory audit, and intellectual property solutions 
            designed to mitigate statutory risks, resolve complex corporate disputes, and maintain impeccable governance standards.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          
          {/* Categories */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#b8967e] text-white shadow-md border border-[#c5a880]/60"
                    : "bg-[#0d1e38] text-zinc-300 hover:text-white hover:bg-[#152a4a] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search compliance, trademark, NCLT..."
              className="w-full bg-[#0d1e38] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-2.5 pl-9 text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
            />
            <Search size={14} className="absolute left-3 top-3 text-zinc-400" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-xs text-zinc-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Services Cards Grid (Exact Igual Practice Area Card Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((srv, idx) => {
            const Icon = ICON_MAP[srv.iconName] || Scale;
            const cardNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={srv.id}
                className="group relative bg-[#0d1e38] border border-white/10 hover:border-[#b8967e]/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b8967e]/15 overflow-hidden"
              >
                {/* Top Corner Number & Category Tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#172c4a] border border-[#b8967e]/30 flex items-center justify-center text-[#b8967e] group-hover:bg-[#b8967e] group-hover:text-white transition-colors duration-300 shadow-md">
                      <Icon size={24} />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {srv.category}
                      </span>
                      <span className="font-mono text-xs text-[#b8967e]/50 font-bold">
                        {cardNum}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#b8967e] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans mt-2 line-clamp-3 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {/* Key Offerings Preview */}
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6c0b0] font-semibold block">
                      Scope Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                      {srv.keyOfferings.slice(0, 3).map((item, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#b8967e] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Igual Arrow Link) */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(srv)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#b8967e] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>View Framework</span>
                    <ArrowRight size={13} className="transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(srv.title)}
                    className="text-[11px] font-sans px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#b8967e] text-zinc-300 hover:text-white transition-colors border border-white/10"
                  >
                    Inquire Practice
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Practice Banner with Signature Igual Two-Part CTA Button */}
        <div className="mt-16 bg-gradient-to-r from-[#12243e] via-[#1a2f4c] to-[#12243e] border border-[#b8967e]/35 rounded-3xl p-8 sm:p-10 text-center space-y-5 shadow-2xl">
          <h3 className="section-title text-2xl sm:text-3xl text-white">
            Need Tailored Secretarial Due Diligence or Trademark Litigation Counsel?
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Our Senior Partners evaluate complex corporate governance structures, pending NCLT matters, and brand portfolio disputes with absolute discretion.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenConsultation()}
              className="igual-btn"
            >
              <span className="igual-btn-icon">
                +
              </span>
              <span className="igual-btn-text">
                Request Confidential Partner Review
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
