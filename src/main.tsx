import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import App from '@/App.tsx'
import { TooltipProvider } from '@/components/atoms/ui/tooltip'
import { ThemeProvider } from '@/components/molecules/theme-provider'

import i18n from './i18n'
import { store } from './redux'

import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n} />
            <TooltipProvider>
                <ThemeProvider defaultTheme='dark' storageKey='theme'>
                    <App />
                </ThemeProvider>
            </TooltipProvider>
        </Provider>
    </React.StrictMode>
)
