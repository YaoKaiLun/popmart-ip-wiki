"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getIPBySlug } from "@/data/ips";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const labubu = getIPBySlug("labubu")!;

const highlights = [
  { label: "全球爆红", icon: "🔥" },
  { label: "Lisa同款", icon: "⭐" },
  { label: "现象级热销", icon: "🚀" },
];

export function FeaturedIP() {
  const firstParagraph = labubu.description.split("\n\n")[0];

  return (
    <section className="relative py-24 px-4 overflow-hidden noise-bg bg-brand-dark">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full animate-neon-pulse"
        style={{ background: labubu.colors.primary, opacity: 0.15, filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <motion.div
                className="relative"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
                  style={{ background: labubu.colors.gradient }}
                />
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <Image
                    src={labubu.image}
                    alt={labubu.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(34,197,94,0.4)]"
                  />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6 border"
                style={{
                  color: labubu.colors.primary,
                  borderColor: `${labubu.colors.primary}33`,
                  background: `${labubu.colors.primary}10`,
                }}
              >
                HOT IP
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                LABUBU
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                森林精灵小怪兽，全球潮玩顶流
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                {firstParagraph}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {highlights.map((tag) => (
                  <span
                    key={tag.label}
                    className="glass-card px-4 py-2 rounded-xl text-sm font-medium text-white"
                  >
                    {tag.icon} {tag.label}
                  </span>
                ))}
              </div>

              <Link
                href="/ip/labubu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ background: labubu.colors.gradient }}
              >
                探索 LABUBU 的故事
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
