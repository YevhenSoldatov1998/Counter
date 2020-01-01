import {connect} from "react-redux";
import Counter from "./Counter";
import {
    INCREMENT_CREATOR,
    INPUT_MAX_VALUE_CREATOR,
    INPUT_START_VALUE_CREATOR,
    RESET_CREATOR
} from '../../redux/counterReducer'
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const  CounterContainer = connect(mapStateToProps, {
    handleInc: INCREMENT_CREATOR,
    handleReset: RESET_CREATOR,
    InputStartValue: INPUT_START_VALUE_CREATOR,
    InputMaxInc: INPUT_MAX_VALUE_CREATOR
})(Counter)
export default CounterContainer