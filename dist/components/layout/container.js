import { jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl"
};
function Container({ className, size = "lg", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className),
      ...props
    }
  );
}
export {
  Container
};
//# sourceMappingURL=container.js.map