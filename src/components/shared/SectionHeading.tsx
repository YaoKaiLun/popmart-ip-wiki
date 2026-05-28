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
      <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-brand-pink",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
