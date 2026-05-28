import { cn } from "@/lib/utils";

export function Badge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        className
      )}
    >
      {text}
    </span>
  );
}
