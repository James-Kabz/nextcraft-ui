import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';
import 'react/jsx-runtime';

type CraftCurrencyInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    currencySymbol?: string;
};
declare const CraftCurrencyInput: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    currencySymbol?: string;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftCurrencyInput, type CraftCurrencyInputProps };
