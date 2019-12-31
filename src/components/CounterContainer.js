import {connect} from "react-redux";
import Counter from "./Counter";
import {INCREMENT_CREATOR, RESET_CREATOR} from '../redux/counterReducer'
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInc: ()=>{
            dispatch(INCREMENT_CREATOR())
        },
        handleReset: ()=>{
            dispatch(RESET_CREATOR())
        }
    }
}
const  CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer