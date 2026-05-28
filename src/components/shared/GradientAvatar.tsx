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
        "relative rounded-full flex items-center justify-center font-bold text-white shrink-0 overflow-hidden",
        sizeClasses[size],
        className
      )}
      style={{ background: gradient }}
    >
      {name.charAt(0)}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: "inset 0 -4px 12px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}
