import React from 'react';
import Rate from "./Rate";
import Money from "./Money";
import { useState } from "react"
import Input from "./Input";
import Quotes from "./Quotes"
import Info from "./Info"

const Main = ({displayInfo,setDis}) => {
    const [info,setInfo] = useState(
        {
            id:0,
            show : true,
            place:"",
            rateShow:false,
            moneyShow:false,
        }
    )
    const [money,setMoney] = useState(0)
    const [forMoney,setFormat] = useState("")
    const [moneyCard,setCard] = useState({
        dec:false,
        format:"",
        weekx:1,
        monthx:2,
        yearx:3,
        wRate:0,
        mRate:0,
        yRate:0,
        weeky:1,
        monthy:2,
        yeary:3,
        sumWeek:1,
        sumMonth:1,
        sumYear:1,
    })
    const [rate,setRate] = useState({
        useDec : false,
        week : 0,
        month :0,
        year :0,
        currency:" ",
        perSave:0,
        selected:true,
    })
    const [totalDate,setDate] = useState({
        weeks:1,
        months:1,
        years:1,
    })
    const [random,setRandom] = useState(Math.floor(Math.random() * 18));

    const setHidden = (id) => {
        id === 0 ? setInfo({ ...info,place : "input your target saving",show:false,rateShow:true,id:id+1})
        : setInfo({ ...info,place : "input your per saving",show:false,rateShow:true,id:id+1})
    }
    const setShow = () =>{
        setInfo({...info,place:"",show:true,id:0,rateShow:false,moneyShow:false})
        setMoney(0)
        setFormat("")
        setCard({...moneyCard,format:"",dec:false})
        setRate({useDec : false,week : 0,month :0,year :0,currency:" ",perSave:0})
        setDate({weeks:1,months:1,years:1})
    }

    /*const moneyDisplay = (day) => {
        const string1 = day+"x";
        const string2 = day+"y"
        //console.log(moneyCard.weekx)
        console.log(moneyCard[string2])
        console.log(info.id)
        console.log(moneyCard.dec)
        if(info.id === 1){
            //console.log(string)
            if(moneyCard.dec){
                console.log(numberWithCommasDec(moneyCard[string2]))
                numberWithCommasDec(moneyCard[string2])
            }else{
                console.log(numberWithCommas(moneyCard[string2]))
                numberWithCommas(moneyCard[string2])
            }
        }else if(info.id === 2 && moneyCard.dec){
            console.log(numberWithCommasDec(moneyCard[string1]))
                numberWithCommasDec(moneyCard[string1])
        }else{console.log(numberWithCommas(moneyCard[string1]))
            numberWithCommasDec(moneyCard[string1])}
    }*/

    return (
        <div>
            <div className="container">
                <Info displayInfo={displayInfo} setDis={setDis} />
                <h1 className="h1-title">Save Money Counter</h1>
                <div className="btn-cont">
                    {info.show ? (<div className="choose-btn">
                        <button id="test" onClick={()=> setHidden(0)}>Set Target Saving</button>
                        <button onClick={()=> setHidden(1)}>Set per Saving</button>
                    </div>):<Input info={info} setShow={setShow} 
                    setInfo={setInfo} money={money} setMoney={setMoney} rate={rate} setFormat={setFormat} />
                    }
                </div>  
                <Rate info={info} rate={rate} setRate={setRate} setInfo={setInfo} setCard={setCard} forMoney={forMoney} money={money} moneyCard={moneyCard}  />
                <Money info={info} rate={rate} setRate={setRate} setInfo={setInfo} money={money} forMoney={forMoney} setCard={setCard} moneyCard={moneyCard} totalDate={totalDate} setDate={setDate} />
                <Quotes random={random} setRandom={setRandom} />
            </div>
        </div>
    )
}

export default Main

