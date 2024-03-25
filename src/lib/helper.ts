import { countryAlpha2Code } from '@/constants'

export const alpha2ToAlpha3 = (alpha2: string) => {
    for (let i = 0; i < countryAlpha2Code.length; i++) {
        if (countryAlpha2Code[i][0] === alpha2) {
            return countryAlpha2Code[i][1]
        }
    }

    return null
}

export const alpha3ToAlpha2 = (alpha3: string) => {
    for (let i = 0; i < countryAlpha2Code.length; i++) {
        if (countryAlpha2Code[i][1] === alpha3) {
            return countryAlpha2Code[i][0]
        }
    }

    return null
}

export const alpha3ToCountryName = (alpha3: string) => {
    for (let i = 0; i < countryAlpha2Code.length; i++) {
        if (countryAlpha2Code[i][1] === alpha3) {
            return countryAlpha2Code[i][2]
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
