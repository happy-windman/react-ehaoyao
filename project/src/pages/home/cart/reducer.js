import { ADDCART, UPDATE} from './action-types'
import store from 'store'

let cartStorage = store.get('cartList')

const defaultState = {
    cartList: cartStorage ? cartStorage : {
                                            OTC: [],
                                            RX: []
                                          }
}


export default (state = defaultState, action) => {

    switch (action.type) {
        case ADDCART:
            action.data.checked = true
            action.data.count = 1
            action.data.editChecked=false
            let currentType = action.data.type

            //判断是否重复
            let i = state.cartList[currentType].findIndex((item) => {
                return item.goodsId === action.data.goodsId
            })
            i === -1 ? state.cartList[currentType].push(action.data) : state.cartList[currentType][i].count++

            store.set('cartList', state.cartList)
            return {
                cartList: state.cartList
            }
        case UPDATE:
            store.set('cartList', action.data)
            return {
                cartList: action.data
            }
    
        default:
            return state
    }
}