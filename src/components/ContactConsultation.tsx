import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FIRM_INFO, SERVICES } from "../data";

interface ContactConsultationProps {
  preselectedSubject?: string;
}

export default function ContactConsultation({ preselectedSubject }: ContactConsultationProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    matterType: preselectedSubject || "Corporate Advisory & Compliances",
    meetingMode: "In-Person (Pune Office)",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="pt-4 sm:pt-6 pb-20 sm:pb-24 bg-white text-[#1e293b] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-5xl text-[#001B41]">
            Let’s Build <span className="font-serif italic text-[#b8967e]">Better Governance</span>
          </h2>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
            Reach out to our partners for immediate assistance with corporate filings, trademark conflicts, 
            secretarial due diligence, or representation before regulatory authorities.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Office Card */}
            <div className="bg-[#faf8f5] border border-zinc-200/90 rounded-3xl p-8 shadow-md space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#001B41]">
                  {FIRM_INFO.name}
                </h3>
                <p className="text-xs text-zinc-500 font-sans mt-0.5">
                  {FIRM_INFO.tagline}
                </p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm font-sans">
                
                {/* Principal Office Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#001B41]">Principal Office Address</div>
                    <div className="text-zinc-600 text-xs mt-1 leading-relaxed">
                      {FIRM_INFO.contact.addressLine1},<br />
                      {FIRM_INFO.contact.addressLine2},<br />
                      {FIRM_INFO.contact.city} – {FIRM_INFO.contact.pincode}, {FIRM_INFO.contact.state}, {FIRM_INFO.contact.country}
                    </div>
                  </div>
                </div>

                {/* Telephone & Direct Lines: Only 1 Phone Number (+91 98902 56076) */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#001B41]">Telephone & Direct Lines</div>
                    <div className="text-zinc-600 text-xs mt-1">
                      <a href="tel:+919890256076" className="hover:text-[#b8967e] font-medium transition-colors">
                        +91 98902 56076
                      </a>
                    </div>
                  </div>
                </div>

                {/* Electronic Mail Communications: Only 1 Email (info@csazharshaikh.com) */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#001B41] text-[#b8967e] border border-[#b8967e]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#001B41]">Electronic Mail Communications</div>
                    <div className="text-zinc-600 text-xs mt-1">
                      <a href="mailto:info@csazharshaikh.com" className="text-[#b8967e] hover:underline font-medium">
                        info@csazharshaikh.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Advisory Consultation Request Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] border border-zinc-200/90 rounded-3xl p-8 sm:p-10 shadow-md space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#001B41]">
                Request Professional Consultation
              </h3>
              <p className="text-xs text-zinc-500 font-sans mt-1">
                Please provide your corporate entity details and a brief outline of the matter. 
                All communications are maintained under strict professional confidentiality.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#001B41] text-white border border-[#b8967e]/50 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#b8967e]/20 border border-[#b8967e] flex items-center justify-center mx-auto text-[#b8967e]">
                  ✓
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Consultation Request Received</h4>
                <p className="text-xs text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A partner from our secretarial practice 
                  will review your query regarding <em>{formData.matterType}</em> and connect with you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Adv. Rajesh Verma / Director"
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Company / Entity Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Global Tech Pvt Ltd"
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Mobile / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Practice / Matter Subject</label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Corporate Retainer">General Corporate Retainer</option>
                      <option value="Other Regulatory Matter">Other Regulatory Matter</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-700 font-semibold">Preferred Mode</label>
                    <select
                      value={formData.meetingMode}
                      onChange={(e) => setFormData({ ...formData, meetingMode: e.target.value })}
                      className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 outline-none"
                    >
                      <option value="In-Person (Pune Office)">In-Person (Pune Chamber)</option>
                      <option value="Video Conference (Google Meet / Zoom)">Video Conference (Virtual)</option>
                      <option value="Telephone Advisory Call">Telephone Advisory Call</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-700 font-semibold">Brief Summary of the Corporate Matter</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide relevant statutory background, timeline constraints, or specific queries..."
                    className="w-full bg-white border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-900 placeholder:text-zinc-400 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="igual-btn w-full"
                  >
                    <span className="igual-btn-icon">
                      +
                    </span>
                    <span className="igual-btn-text w-full justify-center">
                      Confirm Consultation Request
                    </span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
