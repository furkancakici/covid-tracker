import { combineReducers } from '@reduxjs/toolkit'

import reportSlice from './report-slice'
import totalReportSlice from './total-report-slice'

const rootSlice = combineReducers({
    report: reportSlice,
    totalReport: totalReportSlice
})

export default rootSlice
