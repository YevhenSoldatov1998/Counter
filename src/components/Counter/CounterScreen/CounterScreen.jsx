import React from 'react'
const CounterScreen = (props) => {
    const disabled = props.valueScreen === props.maxInc ? 1 : 0;
    return(
        <div className={disabled?'counter-screen active': 'counter-screen'}>{props.valueScreen}</div>
    )
}
export default CounterScreen