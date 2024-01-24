import React , {useEffect,useState} from 'react'
import DetailedMonth from './DetailedMonth'

function Details({pokerRecords}) {


const [monthArray] = useState([
    {name:"January", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jan")},
    {name: "February", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Feb")},
    {name: "March", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Mar")},
    {name: "April", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Apr")},
    {name:"May", records: pokerRecords.filter(record => record.date?.substring(4,7)=="May")},
    {name: "June", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jun")},
    {name: "July", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jul")},
    {name: "August", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Aug")},
    {name: "September", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Sep")},
    {name: "October", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Oct")},
    {name: "November", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Nov")},
    {name: "December", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Dec")}
])


//console.log(monthArray)


    return (
        monthArray.map(month => {

            if (month.records.length>0){
                return <DetailedMonth month={month} />  
            }           
            
      })  
      )
}

export default Details