const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const SET = 'SET';
const INPUT_START_VALUE = 'INPUT_START_VALUE';
const INPUT_MAX_VALUE = 'INPUT_MAX_VALUE';

export const handleInc = () => ({type: INCREMENT});
export const handleReset = () => ({type: RESET});
export const handleSet = () => ({type: SET});
export const InputStartValue = (start) => {
    return  {type: INPUT_START_VALUE, start}
};
export const InputMaxInc = (max) => ({type: INPUT_MAX_VALUE, max});

let initialState = {
    valueScreen: 1,
    startValue: 1,
    maxInc: 5,
    error: false
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
            };
        case INPUT_START_VALUE:
            if (action.start >= 0 && action.start <= maxInc) {
                return {
                    ...state,
                    startValue: action.start,
                    error: false
                }
            }
            else {
                return {
                    ...state,
                    error: true,
                    startValue: action.start,
                }
            }
        case INPUT_MAX_VALUE:
            if (action.max >= state.startValue) {
                return {
                    ...state,
                    maxInc: +action.max,
                }
            }

            return state;
        case SET:
            return {
                ...state, valueScreen: startValue
            }
        default:
            return state
    }
}
export default counterReducer