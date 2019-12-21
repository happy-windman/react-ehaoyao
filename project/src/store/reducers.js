import {combineReducers} from 'redux'
import {reducers as list } from 'pages/home/home'
import {reducers as category} from 'pages/home/category'
import {reducer as details} from 'pages/details'
import {reducer as cartList} from 'pages/home/cart'

export default combineReducers({
    home:list,
    category:category,
    details,
    cartList,
})