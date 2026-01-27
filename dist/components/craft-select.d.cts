import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';
import 'react/jsx-runtime';

type CraftSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
};
declare const CraftSelect: React.ForwardRefExoticComponent<React.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
} & React.RefAttributes<HTMLSelectElement>>;

export { CraftSelect, type CraftSelectProps };
