import React from "react";
import Header from "@/components/Header";

export default async function RSLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {children}
            </main>
            <footer className="border-t border-border/60 py-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
                    <span>© {new Date().getFullYear()} Dave&apos;s Computer Repair Shop</span>
                    <span className="text-xs">Professional Tech Support &amp; Repair Services</span>
                </div>
            </footer>
        </div>
    );
}