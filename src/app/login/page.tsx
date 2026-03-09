import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Zap, Clock, Star } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background flex">

            {/* ─── Left panel (branding) ─────────────────────────── */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 relative overflow-hidden bg-primary text-primary-foreground p-12">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                {/* Logo */}
                <div className="relative flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm">
                        <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold text-lg leading-none">Dave&apos;s Repair</p>
                        <p className="text-xs text-white/60 font-medium tracking-wide uppercase mt-0.5">Computer Shop</p>
                    </div>
                </div>

                {/* Center content */}
                <div className="relative space-y-8">
                    <div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
                            Professional<br />Tech Support<br />You Can Trust
                        </h1>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            Manage repair tickets, track customers, and grow your shop — all from one powerful dashboard.
                        </p>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-3">
                        {[
                            { icon: Zap, text: "Same-day repair tracking" },
                            { icon: Shield, text: "Secure customer data management" },
                            { icon: Clock, text: "Real-time ticket status updates" },
                            { icon: Star, text: "5-star rated by 94+ customers" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/15 shrink-0">
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-sm text-white/80 font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <p className="relative text-xs text-white/40">
                    © {new Date().getFullYear()} Dave&apos;s Computer Repair Shop. All rights reserved.
                </p>
            </div>

            {/* ─── Right panel (login form) ──────────────────────── */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-sm space-y-8 animate-fade-up">

                    {/* Mobile logo */}
                    <div className="flex lg:hidden items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                            <Wrench className="w-4.5 h-4.5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-tight">Dave&apos;s Repair</p>
                            <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">Computer Shop</p>
                        </div>
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            Welcome back
                        </h2>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                            Sign in to access your repair shop dashboard.
                        </p>
                    </div>

                    {/* Sign in card */}
                    <div className="rounded-2xl border border-border/60 bg-card shadow-sm p-6 space-y-5">
                        <div className="text-center space-y-2">
                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto">
                                <Shield className="w-7 h-7" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Secure Authentication</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Your account is protected with enterprise-grade security via Kinde Auth.
                            </p>
                        </div>

                        <Button
                            asChild
                            size="lg"
                            className="w-full rounded-xl shadow-md shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                        >
                            <LoginLink>
                                Sign in to Dashboard
                            </LoginLink>
                        </Button>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                        Having trouble signing in?{" "}
                        <a href="mailto:support@davesrepair.com" className="text-primary hover:underline font-medium">
                            Contact support
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}