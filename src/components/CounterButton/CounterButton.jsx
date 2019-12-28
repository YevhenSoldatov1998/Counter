import React from 'react'

const CounterButton = (props) => {
    const handleClick = (btn) => btn.title === "INC"?props.handleInc(btn):props.handleReset(btn)
    return (
        <div className={`btn-wrap`}>
            {props.buttons.map(btn =><button onClick={handleClick.bind(this, btn)} disabled={btn.isDisable}>{btn.title}</button>)}
        </div>
    )
}
export default CounterButton