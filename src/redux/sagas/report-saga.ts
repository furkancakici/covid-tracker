import { call, put, takeLatest } from 'redux-saga/effects'

import CovidTrackerService from '@/service/covid-tracker-service'
import { Reports } from '@/types/reports-type'
import { PayloadAction } from '@reduxjs/toolkit'

import { getReportsFailure, getReportsSuccess } from '../slices/report-slice'

function* getReportSaga({ payload: iso }: PayloadAction<string>) {
    try {
        const reports: Reports = yield call(() => CovidTrackerService.getReports({ iso }))

        yield put(getReportsSuccess(reports))
    } catch (error) {
        yield put(getReportsFailure)
    }
}

function* reportSaga() {
    yield takeLatest('reports/getReportsFetch', getReportSaga)
}

export default reportSaga
