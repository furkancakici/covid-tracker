import { call, put, takeEvery } from 'redux-saga/effects'

import CovidTrackerService from '@/service/covid-tracker-service'
import { Reports } from '@/types/reports-type'

import { getReportsFailure, getReportsSuccess } from '../slices/report-slice'

function* workGetReportFetch() {
    try {
        const reports: Reports = yield call(() => CovidTrackerService.getReports('USA'))

        yield put(getReportsSuccess(reports))
    } catch (error) {
        yield put(getReportsFailure)
    }
}

function* reportSaga() {
    yield takeEvery('reports/getReportsFetch', workGetReportFetch)
}

export default reportSaga
