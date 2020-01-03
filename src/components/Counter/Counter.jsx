import React from 'react'
import CounterScreen from "./CounterScreen/CounterScreen";
import CounterButtons from "./CounterButtons/CounterButtons";
import CounterSet from "../CounterSet/CounterSet";

const Counter = (props) => {
    return (
        <>
            <div className={`counter`}>
                <CounterScreen maxInc={props.counter.maxInc} valueScreen={props.counter.valueScreen}/>
                <CounterButtons handleInc={props.handleInc} maxInc={props.counter.maxInc}
                                valueScreen={props.counter.valueScreen} handleReset={props.handleReset}
                               />
            </div>
            {/*<CounterSet*/}
            {/*    maxInc={props.counter.maxInc}*/}
            {/*    startValue = {props.counter.startValue}*/}
            {/*    InputStartValue={props.InputStartValue}*/}
            {/*    InputMaxInc={props.InputMaxInc}*/}
            {/*/>*/}
        </>
    )

}


export default Counter