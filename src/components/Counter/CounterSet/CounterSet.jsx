import React from 'react'
import Button from "../../common/Button/Button";

const CounterSet = (props) => {
    const changeStartValue = (e) => {
        props.InputStartValue(Number(e.target.value));
        props.setCounter()
    };
    const changeMaxInc = (e) => {
        props.InputMaxInc(Number(e.target.value));
        props.setCounter()
    };
    const call_handleSet = () => {
        props.handleSet();
        props.activeCounter()
    };
    const disabledSet = props.error ? 1 : 0;
    return (
        <div className={`counter`}>
            start value: {props.error ? 'error: true' : 'error: false'}
            <input type="number"
                   value={props.startValue}
                   onChange={changeStartValue}
                   placeholder={`start value`}/>
            max increment:
            <input type="number"
                   value={props.maxInc}
                   onChange={changeMaxInc}
                   placeholder={`max increment`}/>
            <Button title="Set" disabled={disabledSet} callback={call_handleSet}/>
        </div>
    )

}


export default CounterSet