import WorldMap from 'react-svg-worldmap'

import { ModeToggle } from '@/components/molecules/mode-toggle'
import countryCode from '@/constants/country-code'

const HomePage = () => {
    return (
        <div className='max-w-4xl grid place-items-center'>
            <ModeToggle />
            <WorldMap
                color='#EA580B'
                tooltipBgColor='#FFFFFF'
                tooltipTextColor='#000000'
                backgroundColor='transparent'
                borderColor='#692805'
                title='Covid-19 Tracker World Map'
                size='xl'
                data={countryCode}
            />
        </div>
    )
}

export default HomePage
