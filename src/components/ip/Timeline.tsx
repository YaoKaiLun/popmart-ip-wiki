"use client";

import { TimelineEvent } from "@/data/types";
import { TimelineItem } from "./TimelineItem";

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />
      <div className="space-y-10">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
