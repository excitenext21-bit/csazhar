import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface FAQPageProps {
  onOpenConsultation: (topic?: string) => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "services",
    question: "What secretarial & statutory compliance services do you offer?",
    answer: "Azhar Shaikh & Associates provides end-to-end secretarial, governance, and legal advisory—including Corporate Formations, SEBI (LODR) Listed Company Compliances, Secretarial Audits (MR-3), NCLT Mergers & Amalgamations, RBI / FEMA Inbound & Outbound FDI Filings, Trademark & IP Registration, and Director KYC governance."
  },
  {
    id: "fees",
    question: "How are consultation fees and advisory retainers structured?",
    answer: "Our fee structures are transparent and milestone-based. We offer fixed-fee project retainers for company incorporation, trademark filings, and restructuring, alongside monthly or annual corporate secretarial retainers for ongoing ROC compliance, board meeting secretarial governance, and statutory filings."
  },
  {
    id: "turnaround",
    question: "What is the typical turnaround time for ROC and MCA filings?",
    answer: "Standard MCA electronic filings (such as DIR-3 KYC, AOC-4, MGT-7, and routine Board Resolutions) are typically verified and submitted within 24 to 72 hours. Specialized transactions like charge creation (CHG-1), name change, or cross-border mergers proceed according to statutory notice periods and regulatory approval timelines."
  },
  {
    id: "fema-rbi",
    question: "Can you assist with FEMA, RBI, and foreign direct investment (FDI)?",
    answer: "Yes. We advise international conglomerates, NRIs, and domestic startups on inbound FDI compliances, Single Master Form (SMF) reporting, FIRMS portal filings, Form FC-GPR, Overseas Direct Investment (ODI) compliance, and representation before authorized dealer banks."
  },
  {
    id: "confidentiality",
    question: "How do you protect client confidentiality and proprietary data?",
    answer: "We adhere strictly to the Code of Conduct mandated by the Institute of Company Secretaries of India (ICSI). All client discussions, financial disclosures, and draft resolutions are protected under bilateral Non-Disclosure Agreements (NDAs), bank-grade encrypted cloud infrastructure, and compartmentalized access controls."
  },
  {
    id: "sectors",
    question: "Which company formats and sectors do you advise?",
    answer: "We cater to Private Limited Companies, Public Listed Entities on BSE/NSE, Section 8 Non-Profits, LLPs, and Wholly-Owned Subsidiaries of foreign corporations across Manufacturing, Banking & NBFC, Tech & Fintech Startups, Pharma, and Infrastructure."
  }
];

export default function FAQPage({ onOpenConsultation, onNavigateContact, onNavigateServices }: FAQPageProps) {
  // First item open by default as shown in reference design
  const [openId, setOpenId] = useState<string | null>("services");

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  // Left column: first 5 items (matching screenshot layout)
  const leftItems = FAQ_ITEMS.slice(0, 5);
  // Right column: 6th item (at top right above circular portrait)
  const rightItem = FAQ_ITEMS[5];

  return (
    <div className="bg-[#fcfbf9] text-[#1e293b] relative overflow-hidden min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative ambient brand backdrop blocks (recreating screenshot floating background aesthetic with brand palette) */}
      <div 
        className="absolute top-12 -left-16 w-80 h-80 rounded-3xl bg-[#001B41]/[0.03] border border-[#001B41]/[0.05] pointer-events-none -rotate-6 hidden lg:block"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-48 -right-20 w-96 h-96 rounded-3xl bg-[#b8967e]/[0.04] border border-[#b8967e]/[0.08] pointer-events-none rotate-12 hidden lg:block"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-[#001B41]/[0.02] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* =========================================================================
            MAIN WHITE CARD (Exact replica of screenshot container)
           ========================================================================= */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-zinc-200/90 shadow-[0_20px_70px_rgba(0,27,65,0.06)] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          {/* Header: Frequently Asked Questions */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#001B41] tracking-tight leading-tight">
              <span className="font-bold">Frequently</span> <span className="font-serif italic text-[#b8967e]">Asked Questions</span>
            </h1>
            <div className="w-16 h-[1.5px] bg-[#b8967e]/60 mx-auto mt-4" />
          </div>

          {/* Two-Column Grid: Left Accordions | Right Top Accordion + Circular CS Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* -----------------------------------------------------------------------
                LEFT COLUMN: STACK OF 5 ACCORDION ITEMS
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-4">
              {leftItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div key={item.id} className="transition-all duration-300">
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      className={`w-full text-left px-5 sm:px-6 py-4 transition-all duration-200 flex items-center justify-between cursor-pointer focus:outline-none ${
                        isOpen
                          ? "bg-[#001B41] text-white rounded-t-xl shadow-xs"
                          : "bg-[#001B41] hover:bg-[#071d3a] text-white rounded-xl shadow-xs hover:shadow-sm"
                      }`}
                    >
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide pr-4">
                        {item.question}
                      </span>
                      <span className="text-[#b8967e] shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {/* Accordion Expanded Body */}
                    {isOpen && (
                      <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-b-xl border border-zinc-200/90 border-t-0 shadow-sm animate-fadeIn">
                        <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* -----------------------------------------------------------------------
                RIGHT COLUMN: 1 ACCORDION ITEM AT TOP + CIRCULAR CS FIRM PORTRAIT
               ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              
              {/* Right Top Accordion Item */}
              {rightItem && (
                <div className="transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(rightItem.id)}
                    className={`w-full text-left px-5 sm:px-6 py-4 transition-all duration-200 flex items-center justify-between cursor-pointer focus:outline-none ${
                      openId === rightItem.id
                        ? "bg-[#001B41] text-white rounded-t-xl shadow-xs"
                        : "bg-[#001B41] hover:bg-[#071d3a] text-white rounded-xl shadow-xs hover:shadow-sm"
                    }`}
                  >
                    <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide pr-4">
                      {rightItem.question}
                    </span>
                    <span className="text-[#b8967e] shrink-0">
                      {openId === rightItem.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {openId === rightItem.id && (
                    <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-b-xl border border-zinc-200/90 border-t-0 shadow-sm animate-fadeIn">
                      <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                        {rightItem.answer}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Circular CS Professional Picture Badge (Exact replica of screenshot composition) */}
              <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
                
                {/* Outer Dashed Ring */}
                <div className="relative p-3 rounded-full border-2 border-dashed border-[#b8967e]/70 group">
                  
                  {/* Subtle Gold Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#b8967e]/10 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                  {/* Inner Circular Frame with CS Firm Professional Photo */}
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden relative shadow-2xl border-4 border-white bg-gradient-to-br from-[#001B41] to-[#071d3a]">
                    <img 
                      src="/cs_faq_advisor.jpg" 
                      alt="Company Secretary & Corporate Legal Counsel" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay at base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001B41]/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Certified CS Badge at Bottom Center */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#001B41] text-white px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold shadow-lg border border-[#b8967e]/40 whitespace-nowrap flex items-center gap-1.5 z-20">
                    <ShieldCheck size={13} className="text-[#b8967e]" />
                    <span>CS FIRM</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =========================================================================
              BOTTOM CENTER PILL CTA BUTTON (Replica of screenshot pill button in brand colors)
             ========================================================================= */}
          <div className="mt-12 sm:mt-14 text-center">
            <button
              type="button"
              onClick={() => onOpenConsultation("FAQ Advisory Consultation")}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#b8967e] to-[#a68269] hover:from-[#c5a880] hover:to-[#b8967e] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2.5 group"
            >
              <span>Schedule CS Consultation</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
