import { call, put, takeLatest } from 'redux-saga/effects'

import CovidTrackerService from '@/service/covid-tracker-service'
import { ReportPayloadType } from '@/types/report-payload-type'
import { Reports } from '@/types/reports-type'
import { PayloadAction } from '@reduxjs/toolkit'

import { getReportsFailure, getReportsSuccess } from '../slices/report-slice'

function* getReportSaga({ payload }: PayloadAction<ReportPayloadType>) {
    try {
        const reports: Reports = yield call(() =>
            CovidTrackerService.getReports({ iso: payload.iso, date: payload.date }).then(res => res.data.data)
        )

        yield put(getReportsSuccess(reports))
    } catch (error) {
        yield put(getReportsFailure)
    }
}

function* reportSaga() {
    yield takeLatest('report/getReportsFetch', getReportSaga)
}

export default reportSaga
