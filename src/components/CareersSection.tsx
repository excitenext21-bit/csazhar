import React, { useState } from "react";
import { Briefcase, GraduationCap, CheckCircle2, UploadCloud, ArrowRight, Sparkles, Send } from "lucide-react";
import { FIRM_INFO } from "../data";

export default function CareersSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    qualification: "CS Executive Passed",
    experienceYears: "Fresher / Trainee",
    coverNote: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="careers" className="py-24 bg-[#fcfbf9] text-[#1e293b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="sub-title">NURTURING NEXT-GENERATION LEGAL MINDS</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl text-[#09172e]">
            Careers & <span className="font-serif italic text-[#b8967e]">Articleship Opportunities</span>
          </h2>

          <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
            With the staunch belief that professional growth must always be mutual and inclusive, Azhar Shaikh & Associates 
            fosters an intellectually rigorous, meritocratic environment where associates develop into respected corporate practitioners.
          </p>

          <div className="igual-divider my-4">
            <span className="w-2 h-2 rounded-full bg-[#b8967e]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Trainee Programs & Culture */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm space-y-5">
              <h3 className="font-serif text-2xl font-bold text-[#09172e]">
                ICSI Traineeship / Articleship Scheme
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                We invite applications from ambitious candidates who have cleared ICSI Executive or Professional exams. 
                Trainees at ASA receive direct mentorship under CS Azhar Shaikh, gaining practical courtroom exposure at NCLT, 
                drafting petition papers, managing MCA V3 filings, and conducting hands-on Secretarial Audits.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9a7862] font-bold block">
                  What Trainees Experience at ASA:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#b8967e] shrink-0 mt-0.5" />
                    <span>Active drafting of Board Resolutions, Notices, Explanatory Statements, and Annual Reports</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#b8967e] shrink-0 mt-0.5" />
                    <span>Handling Trademarks Registry office actions, distinctiveness search, and opposition replies</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#b8967e] shrink-0 mt-0.5" />
                    <span>Assistance in Schemes of Arrangement (Mergers) and Reduction of Capital before NCLT</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#b8967e] shrink-0 mt-0.5" />
                    <span>Foreign Inbound Investment (FC-GPR) and Single Master Form (SMF) reporting on the RBI FIRMS portal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Associate Openings Card */}
            <div className="bg-[#001B41] text-white border border-[#b8967e]/30 rounded-3xl p-8 shadow-xl space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#b8967e] font-bold block">
                Immediate Openings
              </span>
              <h4 className="font-serif text-xl font-bold">
                Qualified Associate Company Secretary (ACS)
              </h4>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Requirements: 1–3 years post-qualification experience in a practicing firm or listed entity. 
                Proficiency in Companies Act 2013, drafting petitions, and independent handling of ROC matters.
              </p>
              <div className="text-xs text-[#b8967e] font-mono pt-1">
                Direct CV Submission: <a href={`mailto:${FIRM_INFO.contact.emailPrimary}`} className="underline hover:text-white">{FIRM_INFO.contact.emailPrimary}</a>
              </div>
            </div>

          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-6 bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#09172e]">
                Submit Your Candidature
              </h3>
              <p className="text-xs text-zinc-500 font-sans mt-1">
                Our recruitment committee reviews all CVs on a rolling basis. Shortlisted candidates are invited for in-person chamber interviews.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#001B41] text-white space-y-3 text-center border border-[#b8967e]/40">
                <CheckCircle2 size={36} className="text-[#b8967e] mx-auto" />
                <h4 className="font-serif text-lg font-bold">Application Registered</h4>
                <p className="text-xs text-zinc-300">
                  Thank you for your interest in Azhar Shaikh & Associates. Our firm administrator will contact shortlisted applicants via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="font-semibold text-zinc-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-zinc-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-zinc-700">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] focus:ring-1 focus:ring-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-zinc-700">Highest Qualification *</label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none"
                    >
                      <option value="CS Executive Passed">CS Executive Passed</option>
                      <option value="CS Professional Passed">CS Professional Passed</option>
                      <option value="Associate Company Secretary (ACS)">Associate Company Secretary (ACS)</option>
                      <option value="LLB / LLM Graduate">LLB / LLM Graduate</option>
                      <option value="B.Com / Semi-Qualified">B.Com / Semi-Qualified</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-zinc-700">Experience Level *</label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none"
                    >
                      <option value="Fresher / Trainee">Fresher / Trainee</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-zinc-700">Statement of Purpose / Cover Note</label>
                  <textarea
                    rows={4}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Briefly state your academic background, areas of law that interest you, and career goals..."
                    className="w-full bg-[#fcfbf9] border border-zinc-300 focus:border-[#b8967e] rounded-xl px-4 py-2.5 text-zinc-800 outline-none resize-none"
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
                      Submit Trainee Application
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
