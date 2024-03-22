import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import { ThemeProvider } from '@/components/molecules/theme-provider'

import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='theme'>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
