import { all } from 'redux-saga/effects'

import reportSaga from './report-saga'
import totalReportSaga from './total-report-saga'

function* rootSaga() {
    yield all([reportSaga(), totalReportSaga()])
}

export default rootSaga
