import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  hasComma?: boolean;
  label: string;
  subtext: string;
}

const STATS: StatItem[] = [
  {
    id: "practice",
    target: 15,
    suffix: "+",
    label: "PROFESSIONAL PRACTICE",
    subtext: "Established in Pune",
  },
  {
    id: "clients",
    target: 750,
    suffix: "+",
    label: "CORPORATE RETAINERS",
    subtext: "Domestic & Inbound Multinationals",
  },
  {
    id: "filings",
    target: 1500,
    suffix: "+",
    hasComma: true,
    label: "SECRETARIAL & TM FILINGS",
    subtext: "Zero-defect ROC & IP records",
  },
  {
    id: "compliance",
    target: 100,
    suffix: "%",
    label: "STATUTORY COMPLIANCE",
    subtext: "ICSI Peer-Reviewed Unit",
  },
];

// High-performance animated counter using easeOutExpo and requestAnimationFrame
function AnimatedNumber({
  target,
  hasComma,
  isTriggered,
  duration = 2000,
}: {
  target: number;
  hasComma?: boolean;
  isTriggered: boolean;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    let startTime: number | null = null;
    let animFrame: number;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const val = Math.floor(easedProgress * target);
      setCurrent(val);

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isTriggered, target, duration]);

  const formatted = hasComma
    ? current.toLocaleString("en-US")
    : current.toString();

  return <span>{formatted}</span>;
}

export default function StatsCounterBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback trigger in case already above fold
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 350);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#001B41] border-y border-[#b8967e]/30 relative z-20 text-white py-10 sm:py-12 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center px-4 transition-transform duration-300 hover:scale-[1.02] ${
                idx !== 0 ? "pt-6 sm:pt-0" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight tabular-nums">
                  <AnimatedNumber
                    target={stat.target}
                    hasComma={stat.hasComma}
                    isTriggered={isVisible}
                    duration={1800 + idx * 120}
                  />
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#b8967e] font-light">
                  {stat.suffix}
                </span>
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#d6c0b0] font-bold mt-2">
                {stat.label}
              </div>

              <div className="text-[11px] text-zinc-400 font-sans mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
