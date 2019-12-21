import { UPDATA ,GOTOP} from './action-types'

const defaultState = {
    list : [],
    top:true
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case UPDATA:
            return {
                list:action.data
            }
        case GOTOP:
            return {
                top:true
            }
        default:
            return state
    }
}