import { Datum } from '@/types/reports-type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: { data: Datum[]; isLoading: boolean } = {
    data: [],
    isLoading: false
}

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        getReportsFetch: state => {
            state.isLoading = true
        },
        getReportsSuccess: (state, action) => {
            state.data = action.payload
        },
        getReportsFailure: state => {
            state.isLoading = false
        }
    }
})

export const { getReportsFetch, getReportsSuccess, getReportsFailure } = reportSlice.actions
export default reportSlice.reducer
