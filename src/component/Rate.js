import React from 'react'

const Rate = ({info,setInfo,rate,setRate,setCard,forMoney,money,moneyCard}) => {

    const cons = () => {
        rate.useDec ? setRate({...rate,useDec:false}) : setRate({...rate,useDec:true})
    }
    const minimize = () =>{
        console.log("s")
        info.rateShow ? setInfo({...info,rateShow:false}) : setInfo({...info,rateShow:true})
    }
    const perSave = (x) =>{
        console.log(money+((money*rate.week)/100))
        console.log(rate.perSave)
        if(x == 1){
            return money+((money*rate.week)/100)
        }else if(x == 2){
            return money+((money*rate.month)/100)
        }else if (x == 3){
            return money+((money*rate.year)/100)
        }
    }
    const generate = () =>{
        setInfo({...info,moneyShow:true})
        setCard({
        dec:rate.useDec,
        format:forMoney,
        weekx: rate.perSave == 1 ? perSave(1)*7 : rate.perSave == 2 ? perSave(1) : 0,
        monthx: rate.perSave == 1 ? perSave(2)*30 : rate.perSave == 2 ? perSave(2)*4 : rate.perSave == 3 ? perSave(2) : 0,
        yearx: rate.perSave == 1 ? perSave(3)*365 : rate.perSave == 2 ? perSave(3)*52 : rate.perSave == 3 ? perSave(3)*12 : perSave(3),
        weeky:rate.perSave == 1 ? perSave(1)/7 : rate.perSave == 2 ? perSave(1) : 0,
        monthy:rate.perSave == 1 ? perSave(2)/30 : rate.perSave == 2 ? perSave(2)/4 : rate.perSave == 3 ? perSave(2) : 0,
        yeary:rate.perSave == 1 ? perSave(3)/365 : rate.perSave == 2 ? perSave(3)/52 : rate.perSave == 3 ? perSave(3)/12 : rate.perSave == 4 ? perSave(3) : 0 ,
        wRate:rate.week,
        mRate:rate.month,
        yRate:rate.year,
        sumWeek:1,
        sumMonth:1,
        sumYear:1,
        perSave:rate.perSave,
        })
    }
    
    return (
        <div>
            <div className="cur-cont">
                {info.show ? "" : (<span className="min-btn" onClick={minimize}>{info.rateShow ? "-" : "+"}</span>)}
                <h3>Rate and Currency</h3>
                    <div className={`cur-allcont ${info.rateShow ? "rate-show" : ""}`}>
                    <div className ="decimal">
                        <input type="checkbox" onChange={cons} checked={rate.useDec ? true : false} />
                        <label htmlFor="dec">Use Decimal</label>
                    </div>
                    <div className ="rate-cont">
                        <label htmlFor="cur-week">Weekly:</label>
                        <input type="number" max="100" placeholder="rate %" value={rate.week}
                        onChange={e=>setRate({...rate,week: parseFloat(e.target.value)})}/>
                        <span>%</span>
                        <label htmlFor="cur-month">Monthly:</label>
                        <input type="number" max="100" placeholder="rate %" value={rate.month}
                        onChange={e=>setRate({...rate,month: parseFloat(e.target.value)})}/>
                        <span>%</span>
                        <div className="rate-adjust">
                        <label htmlFor="cur-year">Yearly:</label>
                        <input type="number" max="100" placeholder="rate %" value={rate.year}
                        onChange={e=>setRate({...rate,year: parseFloat(e.target.value)})}/>
                        <span>%</span>
                        </div>
                    </div>
                    <div className="currency-cont">
                        <select name="currency" id="currency" onChange={e => 
                            setRate({...rate,currency:e.target.value+" "})}>
                            <option value="" disabled selected>Select Currency</option>
                            <option value="$">$ US Dollar</option>
                            <option value="Rp">Rp Rupiah</option>
                            <option value="$">$ Singapore Dollar</option>
                            <option value="Rm">Rm Malaysia Ringgit</option>
                        </select><br />
                        <select name="currency" id="currency" onChange={e => 
                            setRate({...rate,perSave:e.target.value})} className="persave" value={rate.perSave}>
                            <option value={0} disabled selected>Select per Saving</option>
                            <option value={1}>per Day</option>
                            <option value={2}>per Week</option>
                            <option value={3}>per Month</option>
                            <option value={4}>per Year</option>
                        </select>
                    </div>
                    <button type="submit" onClick={generate}>Generate</button>
                    </div>
            </div>
            </div>
    )
}

export default Rate

