"use client";

import React, { useState, useEffect } from "react";
import { HomeIcon, FileText, UsersRound, LogOut, Wrench, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const navItems = [
    { Icon: HomeIcon, label: "Home", href: "/home" },
    { Icon: FileText, label: "Tickets", href: "/tickets" },
    { Icon: UsersRound, label: "Customers", href: "/customers" },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "glass shadow-lg shadow-primary/5 border-b border-border/60"
                    : "bg-background/80 backdrop-blur-sm border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

                {/* Logo */}
                <Link
                    href="/home"
                    className="flex items-center gap-2.5 group shrink-0"
                >
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-105">
                        <Wrench className="w-4.5 h-4.5" />
                    </div>
                    <div className="leading-tight hidden sm:block">
                        <p className="text-sm font-bold tracking-tight text-foreground">Dave&apos;s Repair</p>
                        <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">Computer Shop</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map(({ Icon, label, href }) => {
                        const isActive = pathname === href || pathname?.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    }`}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors duration-200"
                        asChild
                    >
                        <LogoutLink>
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </LogoutLink>
                    </Button>

                    {/* Mobile hamburger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border/60 ${mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-1 px-4 py-3 glass">
                    {navItems.map(({ Icon, label, href }) => {
                        const isActive = pathname === href || pathname?.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </Link>
                        );
                    })}
                    <Button
                        variant="ghost"
                        className="justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 mt-1"
                        asChild
                    >
                        <LogoutLink>
                            <LogOut className="w-4 h-4" />
                            Logout
                        </LogoutLink>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
