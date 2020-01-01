const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const SET = 'SET';
const INPUT_START_VALUE = 'INPUT_START_VALUE';
const INPUT_MAX_VALUE = 'INPUT_MAX_VALUE';

export const INCREMENT_CREATOR = () => ({type: INCREMENT});
export const RESET_CREATOR = () => ({type: RESET});
export const SET_CREATOR = () => ({type: SET});
export const INPUT_START_VALUE_CREATOR = (start)=> ({type: INPUT_START_VALUE, start})
export const INPUT_MAX_VALUE_CREATOR = (max)=> ({type: INPUT_MAX_VALUE, max})
let initialState = {
    valueScreen: 0,
    startValue: 0,
    maxInc: 5,
}
const counterReducer = (state = initialState, action) => {
    let {valueScreen, startValue, maxInc} = state;
    switch (action.type) {
        case INCREMENT:
            if (valueScreen < maxInc) {
                return {...state, valueScreen: valueScreen + 1}
            }
            return state;
        case RESET:
            return {
                ...state,
                valueScreen: startValue
            }
        case INPUT_START_VALUE:
            return {
                ...state,
                startValue: +action.start,
                valueScreen:  +action.start
            }
        case INPUT_MAX_VALUE:
            if(+action.max >= state.startValue){
                return {
                    ...state,
                    maxInc: +action.max
                }
            }
            return state

        default:
            return state
    }
}
export default counterReducer