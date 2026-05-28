"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IP } from "@/data/types";
import { GradientAvatar } from "./GradientAvatar";
import { Badge } from "./Badge";

export function IPCard({ ip, index = 0 }: { ip: IP; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/ip/${ip.slug}`}>
        <div
          className="group relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden"
          style={{ backgroundColor: ip.colors.bgLight }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
            style={{ background: ip.colors.gradient }}
          />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <GradientAvatar
                gradient={ip.colors.gradient}
                name={ip.name}
                size="lg"
              />
              <div className="min-w-0 flex-1 pt-2">
                <h3 className="text-xl font-bold text-brand-black truncate">
                  {ip.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {ip.designer} · {ip.year}年
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {ip.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {ip.personality.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  text={tag}
                  className="bg-white/80 text-gray-700 text-xs"
                />
              ))}
            </div>
            <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: ip.colors.primary }}
            >
              了解更多 →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
