import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';
import 'react/jsx-runtime';

type CraftTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tone?: ThemeName;
};
declare const CraftTextarea: React.ForwardRefExoticComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tone?: ThemeName;
} & React.RefAttributes<HTMLTextAreaElement>>;

export { CraftTextarea, type CraftTextareaProps };
