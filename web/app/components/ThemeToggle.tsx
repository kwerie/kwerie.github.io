'use client';

import * as React from "react";
import { useTheme } from "../providers/ThemeProvider";

export function ThemeToggle(): React.ReactNode {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="absolute right-[10] bottom-[10] border border-primary dark:border-zinc-50 p-2">
            <div className="before:content-['{'] after:content-['}'] shell-prefix select-none cursor-pointer" onClick={toggleTheme}>{theme}</div>
        </div>
    );
}
