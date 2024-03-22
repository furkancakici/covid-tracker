import { useCallback } from 'react'
import WorldMap, { CountryContext } from 'react-svg-worldmap'

import { alpha2Code } from '@/constants'
import { alpha2ToAlpha3 } from '@/lib/helper'

const WorldMapChart = () => {
    const clickAction = useCallback(({ countryCode }: CountryContext) => {
        console.log(alpha2ToAlpha3(countryCode.toLowerCase()))
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
