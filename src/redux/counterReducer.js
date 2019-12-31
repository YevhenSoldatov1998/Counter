const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
export const INCREMENT_CREATOR = () => ({type: INCREMENT});
export const RESET_CREATOR = () => ({type: RESET});
let initialState = {
    valueScreen: 0,
    startValue: 0,
    maxInc: 5,
}
const counterReducer = (state = initialState, action) => {
    let {valueScreen, startValue, maxInc} = state;
    switch (action.type) {
        case INCREMENT:
         if(startValue < maxInc){
             return {...state, valueScreen: valueScreen + 1}
         }
         return false;
        case RESET:
            return {
                ...state,
                valueScreen: 0
            }
        default:
            return state
    }
}
export default counterReducer