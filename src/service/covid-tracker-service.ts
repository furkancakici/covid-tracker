import http from '@/lib/http'
import BaseService from '@/service/base-service'
import { Reports } from '@/types/reports-type'
import { TotalReport } from '@/types/total-report-type'

class CovidTrackerService extends BaseService {
    async getReports({ iso, date = '2020-06-16' }: { iso: string; date?: string }) {
        const response = await http.get<Reports>(`reports${this._query({ iso, date })}`)
        return response
    }

    async getTotalReports(date: string = '2020-06-16') {
        const response = (await http.get<TotalReport>(`reports/total${this._query({ date })}`)).data.data
        return response
    }

    async getRegions() {
        const response = await http.get('regions')
        return response
    }

    async getProvince(country: string) {
        const response = await http.get(`provinces${this._query({ country })}`)
        return response
    }
}
export default new CovidTrackerService()
