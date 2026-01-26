import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";
type CraftButtonProps = React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CraftButtonVariant;
    size?: CraftButtonSize;
    glow?: boolean;
};
declare function CraftButton({ className, variant, size, glow, disabled, ...props }: CraftButtonProps): react_jsx_runtime.JSX.Element;

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
    intensity?: "subtle" | "medium" | "strong";
    bordered?: boolean;
};
declare function GlassCard({ className, tone, intensity, bordered, children, ...props }: GlassCardProps): react_jsx_runtime.JSX.Element;

type CraftInputTone = "aurora" | "ember" | "ocean" | "midnight";
type CraftInputSize = "sm" | "md" | "lg";
type CraftInputProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: CraftInputTone;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React$1.ReactNode;
};
declare const CraftInput: React$1.ForwardRefExoticComponent<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: CraftInputTone;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>>;

export { CraftButton, type CraftButtonProps, CraftInput, type CraftInputProps, GlassCard, type GlassCardProps };
