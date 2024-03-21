import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return <div className='relative flex min-h-screen flex-col bg-background'>{children}</div>
}

export default MainLayout
