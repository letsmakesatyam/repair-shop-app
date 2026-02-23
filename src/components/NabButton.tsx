import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavButtonProps {
    Icon: LucideIcon;
    label: string;
    href: string;

}

export default function NavButton({ Icon, label, href }: NavButtonProps) {
    return (
        <Button variant={"default"} size="icon-sm" asChild>
            {href ? (
                <Link href={href}>
                    <Icon />
                    <span className="sr-only">{label}</span>
                </Link>
            ) : (
                <button>
                    <Icon />
                    <span className="sr-only">{label}</span>
                </button>
            )}
        </Button>
    )
}