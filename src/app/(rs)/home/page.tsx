import React from "react";
import Link from "next/link";
import {
    Wrench,
    MonitorSmartphone,
    HardDrive,
    Shield,
    Cpu,
    Battery,
    ArrowRight,
    Plus,
    UserPlus,
    Clock,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    Star,
    Zap,
    HeadphonesIcon,
    FileText,
    UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({
    label,
    value,
    icon: Icon,
    color,
    delay,
}: {
    label: string;
    value: string;
    icon: React.ElementType;
    color: string;
    delay: string;
}) {
    return (
        <div
            className={`animate-fade-up ${delay} card-hover relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm`}
        >
            {/* Gradient blob */}
            <div
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${color} opacity-10 blur-xl`}
            />
            <div className="relative flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">{value}</p>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${color} bg-opacity-15 shrink-0`}>
                    <Icon className={`w-5 h-5`} />
                </div>
            </div>
        </div>
    );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({
    icon: Icon,
    title,
    description,
    price,
    delay,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    price: string;
    delay: string;
}) {
    return (
        <div
            className={`animate-fade-up ${delay} card-hover group relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    from {price}
                </span>
            </div>
            <div>
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

// ─── Activity Row ─────────────────────────────────────────────────────────────
function ActivityRow({
    id,
    customer,
    device,
    status,
    time,
}: {
    id: string;
    customer: string;
    device: string;
    status: "completed" | "in-progress" | "pending";
    time: string;
}) {
    const statusConfig = {
        completed: {
            label: "Completed",
            icon: CheckCircle2,
            cls: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400",
        },
        "in-progress": {
            label: "In Progress",
            icon: Wrench,
            cls: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400",
        },
        pending: {
            label: "Pending",
            icon: AlertCircle,
            cls: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400",
        },
    };

    const s = statusConfig[status];

    return (
        <div className="flex items-center gap-3 py-3 border-b border-border/40 last:border-0 group hover:bg-muted/40 -mx-2 px-2 rounded-lg transition-colors duration-150">
            {/* Avatar */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                {customer.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{customer}</p>
                <p className="text-xs text-muted-foreground truncate">{device}</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
                <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${s.cls}`}>
                    <s.icon className="w-3 h-3" />
                    {s.label}
                </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                <Clock className="w-3 h-3" />
                {time}
            </div>
            <span className="text-xs font-mono text-muted-foreground/60 hidden lg:block">{id}</span>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
    const stats = [
        { label: "Total Tickets", value: "248", icon: FileText, color: "bg-blue-500", delay: "animate-delay-100" },
        { label: "Open Tickets", value: "12", icon: AlertCircle, color: "bg-amber-500", delay: "animate-delay-200" },
        { label: "Customers", value: "94", icon: UsersRound, color: "bg-violet-500", delay: "animate-delay-300" },
        { label: "Completed This Month", value: "37", icon: TrendingUp, color: "bg-emerald-500", delay: "animate-delay-400" },
    ];

    const services = [
        { icon: MonitorSmartphone, title: "Screen Replacement", description: "Cracked or damaged screens replaced with OEM-quality parts in as little as 1 hour.", price: "$49", delay: "animate-delay-100" },
        { icon: HardDrive, title: "Data Recovery", description: "Recover photos, documents & files from failed or corrupted hard drives and SSDs.", price: "$79", delay: "animate-delay-200" },
        { icon: Shield, title: "Virus & Malware Removal", description: "Deep system scan, threat removal, and security hardening to keep you safe.", price: "$39", delay: "animate-delay-300" },
        { icon: Cpu, title: "Hardware Upgrade", description: "RAM, SSD, GPU and CPU upgrades to breathe new life into your existing machine.", price: "$29", delay: "animate-delay-100" },
        { icon: Battery, title: "Battery Replacement", description: "Laptop and phone batteries replaced quickly with high-capacity cells.", price: "$35", delay: "animate-delay-200" },
        { icon: Wrench, title: "General Diagnostics", description: "Full system diagnosis with detailed report — no fix, no charge guarantee.", price: "$19", delay: "animate-delay-300" },
    ];

    const recentActivity = [
        { id: "#TK-0248", customer: "James Miller", device: "Dell XPS 15 – Screen Replacement", status: "completed" as const, time: "2h ago" },
        { id: "#TK-0247", customer: "Sarah Chen", device: "MacBook Pro – Virus Removal", status: "in-progress" as const, time: "4h ago" },
        { id: "#TK-0246", customer: "Robert Singh", device: "HP Pavilion – HDD → SSD Upgrade", status: "in-progress" as const, time: "5h ago" },
        { id: "#TK-0245", customer: "Emily Watson", device: "Lenovo ThinkPad – Battery Replace", status: "completed" as const, time: "1d ago" },
        { id: "#TK-0244", customer: "Carlos Lopez", device: "Custom PC – Data Recovery", status: "pending" as const, time: "1d ago" },
    ];

    return (
        <div className="space-y-12">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm px-6 sm:px-10 py-12 sm:py-16 hero-gradient">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-56 h-56 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />

                <div className="relative max-w-2xl">
                    {/* Badge pill */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary mb-5 animate-fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
                        Now serving 94+ customers &mdash; Trusted. Fast. Reliable.
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight animate-fade-up animate-delay-100">
                        Expert Computer<br />
                        <span className="gradient-text">Repair &amp; Support</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up animate-delay-200">
                        From screen replacements to full system rebuilds, we get your devices back in top shape.
                        Same-day service available. No fix — no charge.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 animate-fade-up animate-delay-300">
                        <Button asChild size="lg" className="rounded-xl shadow-md shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                            <Link href="/tickets">
                                <Plus className="w-4 h-4 mr-1.5" />
                                New Repair Ticket
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-xl">
                            <Link href="/customers">
                                <UserPlus className="w-4 h-4 mr-1.5" />
                                Add Customer
                            </Link>
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-8 flex flex-wrap items-center gap-5 animate-fade-up animate-delay-400 text-sm text-muted-foreground">
                        {[
                            { icon: Zap, text: "Same-day service" },
                            { icon: Star, text: "5-star rated" },
                            { icon: HeadphonesIcon, text: "Free diagnostics" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-1.5">
                                <Icon className="w-4 h-4 text-primary" />
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats ───────────────────────────────────────────────────── */}
            <section>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </div>
            </section>

            {/* ── Quick Actions ───────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Quick Actions</h2>
                        <p className="text-sm text-muted-foreground">Jump right into common tasks</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                        href="/tickets"
                        className="card-hover group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:border-primary/40 transition-colors duration-200"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                            <Plus className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-foreground">Create Repair Ticket</p>
                            <p className="text-sm text-muted-foreground">Log a new device for service</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    <Link
                        href="/customers"
                        className="card-hover group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:border-primary/40 transition-colors duration-200"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 shrink-0">
                            <UserPlus className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-foreground">Add New Customer</p>
                            <p className="text-sm text-muted-foreground">Register a new client profile</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-violet-500 transition-colors duration-200 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                </div>
            </section>

            {/* ── Services ────────────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Our Services</h2>
                        <p className="text-sm text-muted-foreground">Professional repairs at competitive prices</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </div>
            </section>

            {/* ── Recent Activity ─────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
                        <p className="text-sm text-muted-foreground">Latest repair tickets and status updates</p>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary gap-1.5 rounded-lg">
                        <Link href="/tickets">
                            View all <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </Button>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card shadow-sm px-4 py-2 animate-fade-up animate-delay-100">
                    {recentActivity.map((item) => (
                        <ActivityRow key={item.id} {...item} />
                    ))}
                </div>
            </section>

        </div>
    );
}
