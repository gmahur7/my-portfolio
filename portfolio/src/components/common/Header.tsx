import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import { Button } from '../ui/button'
import MobileNavBar from './MobileNavBar'
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
    return (
        <header className='py-8 md:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center gap-2 px-4">
                <Link href="/">
                    <h1 className='text-4xl md:text-3xl lg:text-4xl text-primary dark:text-primary font-semibold'>Gaurav <span className='text-accent'>Singh</span></h1>
                </Link>
                <div className='hidden md:flex items-center gap-4 lg:gap-8'>
                    <NavBar />
                    <Link href='/contact'><Button>Hire Me</Button></Link>
                </div>
                <div className='hidden md:block'>
                    <ThemeToggle />
                </div>
                <div className='md:hidden'>
                    <MobileNavBar />
                    {/* <Link href='/contact'><Button>Hire Me</Button></Link> */}
                </div>
            </div>
        </header>
    )
}

export default Header