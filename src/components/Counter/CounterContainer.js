import {connect} from "react-redux";
import React from 'react';
import Counter from "./Counter";
import {
    INCREMENT_CREATOR,
    INPUT_MAX_VALUE_CREATOR,
    INPUT_START_VALUE_CREATOR,
    RESET_CREATOR
} from '../../redux/counterReducer'


class CounterContainer extends React.Component {
    state ={
        isSetting: false
    }
    setCounter = () => {
        this.setState({
            isSetting: true
        })
    }
    activeCounter = () => {
        this.setState({
            isSetting: false
        })
    }

    render(){
        return  < Counter activeCounter={this.activeCounter} setCounter={this.setCounter} {...this.props} {...this.state}/>
    }
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
}

export default connect(mapStateToProps, {
    handleInc: INCREMENT_CREATOR,
    handleReset: RESET_CREATOR,
    InputStartValue: INPUT_START_VALUE_CREATOR,
    InputMaxInc: INPUT_MAX_VALUE_CREATOR
})(CounterContainer)