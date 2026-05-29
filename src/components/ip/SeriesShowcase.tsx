"use client";

import { motion } from "framer-motion";
import { Series } from "@/data/types";
import { Badge } from "@/components/shared/Badge";

export function SeriesShowcase({ series }: { series: Series[] }) {
  if (series.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">暂无系列数据</p>
    );
  }

  return (
    <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
      {series.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ y: -4 }}
          className="glass-subtle rounded-2xl p-5 min-w-[260px] snap-start md:min-w-0 group"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-white">{s.name}</h3>
            <span className="text-xs text-gray-500">{s.year}</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
            {s.description}
          </p>
          <div className="flex items-center gap-2">
            <Badge
              text={`${s.pieceCount}款`}
              className="bg-white/5 text-gray-400 border border-white/10"
            />
            <Badge
              text={s.theme}
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
