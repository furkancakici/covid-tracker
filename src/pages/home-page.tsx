import DatePicker from '@/components/molecules/date-picker'
import WorldChart from '@/components/molecules/world-chart'
import InformationCard from '@/components/organism/information-card'

export type DateType = string | null | Date
export type DateRangeType = {
    startDate: DateType
    endDate: DateType
}

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
