import React from "react";
import { ShieldCheck, Layers, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export default function WhyChooseUs({ onOpenConsultation }: WhyChooseUsProps) {
  const advantages = [
    {
      num: "01",
      title: "Statutory Precision & Compliance Assurance",
      desc: "Comprehensive examination of corporate charters, secretarial books, and MCA V3 filings to eliminate non-compliance penalties and promoter disqualification risks.",
      icon: ShieldCheck,
      points: [
        "Rigorous Companies Act, 2013 audit checklists",
        "Timely adherence to MCA V3 statutory due dates",
        "Proactive notice handling before ROC & RD"
      ]
    },
    {
      num: "02",
      title: "Comprehensive Practice Spectrum",
      desc: "From entity incorporation, foreign direct investment (FDI/FEMA), and cross-border structuring to complex NCLT compounding and share capital reductions.",
      icon: Layers,
      points: [
        "End-to-end secretarial lifecycle coverage",
        "Specialized RBI FIRMS & Single Master Form filings",
        "Expert assistance in schemes of arrangement"
      ]
    },
    {
      num: "03",
      title: "ICSI Peer-Reviewed Quality Standard",
      desc: "Our systems, work documentation, and peer quality controls have been formally evaluated and certified under the Institute of Company Secretaries of India Peer Review board.",
      icon: Award,
      points: [
        "Certified Peer-Reviewed Practice Unit",
        "Highest tier of professional confidentiality",
        "Objective, uncompromised legal and secretarial opinions"
      ]
    },
    {
      num: "04",
      title: "Direct Senior Partner Access",
      desc: "Corporate clients engage directly with CS Azhar Shaikh and senior legal advocates, ensuring seasoned, courtroom-tested guidance without junior-level dilution.",
      icon: Users,
      points: [
        "15+ years of whole-time practicing experience",
        "Personalized boardroom consultation",
        "Dedicated corporate emergency filing desk"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#001B41] text-white relative overflow-hidden border-t border-[#b8967e]/20">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#b8967e]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a2f4c]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="sub-title">CORE PRACTICE ADVANTAGES</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl text-white">
            Why Choose <span className="font-serif italic text-[#b8967e]">Azhar Shaikh & Associates</span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Combining two decades of courtroom and board advisory with meticulous secretarial audit standards to protect enterprise value.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        {/* 4 Feature Boxes Grid (Exact Igual .feature-box-wrapper style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#0d1e38] border border-white/10 hover:border-[#b8967e]/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b8967e]/10"
              >
                {/* Top: Number Badge and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#172c4a] border border-[#b8967e]/30 flex items-center justify-center text-[#b8967e] group-hover:bg-[#b8967e] group-hover:text-white transition-colors duration-300 shadow-md">
                      <Icon size={22} />
                    </div>
                    
                    {/* Igual Circular Number Badge */}
                    <span className="w-10 h-10 rounded-full border border-[#b8967e]/30 bg-white/5 flex items-center justify-center font-mono font-bold text-xs text-[#b8967e] group-hover:border-[#b8967e] group-hover:bg-[#b8967e]/20 transition-colors">
                      {adv.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#b8967e] transition-colors leading-snug mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                    {adv.desc}
                  </p>
                </div>

                {/* Bottom Key Checkpoints */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  {adv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-zinc-300 font-sans">
                      <CheckCircle2 size={13} className="text-[#b8967e] shrink-0 mt-0.5" />
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="igual-btn"
          >
            <span className="igual-btn-icon">
              +
            </span>
            <span className="igual-btn-text">
              Engage Senior Partner Advisory
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
