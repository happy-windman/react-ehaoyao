import {takeEvery} from 'redux-saga/effects'
import { sagas as home } from 'pages/home/home'
import {saga as details} from 'pages/details'

let {GETLIST} = home.types
let {LOADDATA} = details.types
function* mySaga() {
  yield takeEvery(GETLIST, home.action);
  yield takeEvery(LOADDATA,details.action)
}

export default mySaga;