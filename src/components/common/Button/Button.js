import React from "react";

const Button = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.title}</button>
    )
}

export default Button