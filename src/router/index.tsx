import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayoutPage from '@/pages/main-layout-page'

const HomePage = lazy(() => import('@/pages/home-page'))
const CountryDetailPage = lazy(() => import('@/pages/country-detail-page'))
const ReportsPage = lazy(() => import('@/pages/reports-page'))

const router = createBrowserRouter([
    {
        element: <MainLayoutPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/country/:id',
                element: <CountryDetailPage />
            },
            {
                path: '/reports',
                element: <ReportsPage />
            }
        ]
    }
])

export default router
