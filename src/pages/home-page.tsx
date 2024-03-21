import { ModeToggle } from '@/components/molecules/mode-toggle'
import WorldChart from '@/components/molecules/world-chart'
import Header from '@/components/organism/header'
import MainLayout from '@/pages/main-layout'
// import countryCode from '@/constants/country-code'

const HomePage = () => {
    return (
        <MainLayout>
            <Header />
            <ModeToggle />
            <WorldChart />
        </MainLayout>
    )
}

export default HomePage
