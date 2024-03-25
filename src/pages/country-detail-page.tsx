import { useEffect } from 'react'
import dayjs from 'dayjs'

import { Skeleton } from '@/components/atoms/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/atoms/ui/tooltip'
import { DataTable } from '@/components/molecules/data-table'
import useSearchQuery from '@/hooks/use-search-query'
import { useAppDispatch, useAppSelector } from '@/redux'
import { getReportsFetch } from '@/redux/slices/report-slice'
import { Datum } from '@/types/reports-type'
import { ColumnDef } from '@tanstack/react-table'

const columns: ColumnDef<Datum>[] = [
    {
        accessorKey: 'region',
        header: 'Region',
        cell: ({ row }) => (
            <>
                <Tooltip>
                    <TooltipTrigger>
                        {(row.original.region.province.length >= 22
                            ? row.original.region.province.substring(0, 22).concat('...')
                            : row.original.region.province) || 'N/A'}
                    </TooltipTrigger>
                    <TooltipContent>{row.original.region.province}</TooltipContent>
                </Tooltip>
            </>
        )
    },
    {
        accessorKey: 'confirmed',
        header: 'Confirmed'
    },
    {
        accessorKey: 'deaths',
        header: 'Deaths'
    },
    {
        accessorKey: 'recovered',
        header: 'Recovered'
    },
    {
        accessorKey: 'confirmed_diff',
        header: 'Confirmed Diff'
    },
    {
        accessorKey: 'deaths_diff',
        header: 'Deaths Diff'
    },
    {
        accessorKey: 'recovered_diff',
        header: 'Recovered Diff'
    },
    {
        accessorKey: 'active',
        header: 'Active'
    },
    {
        accessorKey: 'active_diff',
        header: 'Active Diff'
    },
    {
        accessorKey: 'fatality_rate',
        header: 'Fatality Rate'
    },
    {
        accessorKey: 'last_update',
        header: 'Last Update',
        cell: ({ row }) => dayjs(row.original.last_update).format('DD-MM-YYYY')
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }) => dayjs(row.original.date).format('DD-MM-YYYY')
    }
]

const PageSkeleton = () => (
    <div className='flex flex-col space-y-3'>
        <Skeleton className='h-9 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
        <Skeleton className='h-7 w-full rounded-xl' />
    </div>
)

const CountryDetailPage = () => {
    const query = useSearchQuery()
    const isoCode = query.get('iso-code')
    const date = query.get('date')

    const { data, isLoading, error } = useAppSelector(state => state.report)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getReportsFetch({ iso: isoCode ?? 'USA', date: date ?? '2020-06-16' }))
    }, [isoCode, date, dispatch])

    return (
        <>
            <h2 className='mb-2'>Covid Ülke Detayları</h2>
            {isLoading ? <PageSkeleton /> : <DataTable columns={columns} data={data} />}
            {error && <p>no data</p>}
        </>
    )
}

export default CountryDetailPage
