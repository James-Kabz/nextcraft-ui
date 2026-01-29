import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';
import 'react/jsx-runtime';

type CraftNumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    tone?: ThemeName;
};
declare const CraftNumberInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    tone?: ThemeName;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftNumberInput, type CraftNumberInputProps };
