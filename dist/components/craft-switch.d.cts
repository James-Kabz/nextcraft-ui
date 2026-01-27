import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';
import 'react/jsx-runtime';

type CraftSwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React.ReactNode;
};
declare const CraftSwitch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;

export { CraftSwitch, type CraftSwitchProps };
