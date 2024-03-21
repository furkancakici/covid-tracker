import { useCallback } from 'react'
import WorldMap, { CountryContext } from 'react-svg-worldmap'

import { alpha2Code } from '@/constants'
import { alpha2ToAlpha3 } from '@/lib/helper'

const WorldMapChart = () => {
    const clickAction = useCallback(({ countryCode }: CountryContext) => {
        console.log(alpha2ToAlpha3(countryCode.toLowerCase()))
    }, [])

    // console.log(state.iso, state.val, state.cName)

    return (
        <WorldMap
            color='#EA580B'
            backgroundColor='bg-background'
            title='Top 10 Populous Countries'
            value-suffix='people'
            size='lg'
            data={alpha2Code}
            onClickFunction={clickAction}
        />
    )
}

export default WorldMapChart
