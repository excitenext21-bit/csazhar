import React from "react";
import { ShieldAlert, Scale, CheckCircle2 } from "lucide-react";
import { FIRM_INFO } from "../data";

interface ICSIDisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export default function ICSIDisclaimerModal({ isOpen, onAccept }: ICSIDisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#001B41] border border-[#b8967e]/60 max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-2xl relative">
        
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#b8967e]/20 border border-[#b8967e] flex items-center justify-center text-[#b8967e] shrink-0">
            <Scale size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#b8967e] font-bold block">
              Regulatory Compliance Notice
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              ICSI Professional Code Disclaimer
            </h3>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
          <p>
            In compliance with the professional guidelines and code of conduct prescribed by 
            <strong> The Institute of Company Secretaries of India (ICSI)</strong>, this website is hosted solely for 
            providing basic information about <strong>{FIRM_INFO.name}</strong>, its practice domains, and statutory compliance frameworks.
          </p>

          <div className="bg-[#12243e] p-4 rounded-xl border border-white/10 space-y-2 text-xs text-zinc-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#b8967e] shrink-0 mt-0.5" />
              <span>The user acknowledges that there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from the firm or its members.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#b8967e] shrink-0 mt-0.5" />
              <span>Any information obtained or materials downloaded from this website are completely at the user’s volition and any transmission, receipt or use of this site does not create an attorney-client relationship.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#b8967e] shrink-0 mt-0.5" />
              <span>The firm is not liable for any action taken by the user relying on material/information provided under this website. Users should seek independent legal/secretarial counsel.</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/10">
          <div className="text-[11px] font-mono text-zinc-400">
            {FIRM_INFO.registrationNumber}
          </div>
          <button
            onClick={onAccept}
            className="bg-[#b8967e] hover:bg-[#a68269] text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
          >
            I Agree & Proceed
          </button>
        </div>

      </div>
    </div>
  );
}
