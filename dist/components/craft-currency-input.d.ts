import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';
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
