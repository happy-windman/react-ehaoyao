import {combineReducers} from 'redux'
import {reducers as list } from 'pages/home/'
import {reducers as categoryList} from 'pages/category'
export default combineReducers({
    home:list,
    category:categoryList
})