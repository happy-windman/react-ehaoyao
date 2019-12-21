import {GETDETAILS}  from './action-types'

const defaultState = {
    data:[]
}

export default (state=defaultState,actions)=>{

    switch (actions.type) {
        case GETDETAILS:
            return {
                data:actions.data
            }
    
        default:
            return state
    }
}