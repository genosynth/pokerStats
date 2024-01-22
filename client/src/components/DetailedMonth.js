import React, {useState} from 'react'

function DetailedMonth({month}) {

  let totalGames = month.records.length
  
  let totalProfit = 0
  
  month.records.forEach(record => {
    totalProfit = totalProfit + parseInt(record.profitLoss)
  });

  const [styleTotal,setStyleTotal] = useState(()=>{

    if (totalProfit>0)return {color:"green"}
    if (totalProfit<0)return {color:"red"}
  })

  const [styleRate,setStyleRate] = useState(()=>{

    if (totalProfit/totalGames>0)return {color:"green"}
    if (totalProfit/totalGames<0)return {color:"red"}
  })

  return (
    

    <div className='detail-box'>            
        <h2>{month.name}</h2>
        <span style={styleTotal}>Profit/Loss {totalProfit}€</span>
        <span>Total Games/Sessions Played - {totalGames} </span>
        <span>Games/Sessions - LT 5 - LCG 2 - OCG 13 - HU 0 - PS 0</span>    
        <span>Profit/Loss - LT +300€ - LCG 0€ - OCG +200€ - HU 0€ - PS 0€</span>    
        <span>Profit per game/session <span style={styleRate}>{Math.round(totalProfit/totalGames)}€</span> </span>
    

    </div>

            
  
    

    



  )
}

export default DetailedMonth