import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@/App.tsx'
import { TooltipProvider } from '@/components/atoms/ui/tooltip'
import { ThemeProvider } from '@/components/molecules/theme-provider'

import { store } from './redux'

import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <TooltipProvider>
                <ThemeProvider defaultTheme='dark' storageKey='theme'>
                    <App />
                </ThemeProvider>
            </TooltipProvider>
        </Provider>
    </React.StrictMode>
)
