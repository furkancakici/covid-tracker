import { useEffect } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/atoms/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/atoms/ui/tooltip'
import { DataTable } from '@/components/molecules/data-table'
import DatePicker from '@/components/molecules/date-picker'
import useCountryInfo from '@/hooks/use-country-info'
import useSearchQuery from '@/hooks/use-search-query'
import { useAppDispatch, useAppSelector } from '@/redux'
import { getReportsFetch } from '@/redux/slices/report-slice'
import { Datum } from '@/types/reports-type'
import { ColumnDef } from '@tanstack/react-table'

const CountryDetailPage = () => {
    const query = useSearchQuery()
    const { t } = useTranslation()
    const date = useAppSelector(state => state.report.date)

    const isoCode = query.get('iso-code')
    const { countryName, countryFlag } = useCountryInfo(isoCode!)

    const { data, isLoading, error } = useAppSelector(state => state.report)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getReportsFetch({ iso: isoCode ?? 'USA', date: date || '2020-06-16' }))
    }, [isoCode, dispatch, date])

    const columns: ColumnDef<Datum>[] = [
        {
            accessorKey: 'region',
            header: t('report_table.region'),
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
            header: t('report_table.confirmed')
        },
        {
            accessorKey: 'deaths',
            header: t('report_table.deaths')
        },
        {
            accessorKey: 'recovered',
            header: t('report_table.recovered')
        },
        {
            accessorKey: 'confirmed_diff',
            header: t('report_table.confirmed_diff')
        },
        {
            accessorKey: 'deaths_diff',
            header: t('report_table.deaths_diff')
        },
        {
            accessorKey: 'recovered_diff',
            header: t('report_table.recovered_diff')
        },
        {
            accessorKey: 'active',
            header: t('report_table.active')
        },
        {
            accessorKey: 'active_diff',
            header: t('report_table.active_diff')
        },
        {
            accessorKey: 'fatality_rate',
            header: t('report_table.fatality_rate')
        },
        {
            accessorKey: 'last_update',
            header: t('report_table.last_update'),
            cell: ({ row }) => dayjs(row.original.last_update).format('YYYY-MM-DD')
        },
        {
            accessorKey: 'date',
            header: t('report_table.date'),
            cell: ({ row }) => dayjs(row.original.date).format('YYYY-MM-DD')
        }
    ]

    return (
        <>
            <div className='flex flex-col sm:flex-row bg-secondary h-full sm:h-12 mb-2 rounded-md justify-center items-center gap-x-2'>
                <div className='flex justify-center items-center gap-1'>
                    <h2 className='text-sm sm:text-base font-bold'>{t('country_details.table_title')}:</h2>
                    {countryName}
                    <img src={countryFlag} alt='country-flag' />
                </div>
                <span className='hidden sm:block'>-</span>
                <div className='flex items-center justify-center p-1 gap-1'>
                    <h2 className='text-sm sm:text-base font-bold'>{t('table_date')}: </h2>
                    <DatePicker />
                </div>
            </div>
            {isLoading ? <PageSkeleton /> : <DataTable columns={columns} data={data} />}
            {error && <p>no data</p>}
        </>
    )
}

export default CountryDetailPage

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
