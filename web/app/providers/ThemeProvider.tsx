'use client';

import * as React from 'react';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type UseThemeProps = {
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    theme: Theme;
    systemTheme?: 'dark' | 'light'
}

type ThemeProviderProps = {
    children: React.ReactNode
}

const LOCAL_STORAGE_KEY = 'theme';

function getPreferredTheme(): Theme {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;
    if (stored) return stored;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? 'dark' : 'light';
}

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined)

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}

// TODO: annoying white flash in the beninging
export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(getPreferredTheme());
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const preferred = getPreferredTheme();
        setTheme(preferred);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

