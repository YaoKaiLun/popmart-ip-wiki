"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IP } from "@/data/types";
import { Badge } from "@/components/shared/Badge";

export function IPHeroBanner({ ip }: { ip: IP }) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden noise-bg bg-brand-dark flex items-end">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: ip.colors.gradient }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full animate-neon-pulse"
        style={{ background: ip.colors.primary, opacity: 0.1, filter: "blur(100px)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-16 pt-32">
        <div className="flex flex-col md:flex-row items-end md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div
              className="absolute -inset-6 rounded-full opacity-30 blur-2xl"
              style={{ background: ip.colors.gradient }}
            />
            <div className="relative w-48 h-48 md:w-56 md:h-56 animate-levitate">
              <Image
                src={ip.image}
                alt={ip.name}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
                {ip.name}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl text-gray-500 mb-2"
            >
              {ip.nameEn}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm text-gray-400 mb-5"
            >
              设计师：{ip.designer} · {ip.year}年
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {ip.personality.map((keyword) => (
                <Badge
                  key={keyword}
                  text={keyword}
                  className="bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark to-transparent" />
    </section>
  );
}
