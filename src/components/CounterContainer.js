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
        handleInc: (btn)=>{
            dispatch(INCREMENT_CREATOR(btn))
        },
        handleReset: (btn)=>{
            dispatch(RESET_CREATOR(btn))
        }
    }
}
const  CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer