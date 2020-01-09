import React from 'react'

const CounterScreen = ({isSetting , valueScreen ,maxInc , error }) => {
    const checkStatusScreen = () => {
        if(isSetting){
            return <span>Setting</span>
        }
        else if(error){
            return <span>Invalid</span>
        }
        else{
            return valueScreen
        }
    }


    const disabled = valueScreen === maxInc ? 1 : 0;
    return (
        <div className={disabled ? 'counter-screen active' : 'counter-screen'}>
           { checkStatusScreen()}
        </div>
    )
};
export default CounterScreen