import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/atoms/ui/tooltip'
import { DataTable } from '@/components/molecules/data-table'
import CovidTrackerService from '@/service/covid-tracker-service'
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

const CountryDetailPage = () => {
    const { id } = useParams()
    const [data, setData] = useState<Datum[]>([]) // Update the type of 'data' state variable

    useEffect(() => {
        const fetchData = async () => {
            const response = await CovidTrackerService.getReports(id!)
            const result = response.data.data
            setData(result)
        }
        console.log('fetchData', data)

        fetchData()
    }, [id])

    return (
        <>
            <h2 className='mb-2'>CountryDetailPage</h2>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default CountryDetailPage
