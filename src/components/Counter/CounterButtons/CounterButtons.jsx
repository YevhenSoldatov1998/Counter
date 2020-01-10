import React from 'react'
import Button from "../../common/Button/Button";

class CounterButtons extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }
    call_handleInc = () => {
        this.props.handleInc()
    };
    call_handleReset = () => {
        this.props.handleReset()
    };

    render() {
        const disabledInc = () => {
            if(this.props.valueScreen >= this.props.maxInc ){
                return 1
            }
            else if(this.props.error){
                return 1
            }
            else if(this.props.isSetting){
                return 1
            }
            else{
                return 0
            }
        }
        const disabledReset = this.props.isSetting ? 1 : 0;
        return (
            <div className={`btn-wrap`}>
                <Button title='INC' disabled={disabledInc()} callback={this.call_handleInc}/>
                <Button title='RESET' disabled={disabledReset}  callback={this.call_handleReset}/>

            </div>
        )
    }
}

export default CounterButtons