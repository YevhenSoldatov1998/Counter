import React from 'react'
import CounterScreen from "./CounterScreen/CounterScreen";
import CounterButtons from "./CounterButtons/CounterButtons";
import CounterSet from "./CounterSet/CounterSet";

const Counter = (props) => {
    return (
        <>
            <div className={`counter`}>
                <CounterScreen error = {props.counter.error}
                               isSetting={props.isSetting}
                               maxInc={props.counter.maxInc}
                               valueScreen={props.counter.valueScreen}/>
                <CounterButtons error = {props.counter.error}
                                isSetting={props.isSetting}
                                handleInc={props.handleInc}
                                maxInc={props.counter.maxInc}
                                valueScreen={props.counter.valueScreen}
                                handleReset={props.handleReset}
                               />
            </div>
            <CounterSet
                error = {props.counter.error}
                setCounter ={props.setCounter}
                maxInc={props.counter.maxInc}
                startValue = {props.counter.startValue}
                InputStartValue={props.InputStartValue}
                InputMaxInc={props.InputMaxInc}
                activeCounter={props.activeCounter}
                handleSet = {props.handleSet}
            />
        </>
    )

}


export default Counter