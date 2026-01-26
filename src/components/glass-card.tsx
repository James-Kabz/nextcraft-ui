import { cn } from "@/utils/cn";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
  intensity?: "subtle" | "medium" | "strong";
  bordered?: boolean;
};

const cardToneClasses: Record<NonNullable<GlassCardProps["tone"]>, string> = {
  aurora:
    "bg-gradient-to-br from-emerald-400/15 via-teal-400/10 to-cyan-400/15 border-emerald-300/30",
  ember: 
    "bg-gradient-to-br from-amber-400/15 via-orange-400/10 to-rose-400/15 border-amber-300/30",
  ocean: 
    "bg-gradient-to-br from-sky-400/15 via-blue-400/10 to-indigo-400/15 border-sky-300/30",
  midnight:
    "bg-gradient-to-br from-violet-400/15 via-purple-400/10 to-fuchsia-400/15 border-violet-300/30",
  cosmic:
    "bg-gradient-to-br from-pink-400/15 via-purple-400/10 to-indigo-400/15 border-pink-300/30",
};

const intensityClasses: Record<NonNullable<GlassCardProps["intensity"]>, string> = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90",
};

export function GlassCard({
  className,
  tone = "ocean",
  intensity = "medium",
  bordered = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 text-white",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
        intensityClasses[intensity],
        cardToneClasses[tone],
        bordered ? "border-2" : "border-0",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}