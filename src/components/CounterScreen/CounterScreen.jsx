import React from 'react'
const CounterScreen = (props) => {
    return(
        <div className={`${props.styled?'active counter-screen':' counter-screen'}`}>{props.valueScreen}</div>
    )
}
export default CounterScreen