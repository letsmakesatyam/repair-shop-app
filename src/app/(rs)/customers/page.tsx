import React from "react";
import Link from "next/link";
import {
    UserPlus,
    UsersRound,
    Search,
    Filter,
    Mail,
    Phone,
    Clock,
    ArrowRight,
    FileText,
    Star,
    MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCustomers = [
    {
        id: "CU-001",
        name: "James Miller",
        email: "james.miller@email.com",
        phone: "+1 (555) 012-3456",
        tickets: 4,
        lastVisit: "2h ago",
        status: "active" as const,
        rating: 5,
    },
    {
        id: "CU-002",
        name: "Sarah Chen",
        email: "sarah.chen@email.com",
        phone: "+1 (555) 234-5678",
        tickets: 2,
        lastVisit: "4h ago",
        status: "active" as const,
        rating: 5,
    },
    {
        id: "CU-003",
        name: "Robert Singh",
        email: "r.singh@email.com",
        phone: "+1 (555) 345-6789",
        tickets: 1,
        lastVisit: "5h ago",
        status: "active" as const,
        rating: 4,
    },
    {
        id: "CU-004",
        name: "Emily Watson",
        email: "emily.watson@email.com",
        phone: "+1 (555) 456-7890",
        tickets: 7,
        lastVisit: "1d ago",
        status: "active" as const,
        rating: 5,
    },
    {
        id: "CU-005",
        name: "Carlos Lopez",
        email: "carlos.l@email.com",
        phone: "+1 (555) 567-8901",
        tickets: 3,
        lastVisit: "1d ago",
        status: "inactive" as const,
        rating: 4,
    },
    {
        id: "CU-006",
        name: "Priya Sharma",
        email: "priya.sharma@email.com",
        phone: "+1 (555) 678-9012",
        tickets: 2,
        lastVisit: "3d ago",
        status: "active" as const,
        rating: 5,
    },
];

const avatarColors = [
    "bg-blue-500",
    "bg-violet-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-cyan-500",
];

export default function CustomersPage() {
    return (
        <div className="space-y-8 animate-fade-in">

            {/* Page header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        Customers
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        View and manage all registered customer profiles.
                    </p>
                </div>
                <Button
                    asChild
                    size="lg"
                    className="rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow w-fit"
                >
                    <Link href="/customers/new">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Customer
                    </Link>
                </Button>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { label: "Total Customers", value: "94", icon: UsersRound, cls: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400" },
                    { label: "Active", value: "81", icon: Star, cls: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400" },
                    { label: "Avg. Tickets", value: "2.6", icon: FileText, cls: "text-violet-600 bg-violet-50 dark:bg-violet-950/40 dark:text-violet-400" },
                ].map(({ label, value, icon: Icon, cls }) => (
                    <div key={label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${cls} shrink-0`}>
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
                        placeholder="Search by name, email, or phone…"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                </div>
                <Button variant="outline" className="rounded-xl gap-2 shrink-0">
                    <Filter className="w-4 h-4" />
                    Filter
                </Button>
            </div>

            {/* Customer cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockCustomers.map((customer, idx) => (
                    <div
                        key={customer.id}
                        className={`card-hover animate-fade-up animate-delay-${(idx % 4 + 1) * 100} group relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:border-primary/30 transition-colors duration-200`}
                    >
                        {/* Status badge */}
                        <span
                            className={`absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full ${customer.status === "active"
                                    ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400"
                                    : "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400"
                                }`}
                        >
                            {customer.status === "active" ? "● Active" : "● Inactive"}
                        </span>

                        {/* Avatar + Name */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex items-center justify-center w-11 h-11 rounded-full text-white text-base font-bold shrink-0 shadow-md ${avatarColors[idx % avatarColors.length]
                                    }`}
                            >
                                {customer.name.charAt(0)}
                            </div>
                            <div className="min-w-0 pr-10">
                                <p className="font-semibold text-foreground text-sm truncate">{customer.name}</p>
                                <p className="text-xs text-muted-foreground/70 font-mono">{customer.id}</p>
                            </div>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Mail className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Phone className="w-3.5 h-3.5 shrink-0" />
                                <span>{customer.phone}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border/40" />

                        {/* Footer row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <FileText className="w-3.5 h-3.5" />
                                    {customer.tickets} ticket{customer.tickets !== 1 ? "s" : ""}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {customer.lastVisit}
                                </span>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-lg h-7 w-7 p-0 text-muted-foreground hover:text-primary hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-150"
                            >
                                <MoreHorizontal className="w-4 h-4" />
                                <span className="sr-only">Options</span>
                            </Button>
                        </div>

                        {/* Hover CTA */}
                        <Link
                            href={`/customers/${customer.id}`}
                            className="absolute inset-0 rounded-2xl pointer-events-all"
                            aria-label={`View ${customer.name}`}
                        />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-muted-foreground">Showing 6 of 94 customers</p>
                <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary gap-1.5 rounded-lg">
                    <Link href="/customers/all">
                        View all <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
