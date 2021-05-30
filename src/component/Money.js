import React from 'react';
import plus from '../img/plus-white.svg';
import minus from '../img/minus-white.svg';
import { useState } from "react"

const Money = ({info,setInfo,rate,setRate,money,forMoney,setCard,moneyCard,totalDate,setDate}) => {
    const minimize = () =>{
        console.log("s")
        info.moneyShow ? setInfo({...info,moneyShow:false}) : setInfo({...info,moneyShow:true})
    }
    const numberWithCommasDec= (x) => {
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const numberWithCommas= (x) => {
        return Math.ceil(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const sumDate = (day) => {
        setDate({...totalDate,[day] : totalDate.[day] +1});
    }
    const decDate= (day) => {
        if(totalDate.[day] > 1){
            setDate({...totalDate,[day] : totalDate.[day] -1})
        }
    }
    const perDate = (day) => {
        if(day == 1){
            return "/ Per Day"
        }else if(day == 2){
            return "/ Per Week"
        }else if(day == 3){
            return"/ Per Month"
        }else if(day == 4){
            return "/ Per Year"
        }else{
            return ""
        }
    }

    return (
        <div>
            <div className="money-cont">
                <div className={`per-money  ${info.moneyShow ? "" :"header-radius"}`}>
                    {moneyCard.format===""? "" : (<h1 onClick={minimize}>{info.moneyShow?"-":"+"}</h1>)}
                    <h3 >
                        {`${info.id == 1 ? "Target Money : " + " " + moneyCard.format
                        : info.id == 2 ?"Per Saving : " + " " + moneyCard.format
                        : "Target Money / PerSaving"}`}
                    </h3>
                </div>
                <div className={`total-money ${info.moneyShow ? "displaymoney" : ""}`}>
                    {rate.perSave <= 2 ? 
                    (<div className="weekly">
                    <img src={plus} alt="" onClick={() => sumDate("weeks")}/>
                    <img src={minus} alt="" onClick={() => decDate("weeks")}/>
                    <span>{totalDate.weeks}</span>
                    {info.id == 1 ? <p>Week  : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.weeky/totalDate.weeks) : numberWithCommas(moneyCard.weeky/totalDate.weeks))} {perDate(moneyCard.perSave)} </p>
                    : info.id == 2 ? <p>Week  : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.weekx*totalDate.weeks) : numberWithCommas(moneyCard.weekx*totalDate.weeks))} {perDate(moneyCard.perSave)}</p> :"" }
                </div>):""}
                    {rate.perSave <= 3 ? 
                    (<div className="monthly">
                    <img src={plus} alt="" onClick={() => sumDate("months")}/>
                        <img src={minus} alt="" onClick={() => decDate("months")}/>
                        <span>{totalDate.months}</span>
                        {info.id == 1 ? <p>Month  : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.monthy/totalDate.months) : numberWithCommas(moneyCard.monthy/totalDate.months))} {perDate(moneyCard.perSave)}</p>
                        : info.id == 2 ? <p>Month   : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.monthx*totalDate.months) : numberWithCommas(moneyCard.monthx*totalDate.months))} {perDate(moneyCard.perSave)}</p> :"" }
                    </div>) : ""}
                     <div className="yearly">
                         <img src={plus} alt="" onClick={() => sumDate("years")}/>
                         <img src={minus} alt="" onClick={() => decDate("years")}/>
                         <span>{totalDate.years}</span>
                         {info.id == 1 ? <p>Year   : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.yeary/totalDate.years) : numberWithCommas(moneyCard.yeary/totalDate.years))} {perDate(moneyCard.perSave)}</p>
                         : info.id == 2 ? <p>Year  : {rate.currency + (moneyCard.dec ? numberWithCommasDec(moneyCard.yearx*totalDate.years) : numberWithCommas(moneyCard.yearx*totalDate.years))} {perDate(moneyCard.perSave)}</p> :"" }
                     </div>
                     <div className="applied-rate">
                        <p>Apllied Rate : W : {moneyCard.wRate}% M : {moneyCard.mRate}% Y : {moneyCard.yRate}%</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Money
