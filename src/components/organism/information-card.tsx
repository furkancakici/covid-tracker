import { Activity, FileSliders, HeartPulse, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card'

const InformationCard = () => {
    return (
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Toplam Vaka</CardTitle>
                    <FileSliders className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>1,426,096</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Toplam Ölüm</CardTitle>
                    <Users className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>81,865</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>İyileşen Hasta</CardTitle>
                    <HeartPulse className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>300,054</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Aktif Vaka</CardTitle>
                    <Activity className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>1,044,177</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default InformationCard
