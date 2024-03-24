import { ReportSliceType } from '@/types/report-slice-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ReportSliceType = {
    data: [],
    isLoading: false,
    error: ''
}

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getReportsFetch: (state, { payload: iso }: PayloadAction<string>) => {
            state.isLoading = true
            state.error = ''
        },
        getReportsSuccess: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        getReportsFailure: state => {
            state.isLoading = false
            state.error
        }
    }
})

export const { getReportsFetch, getReportsSuccess, getReportsFailure } = reportSlice.actions
export default reportSlice.reducer
