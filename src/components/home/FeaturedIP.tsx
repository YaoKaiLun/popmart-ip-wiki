"use client";

import Link from "next/link";
import { getIPBySlug } from "@/data/ips";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GradientAvatar } from "@/components/shared/GradientAvatar";
import { FloatingElements } from "@/components/shared/FloatingElements";

const labubu = getIPBySlug("labubu")!;

const highlights = ["全球爆红", "Lisa同款", "现象级热销"];

export function FeaturedIP() {
  const firstParagraph = labubu.description.split("\n\n")[0];

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: labubu.colors.bgLight }}
    >
      <FloatingElements
        colors={[labubu.colors.primary, labubu.colors.secondary, labubu.colors.accent]}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-full opacity-20 blur-2xl"
                  style={{ background: labubu.colors.gradient }}
                />
                <GradientAvatar
                  gradient={labubu.colors.gradient}
                  name={labubu.name}
                  size="xl"
                  className="w-56 h-56 text-7xl md:w-72 md:h-72 md:text-8xl"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                当前最火IP：LABUBU
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {firstParagraph}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: labubu.colors.primary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/ip/labubu"
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ background: labubu.colors.gradient }}
              >
                探索 LABUBU 的故事
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
