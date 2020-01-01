import React from 'react'

class CounterButtons extends React.Component {
    call_handleInc = () => {
        this.props.handleInc()
    }
    call_handleReset = () => {
        this.props.handleReset()
    }
    render() {
        const disabled = this.props.valueScreen === this.props.maxInc ? 1 : 0;
        return (
            <div className={`btn-wrap`}>
                <button onClick={this.call_handleInc} disabled={disabled}>INC</button>
                <button onClick={this.call_handleReset}>RESET</button>
            </div>
        )
    }
}

export default CounterButtons