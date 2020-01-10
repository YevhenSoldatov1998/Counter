import React from 'react'

class CounterButtons extends React.Component {

    call_handleSet = () => {
        this.props.handleSet()
    }
    render() {
        const disabled = this.props.valueScreen === this.props.maxInc ? 1 : 0;
        return (
            <div className={`btn-wrap`}>
                <button onClick={this.call_handleSet} disabled={false}>SET</button>
            </div>
        )
    }
}

export default CounterButtons