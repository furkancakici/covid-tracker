export interface TotalReport {
    data: Data | null
    isLoading: boolean
    date: string
}

export interface Data {
    confirmed: number
    deaths: number
    recovered: number
    active: number
    fatality_rate: number
}
