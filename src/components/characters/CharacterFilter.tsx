"use client";

import { ALL_IPS } from "@/data/ips";
import { cn } from "@/lib/utils";

export function CharacterFilter({
  activeIP,
  onFilterChange,
}: {
  activeIP: string | null;
  onFilterChange: (ip: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onFilterChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
          activeIP === null
            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25"
            : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
        )}
      >
        全部
      </button>
      {ALL_IPS.map((ip) => (
        <button
          key={ip.slug}
          onClick={() => onFilterChange(ip.slug)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeIP === ip.slug
              ? "text-white shadow-lg"
              : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
          )}
          style={
            activeIP === ip.slug
              ? { backgroundColor: ip.colors.primary, boxShadow: `0 4px 15px ${ip.colors.primary}40` }
              : undefined
          }
        >
          {ip.name}
        </button>
      ))}
    </div>
  );
}
