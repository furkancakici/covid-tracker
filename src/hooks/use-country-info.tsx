import { useEffect, useState } from 'react'

import { alpha3ToAlpha2, alpha3ToCountryName } from '@/lib/helper'

function useCountryInfo(isoCode: string) {
    const [countryName, setCountryName] = useState('')
    const [countryIso2, setCountryIso2] = useState('')
    const [countryFlag, setCountryFlag] = useState('')

    useEffect(() => {
        const fetchCountryInfo = () => {
            const countryCode = isoCode ?? 'USA'
            const iso2 = alpha3ToAlpha2(countryCode)
            const name = alpha3ToCountryName(countryCode)
            const flag = `https://flagsapi.com/${iso2.toUpperCase()}/flat/32.png`

            setCountryName(name!)
            setCountryIso2(iso2!)
            setCountryFlag(flag)
        }

        fetchCountryInfo()
    }, [isoCode])

    return { countryName, countryIso2, countryFlag }
}

export default useCountryInfo
