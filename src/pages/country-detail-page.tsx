import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { DataTable } from '@/components/molecules/data-table'
import { columns } from '@/constants'
import CovidTrackerService from '@/service/covid-tracker-service'
import { Datum } from '@/types/table-type'

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
            <div>CountryDetailPage</div>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default CountryDetailPage
