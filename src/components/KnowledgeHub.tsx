import React, { useState } from "react";
import { 
  BookOpen, ExternalLink, Calendar, CheckCircle2, Search, 
  Landmark, ShieldAlert, Sparkles, Filter, ArrowRight 
} from "lucide-react";
import { REGULATORY_LINKS, COMPLIANCE_CALENDAR } from "../data";

interface KnowledgeHubProps {
  onOpenConsultation: (subject?: string) => void;
}

export default function KnowledgeHub({ onOpenConsultation }: KnowledgeHubProps) {
  const [activeTab, setActiveTab] = useState<"calendar" | "links">("calendar");
  const [calendarSearch, setCalendarSearch] = useState<string>("");

  const filteredCalendar = COMPLIANCE_CALENDAR.filter((item) => {
    return (
      item.formName.toLowerCase().includes(calendarSearch.toLowerCase()) ||
      item.purpose.toLowerCase().includes(calendarSearch.toLowerCase()) ||
      item.applicableLaw.toLowerCase().includes(calendarSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(calendarSearch.toLowerCase())
    );
  });

  return (
    <section id="knowledge-base" className="py-24 bg-[#001B41] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="sub-title">REGULATORY INTELLIGENCE & STATUTORY REPOSITORY</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl text-white">
            What News Do We Have Today, <span className="font-serif italic text-[#b8967e]">Knowledge Hub</span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Essential statutory resources, direct links to regulatory gateways, and the comprehensive annual corporate compliance calendar for board directors, promoters, and CFOs.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        {/* Tab Toggle (Igual Button Style) */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-6 py-2.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "calendar"
                ? "bg-[#b8967e] text-white shadow-lg border border-[#c5a880]/50"
                : "bg-[#0d1e38] text-zinc-300 hover:text-white border border-white/10"
            }`}
          >
            Annual Compliance Calendar
          </button>
          <button
            onClick={() => setActiveTab("links")}
            className={`px-6 py-2.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "links"
                ? "bg-[#b8967e] text-white shadow-lg border border-[#c5a880]/50"
                : "bg-[#0d1e38] text-zinc-300 hover:text-white border border-white/10"
            }`}
          >
            Official Regulatory Gateways
          </button>
        </div>

        {/* Tab 1: Compliance Calendar */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            
            {/* Search Box */}
            <div className="max-w-md mx-auto relative mb-6">
              <input
                type="text"
                value={calendarSearch}
                onChange={(e) => setCalendarSearch(e.target.value)}
                placeholder="Search by Form name (e.g. AOC-4, DIR-3, DPT-3)..."
                className="w-full bg-[#0d1e38] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder:text-zinc-500 focus:outline-none"
              />
              <Search size={15} className="absolute left-3.5 top-3 text-zinc-400" />
            </div>

            {/* Calendar Table */}
            <div className="bg-[#0d1e38] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#12243e] text-zinc-300 uppercase font-mono tracking-wider text-[11px] border-b border-white/10">
                    <tr>
                      <th className="py-4 px-6">Statutory Form</th>
                      <th className="py-4 px-6">Filing Purpose</th>
                      <th className="py-4 px-6">Governing Statute</th>
                      <th className="py-4 px-6">Prescribed Due Date</th>
                      <th className="py-4 px-6 text-right">Advisory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredCalendar.map((item, idx) => (
                      <tr 
                        key={idx}
                        className="hover:bg-[#152a4a]/50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <span className="font-mono font-bold text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                            {item.formName}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-medium text-zinc-200">
                          {item.purpose}
                        </td>
                        <td className="py-4 px-6 text-zinc-400">
                          {item.applicableLaw}
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-[#b8967e] font-semibold flex items-center gap-1.5">
                            <Calendar size={13} />
                            {item.duePeriod}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => onOpenConsultation(`Filing Assistance for ${item.formName}`)}
                            className="text-[11px] text-zinc-300 hover:text-white px-3 py-1 rounded-md bg-white/5 hover:bg-[#b8967e] border border-white/10 transition-colors"
                          >
                            Engage Filing
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Regulatory Gateways Grid */}
        {activeTab === "links" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGULATORY_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d1e38] border border-white/10 hover:border-[#b8967e]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#b8967e] font-bold">
                      {link.category}
                    </span>
                    <ExternalLink size={14} className="text-zinc-500 group-hover:text-[#b8967e] transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#b8967e] transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors pt-2 border-t border-white/5">
                  Official Portal →
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Bottom Fast Action */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenConsultation("Corporate Secretarial Advisory")}
            className="igual-btn"
          >
            <span className="igual-btn-icon">
              +
            </span>
            <span className="igual-btn-text">
              Inquire Corporate Due Dates Desk
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
