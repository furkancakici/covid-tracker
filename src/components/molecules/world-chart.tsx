import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import WorldMap, { CountryContext } from 'react-svg-worldmap'

import { alpha2Code } from '@/constants'
import { alpha2ToAlpha3 } from '@/lib/helper'

const WorldMapChart = () => {
    const navigate = useNavigate()

    const clickAction = useCallback(({ countryCode }: CountryContext) => {
        const isoCode = alpha2ToAlpha3(countryCode.toLowerCase())
        navigate(`/country/${isoCode}`)
    }, [])

    const customTooltipText = useCallback(({ countryName }: CountryContext) => {
        return `${countryName}`
    }, [])

    return (
        <WorldMap
            color='#EA580B'
            backgroundColor='bg-background'
            size='xl'
            data={alpha2Code}
            onClickFunction={clickAction}
            tooltipTextFunction={customTooltipText}
        />
    )
}

export default WorldMapChart
