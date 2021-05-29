import React from 'react'
import NumberFormat from 'react-number-format';

const input = ({info,setShow,setMoney,money,rate,setFormat}) => {
    const moneyDisplay = (day) => {
        const string = day+"x";
        if(info.id == 1){
            console.log(string)
        }
    }
    return (
        <div className="inputsaving">
            <NumberFormat thousandSeparator={true} prefix={rate.currency} decimalSeparator="." 
            /*onChange={(e) => setMoney(e.target.value)}*/ placeholder={info.place}
            isNumericString={false} onValueChange={(values) => {
                const {formattedValue, value , floatValue} = values;
                setMoney(parseInt(value))
                setFormat(formattedValue)
            }} />
            <button className="money-close" onClick={setShow} >X</button>
        </div>
    )
}

export default input
