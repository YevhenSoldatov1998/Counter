import React from 'react'
import Button from "./Button";

class CounterButtons extends React.Component {

    render() {
        return (
            <div className={`btn-wrap`}>
                <Button handleInc={()=> alert('dfdf')} title={"INC"}/>
                <Button handleReset={()=> alert('reset')} title={"RESET"}/>
            </div>
        )
    }
}

export default CounterButtons