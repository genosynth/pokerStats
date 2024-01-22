import React, {useState} from 'react'

function ExtraInfo({choice,pokerRecords, updateBoxShadow}) {

 


    const [tournamentsTotal,setTournamentsTotal] = useState(()=>{
        const filteredLiveTournaments = pokerRecords.filter((record) => record.type == "Live Tournament");
       
        //console.log(filteredLiveTournaments)

        let temp = 0
      
        filteredLiveTournaments.forEach((element) => (temp=temp+parseInt(element.profitLoss)));

       
        return temp

    })

    const [cashGamesTotal,setCashGamesTotal] = useState(()=>{
        const filteredLiveCashGames = pokerRecords.filter((record) => record.type == "Live Cash Game");

        let temp = 0

        filteredLiveCashGames.forEach((element) => (temp=temp+parseInt(element.profitLoss)));

       
        return temp

    })


    const [styleTournaments] = useState(()=>{
        if (tournamentsTotal<0) {return {color:"red",fontSize:"50px"}}
        if (tournamentsTotal>0) {return {color:"green",fontSize:"50px"}}
        return {color:"white", fontSize:"50px"}
      })

      const [styleCashGames] = useState(()=>{
        if (cashGamesTotal<0) {return {color:"red",fontSize:"50px"}}
        if (cashGamesTotal>0) {return {color:"green",fontSize:"50px"}}
        return {color:"white", fontSize:"50px"}
      })
    
    
   

    if (choice=="live"){   
       
        return (
            <div className='extra-info'>
                <div style={updateBoxShadow(tournamentsTotal)}><header>Live Tournaments</header><span style={styleTournaments}>{tournamentsTotal}</span></div>
                <div style={updateBoxShadow(cashGamesTotal)}><header>Live Cash Games</header><span style={styleCashGames}>{cashGamesTotal}</span></div>
            
            </div>   
        )
    }



}

export default ExtraInfo