/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReportPayloadType } from '@/types/report-payload-type'
import { ReportSliceType } from '@/types/report-slice-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ReportSliceType = {
    data: [],
    isLoading: false,
    error: '',
    date: ''
}

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setReportDate: (state, { payload }: PayloadAction<string>) => {
            state.date = payload
        },
        getReportsFetch: (state, { payload }: PayloadAction<ReportPayloadType>) => {
            state.isLoading = true
            state.error = ''
            state.date = payload.date
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

export const { getReportsFetch, getReportsSuccess, getReportsFailure, setReportDate } = reportSlice.actions
export default reportSlice.reducer
