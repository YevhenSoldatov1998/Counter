import React from 'react'
import Button from "../../common/Button/Button";

class CounterButtons extends React.Component {

    call_handleInc = () => {
        debugger
        this.props.handleInc()
    };
    call_handleReset = () => {
        this.props.handleReset()
    };

    render() {
        const disabled = this.props.valueScreen === this.props.maxInc ? 1 : 0;
        return (
            <div className={`btn-wrap`}>
                <Button title='INC' disabled={disabled} callback={this.call_handleInc}/>
                <Button title='RESET' callback={this.call_handleReset}/>
            </div>
        )
    }
}

export default CounterButtons