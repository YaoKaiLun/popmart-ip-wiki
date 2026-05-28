import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "w-12 h-12 text-lg",
  md: "w-20 h-20 text-2xl",
  lg: "w-32 h-32 text-4xl",
  xl: "w-40 h-40 text-5xl",
};

export function GradientAvatar({
  gradient,
  name,
  size = "md",
  className,
}: {
  gradient: string;
  name: string;
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white shadow-lg shrink-0",
        sizeClasses[size],
        className
      )}
      style={{ background: gradient }}
    >
      {name.charAt(0)}
    </div>
  );
}
