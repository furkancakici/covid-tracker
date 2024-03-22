import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

const MainLayout = () => {
    return (
        <div className='relative flex flex-col min-h-screen bg-background'>
            <Header />
            <div className='container max-w-screen-2xl flex-1 py-4'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
