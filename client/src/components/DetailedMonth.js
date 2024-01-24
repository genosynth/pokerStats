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
    if (totalProfit==0) return {color:"white"}
  })

  const [styleRate,setStyleRate] = useState(()=>{

    if (totalProfit/totalGames>0)return {color:"green"}
    if (totalProfit/totalGames<0)return {color:"red"}
  })
  

  const filteredOCG = month.records.filter((record) => record.type == "Online Cash Game" );
  let totalOCGGames = filteredOCG.length
  let profitOCG = 0;
  filteredOCG.forEach(record =>{
    profitOCG = profitOCG + parseInt(record.profitLoss)
    })
  
  let rateOCG = (profitOCG/totalOCGGames).toFixed(2)
  console.log(rateOCG)

  const [styleOCGRate,setStyleOCGRate] = useState(()=>{

    if (rateOCG>0)return {color:"green"}
    if (rateOCG<0)return {color:"red"}
  })

  const filteredLiveCashGames = month.records.filter((record) => record.type == "Live Cash Game" );
  const filteredLiveTournaments = month.records.filter((record) => record.type == "Live Tournament" );
  let totalLiveCashGames = filteredLiveCashGames.length
  let totalLiveTournaments = filteredLiveTournaments.length
  let profitLiveCashGames = 0 
  filteredLiveCashGames.forEach(record =>{
    profitLiveCashGames = profitLiveCashGames + parseInt(record.profitLoss)
  })
  let profitLiveTournaments = 0
  filteredLiveTournaments.forEach(record =>{
    profitLiveTournaments = profitLiveTournaments + parseInt(record.profitLoss)
  })
  let rateLive = Math.round((profitLiveCashGames+profitLiveTournaments)/(totalLiveCashGames+totalLiveTournaments))
  let rateLiveCashGames = Math.round(profitLiveCashGames/totalLiveCashGames)
  let rateLiveTournaments = Math.round(profitLiveTournaments/totalLiveTournaments)

  const filteredHeadsUp = month.records.filter((record) => record.type == "Heads Up")
  let totalHeadsUp = filteredHeadsUp.length
  let profitHeadsUp = 0
  filteredHeadsUp.forEach(record => {
    profitHeadsUp = profitHeadsUp + parseInt(record.profitLoss)
  })

  return (
    <div className='detail-box-container'>
     <table>
        <tr>
          <th>{month.name}</th>          
          <th>Live Poker</th>                
          <th>Live Tournaments</th>   
          <th>Live Cash Games</th>      
          <th>Online Cash Games</th>                
          <th>Heads Up</th>   
          <th>Poker Software</th> 
          <th>All Type</th>                
          
        </tr>

    
        <tr >
          <td className='title-details'>Games</td>                
          <td className='value-games'>{totalLiveCashGames+totalLiveTournaments}</td>                
          <td className='value-games' >{totalLiveTournaments}</td>
          <td className='value-games'>{totalLiveCashGames}</td>  
          <td className='value-games'>{totalOCGGames}</td>        
          <td className='value-games'>{totalHeadsUp}</td>   
          <td className='value-games'>0</td>    
          <td className='value-games'>{totalGames}</td>         
        
        </tr>

        <tr >
          <td className='title-details'>Rate</td>                
          <td >{rateLive}€</td>                
          <td >{rateLiveTournaments}€</td>
          <td >{rateLiveCashGames}€</td>  
          <td >{rateOCG}€</td>        
          <td >{profitHeadsUp/totalHeadsUp}€</td>   
          <td >0€</td>     
          <td >{totalProfit/totalGames}€</td>          
        
        </tr>

        <tr >
          <td className='title-details'>Profit/Loss</td>                
          <td >{profitLiveCashGames+profitLiveTournaments}€</td>                
          <td >{profitLiveTournaments}€</td>
          <td >{profitLiveCashGames}€</td>  
          <td >{profitOCG}€</td>        
          <td >{profitHeadsUp}€</td>   
          <td >0€</td>  
          <td >{totalProfit}€</td>             
        
        </tr>

    </table>

    {/*<div className='detail-box'>            
        <h2>{month.name}</h2>
        <span style={styleTotal}>Profit/Loss {totalProfit}€</span>
        <span>Total Games/Sessions Played - {totalGames} </span>
        <span>Profit/Loss per game/session <span style={styleRate}>{Math.round(totalProfit/totalGames)}€</span> </span>           
        <span>Total Online Cash Games sessions - {totalOCGGames} </span>
        <span>Profit/Loss per each Online Cash Game session <span style={styleOCGRate}>{rateOCG}€</span></span>
    

    </div>              */}
    
   
    </div>


  )
}

export default DetailedMonth