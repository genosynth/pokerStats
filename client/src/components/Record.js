import React from 'react'

function Record({record}) {
  return (
    <tr>
    <td className='value-records'>{record.date}</td>                
    <td className='value-records'>{record.type}</td>                
    <td className='winner-records'>{record.profitLoss}</td>
    <td className='value-records'>{record.describtion}</td>                
    
    </tr>
  )
}

export default Record