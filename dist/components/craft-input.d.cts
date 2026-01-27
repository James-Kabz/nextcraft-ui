import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';
import 'react/jsx-runtime';

type CraftInputSize = "sm" | "md" | "lg";
type CraftInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: ThemeName;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React.ReactNode;
};
declare const CraftInput: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: ThemeName;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftInput, type CraftInputProps };
