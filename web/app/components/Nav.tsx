"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Socials } from "./Socials/Socials";

const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
    return (
        <a href={href} onClick={onClick}>{label}</a>
    );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
    if (typeof document === "undefined") return null;

    return createPortal(
        <div className="absolute inset-0 z-50 bg-zinc-50 dark:bg-primary flex flex-col md:hidden">
            <div className="flex items-center justify-end py-4 container">
                <button onClick={onClose} className="w-6 h-6 cursor-pointer" aria-label="Close menu">
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </button>
            </div>
            <nav className="flex-1 flex flex-col gap-8 text-3xl container">
                {navLinks.map(({ href, label }) => (
                    <NavItem key={href} href={href} label={label} onClick={onClose} />
                ))}
            </nav>
            <div className="py-4 container">
                <Socials />
            </div>
        </div>,
        document.body,
    );
}

export function Nav(): React.ReactNode {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className="flex items-center justify-between py-4 border-b border-primary dark:border-zinc-700">
            <div className="text-3xl dark:text-zinc-50 font-bold before:content-['~/'] shell-prefix select-none">kwerie</div>
            <button onClick={() => setMobileMenuOpen(true)} className="w-6 h-6 md:hidden cursor-pointer" aria-label="Open menu">
                <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
            <div className="ml-auto flex items-center gap-4 text-2xl hidden md:flex">
                {navLinks.map(({ href, label }) => (
                    <NavItem key={href} href={href} label={label} />
                ))}
            </div>

            {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
        </div>
    );
}
