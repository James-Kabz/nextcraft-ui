import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';
import 'react/jsx-runtime';

type CraftSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
};
declare const CraftSelect: React.ForwardRefExoticComponent<React.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
} & React.RefAttributes<HTMLSelectElement>>;

export { CraftSelect, type CraftSelectProps };
