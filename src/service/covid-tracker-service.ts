import http from '@/lib/http'
import BaseService from '@/service/base-service'

class CovidTrackerService extends BaseService {
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
