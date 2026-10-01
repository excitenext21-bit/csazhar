import React, { useState } from "react";
import { Award, Briefcase, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, X } from "lucide-react";
import { LEADERSHIP_TEAM } from "../data";
import { TeamMember } from "../types";

interface LeadershipTeamProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function LeadershipTeam({ onOpenConsultation }: LeadershipTeamProps) {
  const [selectedLeader, setSelectedLeader] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-24 bg-[#001B41] text-white relative overflow-hidden">
      
      {/* Ambient background styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8967e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="sub-title">MANNED BY ELITE PROFESSIONALS</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl text-white">
            Our Leadership & <span className="font-serif italic text-[#b8967e]">Key Associates</span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Led by senior practicing professionals with over two decades of courtroom, board, and registry experience, 
            mentoring a dynamic cadre of qualified Company Secretaries and Trademark Advocates.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        {/* Featured Founder Profile Card (Signature Igual Attorney Showcase) */}
        {LEADERSHIP_TEAM.slice(0, 1).map((founder) => (
          <div 
            key={founder.id}
            className="mb-14 bg-gradient-to-r from-[#12243e] via-[#172c4a] to-[#12243e] border border-[#b8967e]/40 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Founder Portrait with Luxury Frame */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden border-2 border-[#b8967e] shadow-2xl p-2 bg-[#001B41]">
                <img 
                  src={founder.photoUrl} 
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#b8967e] text-white text-[9px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-full shadow-md">
                  Founder & Senior Partner
                </div>
              </div>
            </div>

            {/* Founder Biography & Credentials */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-[#b8967e] font-sans font-medium text-xs sm:text-sm mt-0.5">
                    {founder.role} • {founder.designation}
                  </p>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 bg-white/5 px-3.5 py-1 rounded-full border border-white/10">
                  {founder.experience}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                <GraduationCap size={15} className="text-[#b8967e]" />
                <span>{founder.qualification}</span>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                {founder.bio}
              </p>

              {/* Specializations Pills */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6c0b0] font-bold block">
                  Core Advisory Domains:
                </span>
                <div className="flex flex-wrap gap-2">
                  {founder.specializations.map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs bg-[#001B41]/90 text-zinc-200 border border-[#b8967e]/30 px-3 py-1 rounded-lg font-sans"
                    >
                      • {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Founder Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation(`Consultation with ${founder.name}`)}
                  className="igual-btn"
                >
                  <span className="igual-btn-icon">
                    +
                  </span>
                  <span className="igual-btn-text">
                    Direct Partner Consultation
                  </span>
                </button>

                <button
                  onClick={() => setSelectedLeader(founder)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#b8967e] hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  View Complete Bio →
                </button>
              </div>

            </div>
          </div>
        ))}

        {/* Key Associates Grid (Igual Attorney Cards Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LEADERSHIP_TEAM.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-[#001B41] border border-white/10 hover:border-[#b8967e]/60 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b8967e]/15 group"
            >
              <div className="space-y-4">
                {/* Member Portrait */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#172c4a] border border-[#b8967e]/30">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#001B41]/90 text-[#b8967e] text-[9px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded-full border border-white/10">
                    {member.role}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#b8967e] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    {member.designation}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <GraduationCap size={13} className="text-[#b8967e]" />
                  <span>{member.qualification}</span>
                </div>

                <p className="text-xs text-zinc-300 font-sans line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>

                {/* Focus Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.specializations.slice(0, 2).map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10 px-2 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedLeader(member)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#b8967e] group-hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Full Profile</span>
                  <ArrowRight size={12} />
                </button>

                <button
                  onClick={() => onOpenConsultation(`Consultation regarding ${member.name}`)}
                  className="text-[11px] font-sans px-3 py-1 rounded-lg bg-white/5 hover:bg-[#b8967e] text-zinc-300 hover:text-white transition-colors border border-white/10"
                >
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Leadership Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#001B41] border border-[#b8967e]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 text-white max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">{selectedLeader.name}</h3>
                <p className="text-xs text-[#b8967e] font-sans mt-0.5">
                  {selectedLeader.role} • {selectedLeader.designation}
                </p>
                <div className="text-xs text-zinc-400 font-mono mt-1">
                  {selectedLeader.qualification} • {selectedLeader.experience}
                </div>
              </div>
              <button 
                onClick={() => setSelectedLeader(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed space-y-4">
              <p>{selectedLeader.bio}</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6c0b0] font-bold block">
                Primary Practice Specializations:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedLeader.specializations.map((spec, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-[#172c4a] text-zinc-200 border border-[#b8967e]/30 px-3 py-1 rounded-lg"
                  >
                    • {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedLeader.name;
                  setSelectedLeader(null);
                  onOpenConsultation(`Consultation with ${name}`);
                }}
                className="igual-btn"
              >
                <span className="igual-btn-icon">
                  +
                </span>
                <span className="igual-btn-text">
                  Schedule Direct Inquiry
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
