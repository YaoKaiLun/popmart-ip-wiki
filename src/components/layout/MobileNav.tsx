"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { ALL_IPS } from "@/data/ips";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.05, duration: 0.3 },
  }),
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 bg-brand-dark flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex h-14 items-center justify-between px-6">
              <span className="text-sm font-bold text-white/90">
                导航
              </span>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white/50 hover:text-white transition-colors"
                onClick={onClose}
                aria-label="关闭导航菜单"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block py-3.5 text-xl font-bold tracking-tight transition-colors border-b border-white/5",
                      pathname === link.href
                        ? "text-white"
                        : "text-white/25 hover:text-white/60"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* IP quick access */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto px-6 pb-10"
            >
              <p className="magazine-subtitle mb-4">热门 IP</p>
              <div className="grid grid-cols-4 gap-3">
                {ALL_IPS.slice(0, 4).map((ip) => (
                  <Link
                    key={ip.slug}
                    href={`/ip/${ip.slug}`}
                    onClick={onClose}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div
                      className="relative w-14 h-14 rounded-2xl overflow-hidden"
                      style={{ background: ip.colors.gradient }}
                    >
                      <Image
                        src={ip.image}
                        alt={ip.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors truncate w-full text-center">
                      {ip.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
