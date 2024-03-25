import { useCallback } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import WorldMap, { CountryContext } from 'react-svg-worldmap'

import { alpha2Code } from '@/constants'
import { alpha2ToAlpha3 } from '@/lib/helper'
import { useAppSelector } from '@/redux'

const WorldMapChart = () => {
    const navigate = useNavigate()
    const date = useAppSelector(state => state.report.date)

    const clickAction = useCallback(
        ({ countryCode }: CountryContext) => {
            const isoCode = alpha2ToAlpha3(countryCode.toLowerCase())
            const searchParams = { 'iso-code': isoCode ?? 'USA', date: date.length > 0 ? date : '2020-06-16' }

            navigate({ pathname: `/country`, search: `?${createSearchParams(searchParams)}` })
        },
        [navigate, date]
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
