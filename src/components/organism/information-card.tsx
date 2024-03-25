import { useEffect } from 'react'
import { Activity, FileSliders, HeartPulse, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card'
import { Skeleton } from '@/components/atoms/ui/skeleton'
import { useAppDispatch, useAppSelector } from '@/redux'
import { getTotalReportsFetch } from '@/redux/slices/total-report-slice'

const PageSkeleton = () => (
    <div className='flex flex-col space-y-3'>
        <Skeleton className='h-7 mt-1 w-full rounded-xl' />
    </div>
)

const InformationCard = () => {
    const date = useAppSelector(state => state.report.date)
    const { data, isLoading } = useAppSelector(state => state.totalReport)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTotalReportsFetch(date))
    }, [date, dispatch])

    return (
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Toplam Vaka</CardTitle>
                    <FileSliders className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {isLoading ? <PageSkeleton /> : data?.confirmed?.toLocaleString('tr') || 0}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Toplam Ölüm</CardTitle>
                    <Users className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {isLoading ? <PageSkeleton /> : data?.deaths?.toLocaleString('tr') || 0}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>İyileşen Hasta</CardTitle>
                    <HeartPulse className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {isLoading ? <PageSkeleton /> : data?.recovered?.toLocaleString('tr') || 0}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Aktif Vaka</CardTitle>
                    <Activity className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {isLoading ? <PageSkeleton /> : data?.active?.toLocaleString('tr') || 0}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default InformationCard
