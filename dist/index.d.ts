import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type CraftButtonVariant = "solid" | "ghost" | "outline";
type CraftButtonSize = "sm" | "md" | "lg";
type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CraftButtonVariant;
    size?: CraftButtonSize;
    glow?: boolean;
};
declare function CraftButton({ className, variant, size, glow, ...props }: CraftButtonProps): react_jsx_runtime.JSX.Element;

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: "aurora" | "ember" | "ocean";
};
declare function GlassCard({ className, tone, ...props }: GlassCardProps): react_jsx_runtime.JSX.Element;

type CraftInputTone = "aurora" | "ember" | "ocean";
type CraftInputSize = "sm" | "md" | "lg";
type CraftInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: CraftInputTone;
    inputSize?: CraftInputSize;
    glow?: boolean;
};
declare const CraftInput: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: CraftInputTone;
    inputSize?: CraftInputSize;
    glow?: boolean;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftButton, type CraftButtonProps, CraftInput, type CraftInputProps, GlassCard, type GlassCardProps };
