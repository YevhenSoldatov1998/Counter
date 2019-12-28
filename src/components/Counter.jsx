import React from 'react'
import CounterScreen from "./CounterScreen/CounterScreen";
import CounterButton from "./CounterButton/CounterButton";

const Counter = (props) => {
  debugger
    return (
        <div className={`counter`}>
            <CounterScreen styled={props.counter.styled} valueScreen={props.counter.valueScreen}/>
            <CounterButton handleInc={props.handleInc} handleReset={props.handleReset} buttons={props.counter.buttons}/>
        </div>
    )

}


export default Counter