import { cn } from "../libs/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  repeat?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  applyMask?: boolean;
  /**
   * Indices of items where the animation should be slower.
   */
  slowIndices?: number[];
}

export default function Marquee({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  slowIndices = [],
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex h-full w-full p-8 [--duration:10s] [--gap:20px] [gap:var(--gap)]",
        {
          "flex-col": vertical,
          "flex-row": !vertical,
        },
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={cn("flex shrink-0 gap-20", {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
            "animate-marquee-horizontal flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
          })}
          style={{
            animationDuration: slowIndices.includes(index)
              ? "30s" // Slower duration
              : "20s", // Default duration
          }}
        >
          {children}
        </div>
      ))}
      {applyMask && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 h-full w-full",
            {
              "": vertical,
              "": !vertical,
            }
          )}
        />
      )}
    </div>
  );
}
