import React, { useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Scale, ArrowRight, ExternalLink } from "lucide-react";
import { ServiceItem } from "../types";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  subService?: string | null;
  onClose: () => void;
  onConsult: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({ service, subService, onClose, onConsult }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="relative bg-[#001B41] border border-[#b8967e]/50 w-full max-w-4xl rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 my-8 text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all cursor-pointer border border-white/10"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b8967e] bg-[#b8967e]/15 px-3 py-1 rounded-full border border-[#b8967e]/30 font-bold">
              {service.category} Practice
            </span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
            {service.title}
          </h2>

          {service.statutoryFramework && (
            <div className="text-xs font-mono text-[#d6c0b0] bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
              <Scale size={14} className="text-[#b8967e] shrink-0" />
              <span>Statutory Basis: {service.statutoryFramework}</span>
            </div>
          )}
        </div>

        {/* Selected Sub-Navigation Focus Callout */}
        {subService && (
          <div className="bg-[#b8967e]/15 border border-[#b8967e]/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#b8967e] font-bold block">
                Selected Sub-Navigation Focus
              </span>
              <div className="text-sm font-semibold text-white">
                {subService}
              </div>
            </div>
            <button
              onClick={() => {
                const topic = `${service.title} - ${subService}`;
                onClose();
                onConsult(topic);
              }}
              className="px-4 py-2 bg-[#b8967e] hover:bg-[#a68269] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-md"
            >
              Inquire for This Sub-Service
            </button>
          </div>
        )}

        {/* Narrative Description */}
        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
          <p>{service.fullDesc}</p>
        </div>

        {/* Comprehensive Scope & Deliverables */}
        <div className="space-y-3 pt-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#b8967e] font-bold block">
            Comprehensive Scope of Services & Deliverables:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-200 font-sans">
            {(service.subServices || service.keyOfferings).map((item, idx) => {
              const isSelected = subService && (item.toLowerCase().includes(subService.toLowerCase()) || subService.toLowerCase().includes(item.toLowerCase()));
              return (
                <div 
                  key={idx} 
                  className={`flex items-start gap-2.5 p-3 rounded-xl transition-all ${
                    isSelected 
                      ? "bg-[#b8967e]/25 border-2 border-[#b8967e] text-white shadow-lg shadow-[#b8967e]/10 ring-1 ring-[#b8967e]" 
                      : "bg-[#12243e] border border-white/5 hover:border-[#b8967e]/30"
                  }`}
                >
                  <CheckCircle2 size={15} className={`${isSelected ? "text-white" : "text-[#b8967e]"} shrink-0 mt-0.5`} />
                  <span className={`leading-snug ${isSelected ? "font-bold text-white" : ""}`}>{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-sans">
            Managed directly by specialized Senior Partners & Certified Trademark Agents.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                const title = service.title;
                onClose();
                onConsult(title);
              }}
              className="bg-[#b8967e] hover:bg-[#a68269] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#b8967e]/20 cursor-pointer"
            >
              <span>Retain Advisory for this Practice</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
