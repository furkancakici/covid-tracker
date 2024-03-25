import DatePicker from '@/components/molecules/date-picker'
import WorldChart from '@/components/molecules/world-chart'
import InformationCard from '@/components/organism/information-card'

const HomePage = () => {
    return (
        <div className='flex flex-col items-center'>
            <DatePicker />
            <InformationCard />
            <WorldChart />
        </div>
    )
}

export default HomePage
