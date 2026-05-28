"use client";

import { CULTURE_SECTIONS } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CultureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CULTURE_SECTIONS.map((section, i) => (
        <ScrollReveal key={section.title} delay={i * 0.1}>
          <div className="glass-card rounded-2xl p-6 h-full group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-pink-500 to-purple-500" />
              <h3 className="text-lg font-bold text-white">
                {section.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {section.content}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
