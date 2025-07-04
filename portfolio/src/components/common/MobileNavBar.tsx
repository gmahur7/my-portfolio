'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import { links } from './NavBar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const MobileNavBar = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-5 text-center text-2xl '>
                    <Link href='/'>
                        <h1 className='text-4xl text-primary font-semibold'>Gaurav <span className='text-accent'>Singh</span></h1></Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-5'>
                    {
                        links.map((link, index) => {
                            return <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all text-primary`} href={`${link.path}`} key={index}>{link.name}</Link>
                        })
                    }
                </nav>
                <div className='flex justify-center mt-5'>
                    <ThemeToggle />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavBar