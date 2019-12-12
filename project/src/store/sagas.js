import {takeEvery} from 'redux-saga/effects'
import { sagas as home } from 'pages/home/home'

let {GETLIST} = home.types

function* mySaga() {
  yield takeEvery(GETLIST, home.action);
}

export default mySaga;