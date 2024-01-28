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

  const [styleRateAll,setStyleRateAll] = useState(()=>{

    if (totalProfit/totalGames>0)return {color:"green"}
    if (totalProfit/totalGames<0)return {color:"red"}
    if (totalProfit/totalGames===0) return {color:"white"}
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
    if (rateOCG===0)return {color:"white"}

  })

  const [styleOCGProfit,setStyleOCGProfit] = useState(()=>{

    if (profitOCG>0)return {color:"green"}
    if (profitOCG<0)return {color:"red"}
    if (profitOCG===0)return {color:"white"}

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

  const [styleLiveTournament] = useState(()=>{

    if (profitLiveTournaments>0)return {color:"green"}
    if (profitLiveTournaments<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleLiveCashGames] = useState(()=>{

    if (profitLiveCashGames>0)return {color:"green"}
    if (profitLiveCashGames<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleLiveProfit] = useState(()=>{

    if (profitLiveTournaments+profitLiveCashGames>0)return {color:"green"}
    if (profitLiveTournaments+profitLiveCashGames<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleLiveTournamentRate] = useState(()=>{

    if (profitLiveTournaments/totalLiveTournaments>0)return {color:"green"}
    if (profitLiveTournaments/totalLiveTournaments<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleLiveCashGamesRate] = useState(()=>{

    if (profitLiveCashGames/totalLiveCashGames>0)return {color:"green"}
    if (profitLiveCashGames/totalLiveCashGames<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleLiveRate] = useState(()=>{

    if (rateLive>0)return {color:"green"}
    if (rateLive<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const filteredHeadsUp = month.records.filter((record) => record.type == "Heads Up")
  let totalHeadsUp = filteredHeadsUp.length
  let profitHeadsUp = 0
  filteredHeadsUp.forEach(record => {
    profitHeadsUp = profitHeadsUp + parseInt(record.profitLoss)
  })

  const [styleHeadsUp] = useState(()=>{

    if (profitHeadsUp>0)return {color:"green"}
    if (profitHeadsUp<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [styleHeadsUpRate] = useState(()=>{

    if (profitHeadsUp/totalHeadsUp>0)return {color:"green"}
    if (profitHeadsUp/totalHeadsUp<0)return {color:"red"}
    else {return {color:"white"}}

  })


  const filteredPokerSoftware = month.records.filter((record) => record.type == "Poker Software" )
  let profitPokerSoftware = 0
  let totalPokerSoftware = filteredPokerSoftware.length
  filteredPokerSoftware.forEach(record => {
    profitPokerSoftware = profitPokerSoftware + parseInt(record.profitLoss)
  })
  let ratePokerSoftware = profitPokerSoftware/totalPokerSoftware

  const [stylePokerSoftware] = useState(()=>{

    if (profitPokerSoftware>0)return {color:"green"}
    if (profitPokerSoftware<0)return {color:"red"}
    else {return {color:"white"}}

  })

  const [stylePokerSoftwareRate] = useState(()=>{

    if (ratePokerSoftware>0)return {color:"green"}
    if (ratePokerSoftware<0)return {color:"red"}
    else {return {color:"white"}}

  })

  return (
    <div className='detail-box-container'>
     <table>
        <tr>
          <th className='month'>{month.name}</th>          
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
          <td className='value-games'>{totalPokerSoftware}</td>    
          <td className='value-games'>{totalGames}</td>         
        
        </tr>

        <tr >
          <td className='title-details'>Rate</td>                
          <td style={styleLiveRate}>{rateLive}€</td>                
          <td style={styleLiveTournamentRate}>{rateLiveTournaments}€</td>
          <td style={styleLiveCashGamesRate}>{rateLiveCashGames}€</td>  
          <td style={styleOCGRate}>{rateOCG}€</td>        
          <td style={styleHeadsUpRate}>{(profitHeadsUp/totalHeadsUp).toFixed(2)}€</td>   
          <td style={stylePokerSoftwareRate} >{ratePokerSoftware}€</td>     
          <td style={styleRateAll}>{(totalProfit/totalGames).toFixed(2)}€</td>          
        
        </tr>

        <tr >
          <td className='title-details'>Profit/Loss</td>                
          <td style={styleLiveProfit}>{profitLiveCashGames+profitLiveTournaments}€</td>                
          <td style={styleLiveTournament}>{profitLiveTournaments}€</td>
          <td style={styleLiveCashGames}>{profitLiveCashGames}€</td>  
          <td style={styleOCGProfit}>{profitOCG}€</td>        
          <td style={styleHeadsUp}>{profitHeadsUp}€</td>   
          <td style={stylePokerSoftware}>{profitPokerSoftware}€</td>  
          <td style={styleTotal}>{totalProfit}€</td>             
        
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