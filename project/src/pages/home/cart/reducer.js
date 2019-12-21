import { ADDCART,UPDATE } from './action-types'
// import store from 'store'
const defaultState = {
    cartList: {
        OTC: [],
        RX: []
    }
}


export default (state = defaultState, action) => {

    switch (action.type) {
        case ADDCART:
            action.data.checked = true
            action.data.count = 1
            
            let currentType = action.data.type
            
            //判断是否重复
            let i = state.cartList[currentType].findIndex((item) => {
                return item.goodsId === action.data.goodsId
            })
            i === -1 ? state.cartList[currentType].push(action.data) : state.cartList[currentType][i].count++

            return {
                cartList: state.cartList
            }
        case UPDATE:
            return {
                cartList:action.data
            }
        default:
            return state
    }
}