import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { ThemeToggle } from "./components/ThemeToggle";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "kwerie - Software Engineer and Open Source Enthusiast",
    description: "Personal website of kwerie, a software engineer and open source enthusiast.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script src="/theme-init.js" />
            </head>
            <body className={`${spaceMono.variable} antialiased bg-zinc-50 dark:bg-primary text-primary dark:text-zinc-50 min-h-[100dvh] transition`}>
                <ThemeProvider>
                    {children}
                    <ThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}
