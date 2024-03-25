import { useEffect } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/atoms/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/atoms/ui/tooltip'
import { DataTable } from '@/components/molecules/data-table'
import useSearchQuery from '@/hooks/use-search-query'
import { alpha3ToAlpha2, alpha3ToCountryName } from '@/lib/helper'
import { useAppDispatch, useAppSelector } from '@/redux'
import { getReportsFetch } from '@/redux/slices/report-slice'
import { Datum } from '@/types/reports-type'
import { ColumnDef } from '@tanstack/react-table'

const CountryDetailPage = () => {
    const { t } = useTranslation()

    const query = useSearchQuery()

    const isoCode = query.get('iso-code')
    const date = query.get('date')

    const countryName = alpha3ToCountryName(isoCode ?? 'USA')
    const countryIso2 = alpha3ToAlpha2(isoCode ?? 'US')
    const countryFlag = `https://flagsapi.com/${countryIso2?.toUpperCase()}/flat/32.png`

    const { data, isLoading, error } = useAppSelector(state => state.report)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getReportsFetch({ iso: isoCode ?? 'USA', date: date ?? '2020-06-16' }))
    }, [isoCode, date, dispatch])

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
            header: t('report_table.confirmed'),
            cell: ({ row }) => (
                <>
                    <Tooltip>
                        <TooltipTrigger>
                            {(row.original.confirmed.length >= 22
                                ? row.original.confirmed.substring(0, 22).concat('...')
                                : row.original.confirmed) || 'N/A'}
                        </TooltipTrigger>
                        <TooltipContent>{row.original.confirmed}</TooltipContent>
                    </Tooltip>
                </>
            )
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
            cell: ({ row }) => dayjs(row.original.last_update).format('DD-MM-YYYY')
        },
        {
            accessorKey: 'date',
            header: t('report_table.date'),
            cell: ({ row }) => dayjs(row.original.date).format('DD-MM-YYYY')
        }
    ]

    return (
        <>
            <div className='flex bg-secondary h-10 rounded-md justify-center items-center gap-x-2'>
                <h2 className='font-bold'>
                    {t('country_details.table_title')}: {countryName}
                </h2>
                <img src={countryFlag} alt='country-flag' />
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
