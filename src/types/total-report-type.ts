export interface TotalReport {
    data: Data
}

export interface Data {
    date: Date
    last_update: Date
    confirmed: number
    confirmed_diff: number
    deaths: number
    deaths_diff: number
    recovered: number
    recovered_diff: number
    active: number
    active_diff: number
    fatality_rate: number
}
