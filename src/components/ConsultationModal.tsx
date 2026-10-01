import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, Phone, Mail, ShieldCheck, Send } from "lucide-react";
import { FIRM_INFO, SERVICES } from "../data";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialTopic }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    matterType: initialTopic || "Corporate Advisory & Compliances",
    meetingMode: "In-Person (Mumbai Office)",
    preferredDate: "",
    message: ""
  });

  useEffect(() => {
    if (initialTopic) {
      setFormData(prev => ({ ...prev, matterType: initialTopic }));
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#001B41] border border-[#b8967e]/60 w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl relative text-white my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all cursor-pointer border border-white/10"
        >
          <X size={18} />
        </button>

        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#b8967e] font-bold block mb-1">
            Azhar Shaikh & Associates
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Retain or Schedule Advisory
          </h3>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Direct consultation with Practicing Company Secretary & Trademark Agent.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 size={48} className="text-[#b8967e] mx-auto" />
            <h4 className="font-serif text-2xl font-bold">Advisory Request Registered</h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. A Senior Associate will reach you shortly regarding your matter in <em>{formData.matterType}</em>.
            </p>
            <div className="text-xs text-[#b8967e] font-mono">
              Ref ID: ASA-APPT-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#b8967e] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider mx-auto block mt-4"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Vikramaditya Singhania"
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Entity / Corporate Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Apex Technologies Ltd"
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="corporate@domain.com"
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Mobile Contact *</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="+91 98902 56076"
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Practice Domain *</label>
                <select
                  value={formData.matterType}
                  onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General Corporate Retainer">General Corporate Retainer</option>
                  <option value="Urgent Compounding / NCLT Matter">Urgent Compounding / NCLT Matter</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Consultation Mode</label>
                <select
                  value={formData.meetingMode}
                  onChange={(e) => setFormData({ ...formData, meetingMode: e.target.value })}
                  className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white focus:outline-none"
                >
                  <option value="In-Person (Pune Office)">In-Person at Pune Office</option>
                  <option value="Virtual Video Conference">Secure Virtual Conference</option>
                  <option value="Direct Partner Telephonic Call">Direct Partner Telephonic Call</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1">Matter Brief / Requirements</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="State your compliance requirements, statutory notice, trademark objection, or NCLT matter..."
                className="w-full bg-[#12243e] border border-white/15 focus:border-[#b8967e] rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b8967e] hover:bg-[#a68269] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-[#c5a880]/50"
            >
              <span>Submit Consultation Request</span>
              <Send size={14} />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
