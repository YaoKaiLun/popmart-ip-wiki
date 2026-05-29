"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ALL_IPS } from "@/data/ips";

const SWIPE_THRESHOLD = 50;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ip = ALL_IPS[current];

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return ALL_IPS.length - 1;
        if (next >= ALL_IPS.length) return 0;
        return next;
      });
    },
    []
  );

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "40%" : "-40%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-40%" : "40%", opacity: 0 }),
  };

  return (
    <section className="relative flex flex-col bg-brand-dark overflow-hidden select-none" style={{ height: '100dvh', minHeight: '100vh' }}>
      {/* Background glow */}
      <motion.div
        key={`bg-${ip.slug}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[120px] opacity-[0.12]"
          style={{ background: ip.colors.primary }}
        />
      </motion.div>

      {/* Mobile: stacked layout / Desktop: side-by-side */}
      <div className="relative flex-1 min-h-0 flex flex-col lg:flex-row lg:items-center lg:max-w-7xl lg:mx-auto lg:w-full lg:px-16">
        {/* IP image */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center pt-16 lg:pt-0 lg:flex-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={ip.slug}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing lg:relative lg:inset-auto"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px]">
                <Image
                  src={ip.image}
                  alt={ip.name}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text info */}
        <div className="relative z-10 px-6 pb-8 lg:pb-0 lg:px-0 lg:flex-1 lg:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${ip.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="magazine-subtitle mb-4">
                {String(current + 1).padStart(2, "0")} / {String(ALL_IPS.length).padStart(2, "0")}
              </p>

              <h1 className="magazine-title text-5xl sm:text-6xl lg:text-8xl text-white mb-3">
                {ip.name}
              </h1>

              <div className="divider-accent mb-5" />

              <p className="text-sm sm:text-base lg:text-lg text-white/50 mb-1 max-w-md">
                {ip.tagline}
              </p>

              <p className="text-xs lg:text-sm text-white/30 mb-6 lg:mb-8">
                {ip.designerEn} · {ip.year}
              </p>

              <Link
                href={`/ip/${ip.slug}`}
                className="inline-flex items-center gap-2 text-sm lg:text-base font-medium text-white/80 hover:text-white transition-colors"
              >
                <span>了解更多</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5 mt-8 lg:mt-12">
                {ALL_IPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`dot ${i === current ? "dot-active" : ""}`}
                    aria-label={`切换到 ${ALL_IPS[i].name}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop side arrows */}
      <button
        onClick={() => paginate(-1)}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/20 hover:text-white/60 transition-colors"
        aria-label="上一个"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => paginate(1)}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/20 hover:text-white/60 transition-colors"
        aria-label="下一个"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
