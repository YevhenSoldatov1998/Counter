import React from 'react'
import CounterScreen from "./CounterScreen/CounterScreen";
import CounterButtons from "./CounterButtons/CounterButtons";
import CounterSet from "../CounterSet/CounterSet";

const Counter = (props) => {
    return (
        <>
            <div className={`counter`}>
                <CounterScreen error = {props.error} isSetting={props.isSetting} maxInc={props.counter.maxInc} valueScreen={props.counter.valueScreen}/>
                <CounterButtons error = {props.error} isSetting={props.isSetting} handleInc={props.handleInc} maxInc={props.counter.maxInc}
                                valueScreen={props.counter.valueScreen} handleReset={props.handleReset}
                               />
            </div>
            <CounterSet
                error = {props.error}
                setCounter ={props.setCounter}
                maxInc={props.counter.maxInc}
                startValue = {props.counter.startValue}
                InputStartValue={props.InputStartValue}
                InputMaxInc={props.InputMaxInc}
                activeCounter={props.activeCounter}
            />
        </>
    )

}


export default Counter