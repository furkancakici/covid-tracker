import { Link } from 'react-router-dom'

import { ModeToggle } from '@/components/molecules/mode-toggle'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 max-w-screen-2xl items-center my-2'>
                <div className='flex mr-4 justify-center items-center'>
                    <div className='flex items-center mr-6 space-x-2'>
                        <img src='/site-logo.png' alt='covid-tracker site logo' className='size-12' />
                        <span className='hidden sm:flex text-sm font-bold'>Covid Tracker</span>
                    </div>
                    <ul className='flex justify-center items-center gap-4'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='reports'>Reports</Link>
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
