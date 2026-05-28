"use client";

export function FloatingElements({
  colors,
  count = 6,
}: {
  colors: string[];
  count?: number;
}) {
  const elements = Array.from({ length: count }, (_, i) => {
    const color = colors[i % colors.length];
    const size = 20 + (i * 17) % 40;
    const left = (i * 23 + 10) % 90;
    const top = (i * 31 + 5) % 80;
    const delay = i * 0.8;
    const animClass =
      i % 3 === 0
        ? "animate-float"
        : i % 3 === 1
          ? "animate-float-delayed"
          : "animate-float-slow";

    return (
      <div
        key={i}
        className={`absolute rounded-full opacity-20 ${animClass}`}
        style={{
          background: color,
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements}
    </div>
  );
}
