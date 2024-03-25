import { TotalReport } from '@/types/total-report-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TotalReport = {
    data: { active: 0, confirmed: 0, deaths: 0, recovered: 0, fatality_rate: 0 },
    isLoading: false,
    date: ''
}

const totalReportSlice = createSlice({
    name: 'totalReport',
    initialState,
    reducers: {
        getTotalReportsFetch: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = true
            state.date = payload
        },
        getTotalReportsSuccess: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
        getTotalReportsFailure: state => {
            state.isLoading = false
        }
    }
})

export const { getTotalReportsFetch, getTotalReportsSuccess, getTotalReportsFailure } = totalReportSlice.actions
export default totalReportSlice.reducer
