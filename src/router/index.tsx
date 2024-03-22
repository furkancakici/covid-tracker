import { createBrowserRouter } from 'react-router-dom'

import CountryDetail from '@/pages/country-detail'
import HomePage from '@/pages/home-page'
import MainLayout from '@/pages/main-layout'
import ReportsPage from '@/pages/reports-page'

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
            },
            {
                path: '/reports',
                element: <ReportsPage />
            }
        ]
    }
])

export default router
