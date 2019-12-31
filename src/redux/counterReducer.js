const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
export const INCREMENT_CREATOR = (btn) => ({type: INCREMENT, btn});
export const RESET_CREATOR = (btn) => ({type: RESET, btn});
let initialState = {
    valueScreen: 0,
    styled: false,
    maxInc: 5,
    buttons: [
        {id: 1, title: 'INC', isDisable: false},
        {id: 2, title: 'RESET', isDisable: false}]
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            let newButtons = state.buttons.map(el => {
                if (el.id === action.btn.id) {
                    return {...el, isDisable: true}
                }
                return {...el}
            })
            return {
                ...state,
                valueScreen: state.valueScreen !== state.maxInc ? state.valueScreen + 1 : state.valueScreen,
                buttons: state.valueScreen === state.maxInc - 1 ? newButtons : state.buttons,
                styled: state.valueScreen === state.maxInc - 1 ? 1 : 0
            }
        case RESET:
            let newButton = state.buttons.map(el => ({...el, isDisable: false}))
            return {
                ...state,
                valueScreen: 0,
                styled: false,
                buttons: newButton
            }
        default:
            return state
    }
}
export default counterReducer