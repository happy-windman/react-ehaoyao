import * as types from './action-types'
import { put } from 'redux-saga/effects'
import { get } from 'utils/http'


function* loadData(action) {
    try {
        let result = yield get({
                url:'/api/mds/api/app/apiv3_0/goodsBaseInfoMsite.json',
                params:{
                  groupId:action.id,
                  pharmacyId:'25',
                  coonType:'5',
                  cityId:'027',
                  memberId:''
                }
              })
        yield put({ type: types.GETDETAILS, data: result.data });
    } catch (e) {
    }
}

export {
    types,
    loadData as action
}
