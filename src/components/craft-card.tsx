import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: ThemeName;
  elevated?: boolean;
  intensity?: "subtle" | "medium" | "strong";
  bordered?: boolean;
};

const intensityClasses: Record<NonNullable<CraftCardProps["intensity"]>, string> = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90",
};

export function CraftCard({
  className,
  tone,
  elevated = true,
  intensity = "medium",
  bordered = true,
  children,
  ...props
}: CraftCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 text-[rgb(var(--nc-fg))]",
        intensityClasses[intensity],
        "bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.15)] via-[rgb(var(--nc-accent-2)/0.10)] to-[rgb(var(--nc-accent-3)/0.15)]",
        bordered ? "border-2 border-[rgb(var(--nc-accent-1)/0.3)]" : "border-0",
        elevated
          ? "shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          : "shadow-none",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        "transition-all duration-300",
        className
      )}
      data-nc-theme={tone}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
