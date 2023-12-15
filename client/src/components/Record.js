import React, { useState, useEffect } from 'react'

function Record({record}) {

  const [style, setStyle] = useState()

useEffect(()=>{
  if (record.profitLoss<0){
    setStyle({color:"red"})
  }
  if (record.profitLoss>0){
    setStyle ({color:"green"})
  }
},[record.profitLoss])
  
  return (
    <tr >
    <td className='value-records'>{record.date}</td>                
    <td className='value-records'>{record.type}</td>                
    <td style={style}>{record.profitLoss}</td>
    <td className='value-records'>{record.describtion}</td>                
    
    </tr>
  )
}

export default Record