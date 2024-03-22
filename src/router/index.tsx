import { createBrowserRouter } from 'react-router-dom'

import CountryDetail from '@/pages/country-detail'
import HomePage from '@/pages/home-page'
import MainLayout from '@/pages/main-layout'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/country/:id',
                element: <CountryDetail />
            }
        ]
    }
])

export default router
