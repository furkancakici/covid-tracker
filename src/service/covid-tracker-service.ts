import http from '@/lib/http'
import BaseService from '@/service/base-service'
import { Reports } from '@/types/table-type'

class CovidTrackerService extends BaseService {
    async getReports(iso: string) {
        const response = await http.get<Reports>(`reports${this._query({ iso, date: '2020-06-16' })}`)
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
