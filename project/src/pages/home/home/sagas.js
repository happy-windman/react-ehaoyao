import * as types from './action-types'
import { put } from 'redux-saga/effects'
import { get } from 'utils/http'
import { LOADDATA } from './action-types'

function* loadData(action) {
    try {
        const data = yield get({
            url: '/ajax/homeData'
        });
        yield put({ type: LOADDATA, data: data });
    } catch (e) {
    }
}

export {
    types,
    loadData as action
}
