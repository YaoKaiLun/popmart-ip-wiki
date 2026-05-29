"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2000亿+", label: "市值（港元）" },
  { value: "500+", label: "全球门店" },
  { value: "8", label: "核心 IP" },
  { value: "130亿+", label: "年营收（人民币）" },
];

export function StatsSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center px-4 py-8 lg:py-12 border-r border-white/5 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <p className="magazine-title text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
                {stat.value}
              </p>
              <p className="text-xs lg:text-sm text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="divider mt-12" />
      </div>
    </section>
  );
}
