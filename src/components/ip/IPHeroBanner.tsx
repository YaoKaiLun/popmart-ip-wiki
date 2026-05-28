"use client";

import { motion } from "framer-motion";
import { IP } from "@/data/types";
import { GradientAvatar } from "@/components/shared/GradientAvatar";
import { Badge } from "@/components/shared/Badge";
import { FloatingElements } from "@/components/shared/FloatingElements";

export function IPHeroBanner({ ip }: { ip: IP }) {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: ip.colors.bgLight }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: ip.colors.gradient }}
      />
      <FloatingElements
        colors={[ip.colors.primary, ip.colors.secondary, ip.colors.accent]}
      />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <GradientAvatar
            gradient={ip.colors.gradient}
            name={ip.name}
            size="xl"
            className="shadow-2xl"
          />
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
            >
              {ip.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-500 mb-4"
            >
              {ip.nameEn}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="text-sm text-gray-600 mb-6"
            >
              设计师：{ip.designer} · {ip.year}年
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap justify-center md:justify-start gap-2"
            >
              {ip.personality.map((keyword) => (
                <Badge
                  key={keyword}
                  text={keyword}
                  className="bg-white/70 text-gray-700 backdrop-blur-sm"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
