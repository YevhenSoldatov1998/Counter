import React from 'react'
import CounterScreen from "./CounterScreen/CounterScreen";
import CounterButtons from "./CounterButtons/CounterButtons";

const Counter = (props) => {
  debugger
    return (
        <div className={`counter`}>
            <CounterScreen maxInc = {props.counter.maxInc} valueScreen={props.counter.valueScreen}/>
            <CounterButtons handleInc={props.handleInc} handleReset={props.handleReset} buttons={props.counter.buttons}/>
        </div>
    )

}


export default Counter