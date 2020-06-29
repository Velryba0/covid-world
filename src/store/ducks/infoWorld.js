import { all, call, put, takeEvery } from 'redux-saga/effects'
import { FetchAllData } from '../../utils/fetchData'

/**********SAGAS***********/

function* getData() {
    try {
        const dataWorld = yield call(FetchAllData);
        yield put(receiveCharactersData(dataWorld))
    } catch (error) {
        console.log(error);
    }
}

export function* worldDataCovid() {
    yield all([
        takeEvery(REQUEST_COVID_19_DATA, getData)
    ])
}


/**********ACTION & ACTION CREATOR***********/

export const REQUEST_COVID_19_DATA = 'REQUEST_COVID_19_DATA';
export const RECEIVE_COVID_19_DATA = 'RECEIVE_COVID_19_DATA';

export const requestCovid19Data = () => ({ type: REQUEST_COVID_19_DATA})
export const receiveCharactersData = (data) => ({ type: RECEIVE_COVID_19_DATA, data});


/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_COVID_19_DATA:
            return data;
        default:
            return state;
    }
}