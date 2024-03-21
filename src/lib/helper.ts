import { countryCode } from '@/constants'

export const alpha2ToAlpha3 = (alpha2: string) => {
    for (let i = 0; i < countryCode.length; i++) {
        if (countryCode[i][0] === alpha2) {
            return countryCode[i][1]
        }
    }

    return null
}

export const formattedNumber = (num: number | undefined, digits: number) => {
    if (typeof num === 'undefined') return ''
    const magnitude = [
        { value: 1e9, text: ' billion ' },
        { value: 1e6, text: ' million ' },
        { value: 1e3, text: ' thousand ' },
        { value: 1, text: '' }
    ].find(magnitude => num >= magnitude.value)
    if (magnitude) {
        return (
            (num / magnitude.value).toFixed(digits).replace(/\.0+$|(?<number>\.[0-9]*[1-9])0+$/, '$1') + magnitude.text
        )
    }
    return ''
}
