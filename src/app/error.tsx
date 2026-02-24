"use client"

import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        Sentry.captureException(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 p-8 text-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
                <p className="text-muted-foreground max-w-md">
                    {error.message || "An unexpected error occurred. Our team has been notified."}
                </p>
                {error.digest && (
                    <p className="text-xs text-muted-foreground mt-1">
                        Error ID: <span className="font-mono">{error.digest}</span>
                    </p>
                )}
            </div>
            <div className="flex gap-4">
                <Button onClick={reset}>Try Again</Button>
                <Button variant="outline" asChild>
                    <Link href="/home">Go Home</Link>
                </Button>
            </div>
        </div>
    )
}
