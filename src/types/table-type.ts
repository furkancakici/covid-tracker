export interface Reports {
    data: Datum[]
}

export interface Datum {
    date: Date
    confirmed: number
    deaths: number
    recovered: number
    confirmed_diff: number
    deaths_diff: number
    recovered_diff: number
    last_update: Date
    active: number
    active_diff: number
    fatality_rate: number
    region: Region
}

export interface Region {
    iso: ISO
    name: Name
    province: string
    lat: string
    long: string
    cities: City[]
}

export interface City {
    name: string
    date: Date
    fips: number | null
    lat: null | string
    long: null | string
    confirmed: number
    deaths: number
    confirmed_diff: number
    deaths_diff: number
    last_update: Date
}

export enum ISO {
    Usa = 'USA'
}

export enum Name {
    Us = 'US'
}
