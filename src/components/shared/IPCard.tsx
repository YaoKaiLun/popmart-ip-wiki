"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IP } from "@/data/types";

export function IPCard({ ip, index = 0 }: { ip: IP; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/ip/${ip.slug}`} className="group block">
        <div className="flex gap-5 items-center py-6 border-b border-white/5 hover:border-white/10 transition-colors">
          {/* Image */}
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0"
            style={{ background: ip.colors.gradient }}
          >
            <Image
              src={ip.image}
              alt={ip.name}
              width={200}
              height={200}
              className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                {ip.name}
              </h3>
              <span className="text-xs text-white/20">{ip.year}</span>
            </div>
            <p className="text-sm text-white/40 line-clamp-1 mb-2">
              {ip.tagline}
            </p>
            <div className="flex gap-2">
              {ip.personality.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/25 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <svg
            className="w-4 h-4 text-white/10 group-hover:text-white/40 transition-colors shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
