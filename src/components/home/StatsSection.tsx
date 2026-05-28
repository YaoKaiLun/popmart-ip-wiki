"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  { value: "2000亿+", unit: "港元", label: "市值", color: "#FF1F6E" },
  { value: "500+", unit: "家", label: "全球门店", color: "#7C3AED" },
  { value: "9+", unit: "个", label: "核心IP", color: "#22C55E" },
  { value: "130亿+", unit: "人民币", label: "年营收", color: "#38BDF8" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 px-4 bg-brand-dark noise-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          title="泡泡玛特的实力"
          subtitle="数据见证潮玩帝国的崛起"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative glass-card rounded-2xl p-8 text-center overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: stat.color }}
                />
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {stat.label}
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-black text-white"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-500 mt-1">{stat.unit}</p>
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: stat.color }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
