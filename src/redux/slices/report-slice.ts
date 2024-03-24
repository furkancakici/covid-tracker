/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReportPayloadType } from '@/types/report-payload-type'
import { ReportSliceType } from '@/types/report-slice-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ReportSliceType = {
    data: [],
    isLoading: false,
    error: '',
    isoCode: ''
}

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        getReportsFetch: (state, { payload }: PayloadAction<ReportPayloadType>) => {
            state.isLoading = true
            state.error = ''
            state.isoCode = payload.iso
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
