"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getIPBySlug } from "@/data/ips";

const labubu = getIPBySlug("labubu")!;

export function FeaturedIP() {
  const firstParagraph = labubu.description.split("\n\n")[0];

  return (
    <section className="px-6 py-20 md:px-12 md:py-32 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <p className="magazine-subtitle mb-2">Featured</p>
        <h2 className="magazine-title text-3xl sm:text-4xl lg:text-5xl text-white mb-12 lg:mb-16">
          当下最热
        </h2>

        {/* Mobile: stacked / Desktop: side-by-side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12 lg:mb-0 lg:flex-1"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] animate-levitate">
              <div
                className="absolute inset-0 rounded-full blur-[60px] opacity-20"
                style={{ background: labubu.colors.primary }}
              />
              <Image
                src={labubu.image}
                alt={labubu.name}
                fill
                className="relative object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:flex-1 lg:max-w-lg"
          >
            <h3 className="magazine-title text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
              LABUBU
            </h3>
            <p className="text-sm lg:text-base text-white/30 mb-6">
              {labubu.designerEn} · {labubu.year}
            </p>

            <div className="divider mb-6" />

            <p className="text-sm sm:text-base lg:text-lg text-white/45 leading-relaxed mb-8 lg:mb-10">
              {firstParagraph}
            </p>

            <Link
              href="/ip/labubu"
              className="inline-flex items-center gap-2 text-sm lg:text-base font-medium text-white/70 hover:text-white transition-colors"
            >
              <span>探索 LABUBU 的故事</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
