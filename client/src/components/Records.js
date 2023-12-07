import Record from './Record'
import React from 'react'

function Records({pokerRecords}) {


  return (
    pokerRecords.map(record => {

      return <Record key={record.name} record={record}/>                      

  })  
  )
}

export default Records