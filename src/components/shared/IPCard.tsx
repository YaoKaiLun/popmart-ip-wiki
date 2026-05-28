"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IP } from "@/data/types";
import { Badge } from "./Badge";

export function IPCard({ ip, index = 0 }: { ip: IP; index?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -12, y: (x - 0.5) * 12 });
    setGlare({ x: x * 100, y: y * 100 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="perspective-1000"
    >
      <Link href={`/ip/${ip.slug}`}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative rounded-2xl overflow-hidden cursor-pointer preserve-3d transition-shadow duration-500 shadow-neu hover:shadow-neu-hover"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <div className="relative h-72 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: ip.colors.gradient }}
            />
            <Image
              src={ip.image}
              alt={ip.name}
              width={400}
              height={400}
              className="relative z-10 w-full h-full object-contain p-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
              }}
            />
          </div>

          <div className="relative z-10 bg-brand-dark p-5 border-t border-white/5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">{ip.name}</h3>
              <span className="text-xs text-gray-500">{ip.year}</span>
            </div>
            <p className="text-sm text-gray-400 mb-3 line-clamp-1">
              {ip.tagline}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {ip.personality.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    text={tag}
                    className="bg-white/5 text-gray-400 text-xs border border-white/10"
                  />
                ))}
              </div>
              <span
                className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: ip.colors.primary }}
              >
                探索 →
              </span>
            </div>
          </div>

          <div className="gradient-border absolute inset-0 rounded-2xl pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}
