const defaultState = {
    list : []
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case 'loadDate':
            return {
                list:action.date
            }
    
        default:
            return state
    }
}