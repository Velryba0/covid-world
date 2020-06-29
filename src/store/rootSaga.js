import { fork, all } from 'redux-saga/effects'
import { worldDataCovid } from './ducks/infoWorld'

export default function* rootSaga() {
    yield all([
        fork(worldDataCovid)
    ])
}