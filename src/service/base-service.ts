class BaseService {
    protected _query(params: string | Record<string, string>) {
        const query = new URLSearchParams(params)
        return `?${query.toString()}`
    }
}

export default BaseService
