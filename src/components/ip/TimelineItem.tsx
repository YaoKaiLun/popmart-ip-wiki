"use client";

import { TimelineEvent } from "@/data/types";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/constants";

const CATEGORY_BORDER_COLORS: Record<string, string> = {
  origin: "border-amber-400",
  collaboration: "border-blue-400",
  release: "border-green-400",
  milestone: "border-purple-400",
  viral: "border-red-400",
};

const CATEGORY_DOT_COLORS: Record<string, string> = {
  origin: "bg-amber-400",
  collaboration: "bg-blue-400",
  release: "bg-green-400",
  milestone: "bg-purple-400",
  viral: "bg-red-400",
};

export function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}) {
  const dotColor = CATEGORY_DOT_COLORS[event.category] ?? "bg-gray-400";
  const borderColor =
    CATEGORY_BORDER_COLORS[event.category] ?? "border-gray-400";

  return (
    <div className="relative flex items-start md:items-center">
      <div
        className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-white z-10 ${dotColor}`}
      />

      <div className="hidden md:block w-1/2" />
      <div className="hidden md:block w-1/2" />

      <div
        className={`
          w-full pl-10
          md:w-1/2 md:pl-0
          ${isLeft ? "md:pr-10 md:order-first md:text-right md:ml-0 md:mr-auto" : "md:pl-10 md:order-last md:ml-auto md:mr-0"}
        `}
        style={{ position: "relative" }}
      >
        <ScrollReveal
          delay={index * 0.1}
          direction={isLeft ? "left" : "right"}
        >
          <div
            className={`
              bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow
              ${event.highlight ? `border-l-4 ${borderColor}` : ""}
            `}
          >
            <div
              className={`flex items-center gap-2 mb-2 flex-wrap ${isLeft ? "md:justify-end" : ""}`}
            >
              <span className="text-sm font-semibold text-gray-500">
                {event.year}
                {event.month ? `.${String(event.month).padStart(2, "0")}` : ""}
              </span>
              <Badge
                text={CATEGORY_LABELS[event.category] ?? event.category}
                className={CATEGORY_COLORS[event.category]}
              />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
