import { call, put, takeLatest } from 'redux-saga/effects'

import CovidTrackerService from '@/service/covid-tracker-service'
import { TotalReport } from '@/types/total-report-type'

import { getTotalReportsFailure, getTotalReportsSuccess } from '../slices/total-report-slice'

function* getTotalReportSaga() {
    try {
        const reports: TotalReport = yield call(() => CovidTrackerService.getTotalReports('2020-06-16'))

        yield put(getTotalReportsSuccess(reports))
    } catch (error) {
        yield put(getTotalReportsFailure)
    }
}

function* reportSaga() {
    yield takeLatest('reports/getTotalReportsFetch', getTotalReportSaga)
}

export default reportSaga
