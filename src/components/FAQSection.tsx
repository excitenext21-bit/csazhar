import React, { useState } from "react";
import { 
  FileText, IndianRupee, Clock, Users, ShieldCheck, 
  Minus, Plus 
} from "lucide-react";

interface FAQSectionProps {
  onOpenConsultation?: (topic?: string) => void;
  onNavigateContact?: () => void;
}

export const FAQS = [
  {
    id: "services",
    icon: FileText,
    question: "What services does your firm offer?",
    answer: "We offer a comprehensive range of services including audit & assurance, taxation, GST, accounting & bookkeeping, business advisory, and compliance services for individuals, startups and businesses of all sizes."
  },
  {
    id: "getting-started",
    icon: IndianRupee,
    question: "How can I get started with your services?",
    answer: "Getting started is simple. You can connect with our team through our contact form, book a consultation call, or email us your requirements. We will assess your needs and propose a tailored engagement plan."
  },
  {
    id: "turnaround",
    icon: Clock,
    question: "What is the typical turnaround time for filings?",
    answer: "Turnaround times vary based on the specific filing and statutory requirements. Routine secretarial and tax filings are typically completed within 3 to 5 business days, while specialized restructuring or audit filings follow an agreed project timeline."
  },
  {
    id: "clientele",
    icon: Users,
    question: "Do you work with individuals or only businesses?",
    answer: "We cater to both businesses and individuals. From proprietary firms, startups, and LLPs to public listed corporations, as well as high-net-worth individuals and directors requiring personal compliance and tax advisory."
  },
  {
    id: "security",
    icon: ShieldCheck,
    question: "How do you ensure data security and confidentiality?",
    answer: "We enforce enterprise-grade data protection, non-disclosure agreements (NDAs), encrypted communication channels, and strict ICSI ethical standards to guarantee 100% confidentiality of all client statutory and financial data."
  }
];

export default function FAQSection({ onOpenConsultation, onNavigateContact }: FAQSectionProps) {
  // Default to first item expanded as shown in reference design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-24 border-t border-zinc-200/80">
      
      {/* Bottom-right subtle geometric gold lines watermark */}
      <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#b8967e]">
          <line x1="20" y1="100" x2="100" y2="20" strokeWidth="0.8" />
          <line x1="35" y1="100" x2="100" y2="35" strokeWidth="0.8" />
          <line x1="50" y1="100" x2="100" y2="50" strokeWidth="0.8" />
          <line x1="65" y1="100" x2="100" y2="65" strokeWidth="0.8" />
          <line x1="80" y1="100" x2="100" y2="80" strokeWidth="0.8" />
          <line x1="95" y1="100" x2="100" y2="95" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Header, Cursive Calligraphy, and Angled Consultation Photo
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09172e] leading-[1.15]">
              Got Questions?<br />
              <span className="text-[#b8967e]">We've Got Answers.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed max-w-md">
              Find quick answers to some of the most common queries about our services, process and more.
            </p>


            {/* Bottom Angled Consultation Photo Frame */}
            <div className="pt-2">
              <div className="relative rounded-tr-[56px] overflow-hidden shadow-lg border border-zinc-200/70 max-w-md group">
                <img 
                  src="/ca_consultation_ultra_hd.jpg" 
                  alt="Financial Consultation and Advisory" 
                  className="w-full h-56 sm:h-64 object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                {/* Subtle luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#001B41]/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Diagonal navy accent wedge in bottom-right corner */}
                <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-[#001B41] rotate-45 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Interactive FAQ Accordion List & Bottom Contact Callout
             ========================================================================= */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const Icon = faq.icon;
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={faq.id}
                    className={`transition-all duration-300 rounded-2xl ${
                      isOpen 
                        ? "bg-[#fcfaf7] border border-[#b8967e]/35 p-5 sm:p-6 shadow-sm" 
                        : "bg-transparent border-b border-zinc-200/80 py-4 px-2 hover:bg-[#faf8f5]/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* Icon Circle */}
                        <div 
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isOpen 
                              ? "bg-[#b8967e] text-white shadow-sm" 
                              : "bg-[#f4efe9] text-zinc-600 group-hover:bg-[#ebe3da] group-hover:text-[#b8967e]"
                          }`}
                        >
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        {/* Question Text */}
                        <span className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? "text-[#09172e]" : "text-[#1e293b] group-hover:text-[#b8967e]"
                        }`}>
                          {faq.question}
                        </span>
                      </div>

                      {/* Expand / Collapse Icon */}
                      <span className="shrink-0 text-[#b8967e] ml-2">
                        {isOpen ? (
                          <Minus size={20} strokeWidth={2.2} />
                        ) : (
                          <Plus size={20} strokeWidth={2} className="text-zinc-400 group-hover:text-[#b8967e] transition-colors" />
                        )}
                      </span>
                    </button>

                    {/* Collapsible Answer */}
                    {isOpen && (
                      <div className="pt-3.5 pl-14 pr-4 sm:pr-8 animate-in fade-in slide-in-from-top-1 duration-200">
                        <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}
