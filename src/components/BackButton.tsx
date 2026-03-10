"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
    title: string,
}

export function BackButton({ title }: Props) {
    const router = useRouter();
    return (
        <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {title}
        </Button>
    );
}