"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_IPS } from "@/data/ips";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const doubled = [...ALL_IPS, ...ALL_IPS];

  return (
    <section className="noise-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-brand-dark" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[100px]" />
      </motion.div>

      <div className="relative z-10 w-full overflow-hidden py-8">
        <div className="flex animate-marquee w-max gap-6">
          {doubled.map((ip, i) => (
            <div
              key={`${ip.slug}-${i}`}
              className="flex-shrink-0 w-[120px] h-[120px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Image
                src={ip.image}
                alt={ip.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative">
          <h1
            aria-hidden="true"
            className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text blur-2xl opacity-60 select-none"
          >
            探索泡泡玛特的
            <br />
            奇妙世界
          </h1>
          <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            探索泡泡玛特的
            <br />
            <span className="text-stroke text-6xl md:text-7xl lg:text-8xl">
              奇妙世界
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 mx-auto h-[2px] w-48 md:w-64 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-pulse"
        />

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          深入了解9大核心IP的故事线、角色与发展历程
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#ip-showcase"
            className="glass-card px-8 py-4 font-bold text-white rounded-full hover:scale-105 transition-all duration-300 text-lg bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-white/10"
          >
            浏览IP图鉴
          </Link>
          <Link
            href="/characters"
            className="glass-card px-8 py-4 font-bold text-white rounded-full hover:scale-105 transition-all duration-300 text-lg border border-white/10"
          >
            角色百科
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
