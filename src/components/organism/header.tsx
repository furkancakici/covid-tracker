import { Link, NavLink } from 'react-router-dom'

import { ModeToggle } from '@/components/molecules/mode-toggle'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 max-w-screen-2xl items-center'>
                <div className='flex mr-4 justify-center items-center'>
                    <Link to='/'>
                        <div className='flex items-center mr-6 space-x-2'>
                            <img src='/site-logo.png' alt='covid-tracker site logo' className='size-10' />
                            <span className='hidden sm:flex text-sm font-bold'>Covid Tracker</span>
                        </div>
                    </Link>
                    <ul className='flex justify-center items-center gap-4 [&_a.active]:font-bold'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='reports'>Reports</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-1 justify-end'>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
