import React from "react";
import Link from "next/link";
import {
    Plus,
    FileText,
    Clock,
    CheckCircle2,
    AlertCircle,
    Wrench,
    Search,
    Filter,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mockTickets = [
    {
        id: "#TK-0248",
        customer: "James Miller",
        device: "Dell XPS 15",
        issue: "Screen Replacement",
        status: "completed" as const,
        priority: "medium" as const,
        created: "Feb 28, 2026",
        updated: "2h ago",
    },
    {
        id: "#TK-0247",
        customer: "Sarah Chen",
        device: "MacBook Pro 14\"",
        issue: "Virus & Malware Removal",
        status: "in-progress" as const,
        priority: "high" as const,
        created: "Feb 27, 2026",
        updated: "4h ago",
    },
    {
        id: "#TK-0246",
        customer: "Robert Singh",
        device: "HP Pavilion Gaming",
        issue: "HDD → SSD Upgrade",
        status: "in-progress" as const,
        priority: "low" as const,
        created: "Feb 27, 2026",
        updated: "5h ago",
    },
    {
        id: "#TK-0245",
        customer: "Emily Watson",
        device: "Lenovo ThinkPad E15",
        issue: "Battery Replacement",
        status: "completed" as const,
        priority: "medium" as const,
        created: "Feb 26, 2026",
        updated: "1d ago",
    },
    {
        id: "#TK-0244",
        customer: "Carlos Lopez",
        device: "Custom Desktop PC",
        issue: "Data Recovery",
        status: "pending" as const,
        priority: "high" as const,
        created: "Feb 26, 2026",
        updated: "1d ago",
    },
];

const statusConfig = {
    completed: {
        label: "Completed",
        icon: CheckCircle2,
        cls: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400",
        dot: "bg-emerald-500",
    },
    "in-progress": {
        label: "In Progress",
        icon: Wrench,
        cls: "text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400",
        dot: "bg-blue-500",
    },
    pending: {
        label: "Pending",
        icon: AlertCircle,
        cls: "text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400",
        dot: "bg-amber-500",
    },
};

const priorityConfig = {
    high: { label: "High", cls: "text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400" },
    medium: { label: "Medium", cls: "text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400" },
    low: { label: "Low", cls: "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400" },
};

const summaryStats = [
    { label: "Total", value: "248", icon: FileText, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400" },
    { label: "In Progress", value: "12", icon: Wrench, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400" },
    { label: "Completed", value: "224", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400" },
    { label: "Pending", value: "12", icon: Clock, color: "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400" },
];

export default function TicketsPage() {
    return (
        <div className="space-y-8 animate-fade-in">

            {/* Page header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        Repair Tickets
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage and track all repair jobs in one place.
                    </p>
                </div>
                <Button asChild size="lg" className="rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow w-fit">
                    <Link href="/tickets/new">
                        <Plus className="w-4 h-4 mr-2" />
                        New Ticket
                    </Link>
                </Button>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {summaryStats.map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${color} shrink-0`}>
                            <Icon className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-foreground leading-none">{value}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search / Filter bar */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by customer, device, or ticket ID…"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                </div>
                <Button variant="outline" className="rounded-xl gap-2 shrink-0">
                    <Filter className="w-4 h-4" />
                    Filter
                </Button>
            </div>

            {/* Tickets table */}
            <div className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden">
                {/* Table header */}
                <div className="hidden sm:grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] gap-4 px-5 py-3 border-b border-border/40 bg-muted/30">
                    {["Customer", "Device / Issue", "Status", "Priority", "Updated", ""].map((h) => (
                        <p key={h} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {h}
                        </p>
                    ))}
                </div>

                {/* Rows */}
                {mockTickets.map((ticket, idx) => {
                    const s = statusConfig[ticket.status];
                    const p = priorityConfig[ticket.priority];
                    const StatusIcon = s.icon;
                    return (
                        <div
                            key={ticket.id}
                            className={`group flex flex-col sm:grid sm:grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] gap-2 sm:gap-4 items-start sm:items-center px-5 py-4 hover:bg-muted/30 transition-colors duration-150 ${idx !== mockTickets.length - 1 ? "border-b border-border/40" : ""
                                }`}
                        >
                            {/* Customer */}
                            <div className="flex items-center gap-2.5 min-w-0">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                                    {ticket.customer.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-foreground truncate">{ticket.customer}</p>
                                    <p className="text-xs font-mono text-muted-foreground/60">{ticket.id}</p>
                                </div>
                            </div>

                            {/* Device / Issue */}
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">{ticket.device}</p>
                                <p className="text-xs text-muted-foreground truncate">{ticket.issue}</p>
                            </div>

                            {/* Status */}
                            <div className="flex items-center">
                                <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${s.cls}`}>
                                    <StatusIcon className="w-3 h-3" />
                                    {s.label}
                                </span>
                            </div>

                            {/* Priority */}
                            <div className="flex items-center">
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.cls}`}>
                                    {p.label}
                                </span>
                            </div>

                            {/* Updated */}
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {ticket.updated}
                            </div>

                            {/* CTA */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-lg text-xs gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-primary hover:text-primary hover:bg-primary/10"
                            >
                                View <ArrowRight className="w-3 h-3" />
                            </Button>
                        </div>
                    );
                })}

                {/* Footer */}
                <div className="px-5 py-3 border-t border-border/40 bg-muted/20 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Showing 5 of 248 tickets</p>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary gap-1.5 rounded-lg text-xs">
                        <Link href="/tickets/all">
                            View all <ArrowRight className="w-3 h-3" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}