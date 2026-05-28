"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  {
    value: "2000亿+",
    unit: "港元",
    label: "市值",
    description: "港股潮玩第一股，市值持续攀升",
  },
  {
    value: "500+",
    unit: "家",
    label: "全球门店",
    description: "覆盖全球多个国家和地区",
  },
  {
    value: "9+",
    unit: "个",
    label: "核心IP",
    description: "自有IP矩阵持续扩展",
  },
  {
    value: "130亿+",
    unit: "人民币",
    label: "年营收",
    description: "营收与利润连年高速增长",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="泡泡玛特的实力"
          subtitle="数据见证潮玩帝国的崛起"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center"
              >
                <p className="text-sm font-medium text-gray-500 mb-2">
                  {stat.label}
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-brand-black"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-400 mt-1">{stat.unit}</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
