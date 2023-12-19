import Record from './Record'
import React from 'react'

function Records({pokerRecords,choice}) {

  

  if (choice=="live") {  //filter pokerRecords with live only
   
    const filteredLive = pokerRecords.filter((record) => record.type == "Live Tournament" || record.type =="Live Cash Game");
  return (
    filteredLive.map(record => {

      return <Record key={record.name} record={record}/>                      

    })  
    )
  }

  if (choice=="ocg") {   //filter pokerRecords with Online Cash Games only
  
    const filteredLive = pokerRecords.filter((record) => record.type == "Online Cash Game" );
  return (
    filteredLive.map(record => {

      return <Record key={record.name} record={record}/>                      

    })  
    )
  }

  if (choice=="heads-up") {   //filter pokerRecords with Heads Up Games only
  
    const filteredLive = pokerRecords.filter((record) => record.type == "Heads Up" );
  return (
    filteredLive.map(record => {

      return <Record key={record.name} record={record}/>                      

    })  
    )
  }


  if (choice=="poker-software") {  //filter pokerRecords with Poker Software only
   
    const filteredLive = pokerRecords.filter((record) => record.type == "Poker Software" );
  return (
    filteredLive.map(record => {

      return <Record key={record.name} record={record}/>                      

    })  
    )
  }

  if (choice=="all") { // unfiltered
    return (
      pokerRecords.map(record => {
  
        return <Record key={record.name} record={record}/>                      
  
    })  
    )
  }


  return (
    pokerRecords.map(record => {

      return <Record key={record.name} record={record}/>                      

  })  
  )
}

export default Records