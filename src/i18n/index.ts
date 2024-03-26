import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import tr from './tr.json'

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            tr: {
                translation: tr
            },
            en: {
                translation: en
            }
        },
        lng: 'tr',
        fallbackLng: 'tr',

        interpolation: {
            escapeValue: false
        }
    })

export default i18n
