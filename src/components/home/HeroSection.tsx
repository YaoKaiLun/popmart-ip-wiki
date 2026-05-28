"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingElements } from "@/components/shared/FloatingElements";

const floatingColors = [
  "#FF69B4",
  "#22C55E",
  "#7C3AED",
  "#38BDF8",
  "#F97316",
  "#FACC15",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 animate-gradient">
      <FloatingElements colors={floatingColors} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
        >
          探索泡泡玛特的奇妙世界
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          深入了解9大核心IP的故事线、角色与发展历程，从潮玩文化中发现投资价值
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#ip-showcase"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            浏览IP图鉴
          </Link>
          <Link
            href="/characters"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg"
          >
            角色百科
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
