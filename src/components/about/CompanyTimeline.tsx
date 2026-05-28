"use client";

import { COMPANY_TIMELINE } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CompanyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-px" />
      <div className="space-y-8">
        {COMPANY_TIMELINE.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <ScrollReveal
              key={event.year + event.title}
              delay={i * 0.05}
              direction={isLeft ? "left" : "right"}
            >
              <div className="relative flex items-start gap-6 md:gap-0">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-pink-500 -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />

                <div className="hidden md:block md:w-1/2 md:pr-12">
                  {isLeft && (
                    <div className="text-right">
                      <EventContent event={event} />
                    </div>
                  )}
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-12">
                  {!isLeft && <EventContent event={event} />}
                </div>

                <div className="md:hidden pl-10">
                  <EventContent event={event} />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

function EventContent({
  event,
}: {
  event: (typeof COMPANY_TIMELINE)[number];
}) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 ${
        event.highlight ? "border-l-4 border-pink-500/50" : ""
      }`}
    >
      <span className="inline-block text-sm font-bold text-pink-400 mb-1">
        {event.year}
      </span>
      <h3 className="font-bold text-white mb-2">{event.title}</h3>
      <p className="text-sm text-gray-400">{event.description}</p>
    </div>
  );
}
