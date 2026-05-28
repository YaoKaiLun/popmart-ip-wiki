"use client";

import { CULTURE_SECTIONS } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CultureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CULTURE_SECTIONS.map((section, i) => (
        <ScrollReveal key={section.title} delay={i * 0.1}>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 rounded-full bg-brand-pink" />
              <h3 className="text-lg font-bold text-brand-black">
                {section.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
