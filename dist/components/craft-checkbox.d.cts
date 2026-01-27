import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';
import 'react/jsx-runtime';

type CraftCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React.ReactNode;
    description?: React.ReactNode;
};
declare const CraftCheckbox: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React.ReactNode;
    description?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftCheckbox, type CraftCheckboxProps };
