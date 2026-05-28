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
            ? "bg-brand-pink text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              ? "text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
          style={
            activeIP === ip.slug
              ? { backgroundColor: ip.colors.primary }
              : undefined
          }
        >
          {ip.name}
        </button>
      ))}
    </div>
  );
}
