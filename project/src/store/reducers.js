import {combineReducers} from 'redux'
import {reducers as list } from 'pages/home/home'
import {reducers as categoryList} from 'pages/home/category'
export default combineReducers({
    home:list,
    category:categoryList
})