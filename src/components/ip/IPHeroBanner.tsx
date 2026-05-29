"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IP } from "@/data/types";

export function IPHeroBanner({ ip }: { ip: IP }) {
  return (
    <section className="relative h-screen flex flex-col justify-end bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-[100px] opacity-[0.12]"
        style={{ background: ip.colors.primary }}
      />

      {/* Mobile: centered image / Desktop: right-side layout */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[12%] pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] animate-levitate"
        >
          <Image
            src={ip.image}
            alt={ip.name}
            fill
            priority
            className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      {/* Text overlay at bottom */}
      <div className="relative z-10 px-6 pb-10 lg:px-16 lg:pb-20 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pt-40 lg:bg-none lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:max-w-lg"
        >
          <p className="magazine-subtitle mb-3">
            {ip.designerEn} · {ip.year}
          </p>

          <h1 className="magazine-title text-5xl sm:text-6xl lg:text-8xl text-white mb-3">
            {ip.name}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/40 mb-5 max-w-md">
            {ip.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            {ip.personality.map((keyword) => (
              <span
                key={keyword}
                className="text-xs lg:text-sm text-white/25 tracking-wider"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
