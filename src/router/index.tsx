import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayoutPage from '@/pages/main-layout-page'

const CountryDetailPage = lazy(() => import('@/pages/country-detail-page'))
const HomePage = lazy(() => import('@/pages/home-page'))
const ReportsPage = lazy(() => import('@/pages/reports-page'))

export const router = createBrowserRouter([
    {
        element: <MainLayoutPage />,
        errorElement: <div>Bir hata oluştu. </div>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/country',
                element: <CountryDetailPage />
            },
            {
                path: '/reports',
                element: <ReportsPage />
            }
        ]
    }
])
