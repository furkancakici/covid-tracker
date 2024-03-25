import { useCallback } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import WorldMap, { CountryContext } from 'react-svg-worldmap'

import { alpha2Code } from '@/constants'
import { alpha2ToAlpha3 } from '@/lib/helper'

const WorldMapChart = () => {
    const navigate = useNavigate()

    const clickAction = useCallback(
        ({ countryCode }: CountryContext) => {
            const isoCode = alpha2ToAlpha3(countryCode.toLowerCase())
            const searchParams = { 'iso-code': isoCode ?? 'USA', date: '2020-06-16' }
            navigate({ pathname: `/country`, search: `?${createSearchParams(searchParams)}` })
        },
        [navigate]
    )

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
