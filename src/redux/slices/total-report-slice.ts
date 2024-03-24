import { Data } from '@/types/total-report-type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: { data: Data[]; isLoading: boolean } = {
    data: [],
    isLoading: false
}

const totalReportSlice = createSlice({
    name: 'totalReport',
    initialState,
    reducers: {
        getTotalReportsFetch: state => {
            state.isLoading = true
        },
        getTotalReportsSuccess: (state, action) => {
            state.data = action.payload
        },
        getTotalReportsFailure: state => {
            state.isLoading = false
        }
    }
})

export const { getTotalReportsFetch, getTotalReportsSuccess, getTotalReportsFailure } = totalReportSlice.actions
export default totalReportSlice.reducer
