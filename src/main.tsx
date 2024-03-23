import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import { TooltipProvider } from '@/components/atoms/ui/tooltip'
import { ThemeProvider } from '@/components/molecules/theme-provider'

import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TooltipProvider>
            <ThemeProvider defaultTheme='dark' storageKey='theme'>
                <App />
            </ThemeProvider>
        </TooltipProvider>
    </React.StrictMode>
)
