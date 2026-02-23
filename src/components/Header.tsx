import React from 'react'
import { HomeIcon, File, UsersRound } from "lucide-react"
import Link from 'next/link'
import NavButton from '@/components/NabButton'
import { ModeToggle } from '@/components/ModeToggle'
export default function Header() {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Dave's Computer Repair Shop</h1>
            <div className='flex items-center gap-2'>
                <NavButton Icon={HomeIcon} label="Home" href="/home" />
                <NavButton Icon={File} label="Tickets" href="/tickets" />
                <NavButton Icon={UsersRound} label="Customers" href="/customers" />
                <ModeToggle />

            </div>
        </div>
    )
}
