import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="magazine-title text-3xl sm:text-4xl text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-white/30 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
