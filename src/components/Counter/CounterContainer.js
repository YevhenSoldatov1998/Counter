import {connect} from "react-redux";
import React from 'react';
import Counter from "./Counter";
import {
    handleInc,
    InputMaxInc,
    InputStartValue,
    handleReset,
    handleSet
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
    handleInc,
    handleReset,
    InputStartValue,
    InputMaxInc,
    handleSet
})(CounterContainer)