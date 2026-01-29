"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
  xl: 40
};
function Spinner({ size, color }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "animate-spin",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: color,
            strokeWidth: "4",
            className: "opacity-25"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4 12a8 8 0 018-8",
            stroke: color,
            strokeWidth: "4",
            strokeLinecap: "round",
            className: "opacity-75"
          }
        )
      ]
    }
  );
}
function Dots({ size, color }) {
  const dotSize = Math.max(4, Math.floor(size / 6));
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: [0, 1, 2].map((index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex animate-bounce rounded-full",
      style: {
        width: dotSize,
        height: dotSize,
        backgroundColor: color,
        animationDelay: `${index * 120}ms`
      }
    },
    index
  )) });
}
function Bars({ size, color }) {
  const barHeight = size;
  const barWidth = Math.max(3, Math.floor(size / 6));
  return /* @__PURE__ */ jsx("div", { className: "flex items-end gap-1", children: [0, 1, 2, 3].map((index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex animate-pulse rounded-sm",
      style: {
        width: barWidth,
        height: barHeight - index * 4,
        backgroundColor: color,
        animationDelay: `${index * 100}ms`
      }
    },
    index
  )) });
}
function Pulse({ size, color }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex animate-pulse rounded-full",
      style: { width: size, height: size, backgroundColor: color }
    }
  );
}
function Ripple({ size, color }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex rounded-full border-2 animate-ping",
      style: { width: size, height: size, borderColor: color }
    }
  );
}
function Ring({ size, color }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex animate-spin rounded-full border-2 border-t-transparent",
      style: { width: size, height: size, borderColor: color }
    }
  );
}
function Bounce({ size, color }) {
  const dotSize = Math.max(4, Math.floor(size / 5));
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: [0, 1].map((index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "inline-flex animate-bounce rounded-full",
      style: {
        width: dotSize,
        height: dotSize,
        backgroundColor: color,
        animationDelay: `${index * 140}ms`
      }
    },
    index
  )) });
}
function CraftLoader({
  loading = false,
  type = "dots",
  size = "medium",
  color = "rgb(var(--nc-accent-1))",
  overlay = false,
  text,
  textPosition = "bottom",
  backgroundColor = "rgba(0, 0, 0, 0.35)",
  tone,
  className
}) {
  if (!loading) return null;
  const px = sizeMap[size];
  const content = /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-3",
        textPosition === "top" && "flex-col-reverse",
        className
      ),
      "data-nc-theme": tone,
      children: [
        type === "spin" && /* @__PURE__ */ jsx(Spinner, { size: px, color }),
        type === "dots" && /* @__PURE__ */ jsx(Dots, { size: px, color }),
        type === "bars" && /* @__PURE__ */ jsx(Bars, { size: px, color }),
        type === "pulse" && /* @__PURE__ */ jsx(Pulse, { size: px, color }),
        type === "ripple" && /* @__PURE__ */ jsx(Ripple, { size: px, color }),
        type === "ring" && /* @__PURE__ */ jsx(Ring, { size: px, color }),
        type === "bounce" && /* @__PURE__ */ jsx(Bounce, { size: px, color }),
        text ? /* @__PURE__ */ jsx("span", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: text }) : null
      ]
    }
  );
  if (!overlay) return content;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-0 z-10 flex items-center justify-center",
      style: { backgroundColor },
      "data-nc-theme": tone,
      children: content
    }
  );
}
export {
  CraftLoader
};
//# sourceMappingURL=craft-loader.js.map