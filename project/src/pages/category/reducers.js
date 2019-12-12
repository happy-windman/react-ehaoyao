import { UPDATA } from './action-types'

const defaultState = {
    list : []
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case UPDATA:
            return {
                list:action.data
            }
    
        default:
            return state
    }
}