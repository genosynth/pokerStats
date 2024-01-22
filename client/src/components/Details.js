import React , {useEffect,useState} from 'react'
import DetailedMonth from './DetailedMonth'

function Details({pokerRecords}) {


const [monthArray] = useState([
    {name:"Jan", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jan")},
    {name: "Feb", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Feb")},
    {name: "Mar", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Mar")},
    {name: "Apr", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Apr")},
    {name:"May", records: pokerRecords.filter(record => record.date?.substring(4,7)=="May")},
    {name: "Jun", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jun")},
    {name: "Jul", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Jul")},
    {name: "Aug", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Aug")},
    {name: "Sep", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Sep")},
    {name: "Oct", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Oct")},
    {name: "Nov", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Nov")},
    {name: "Dec", records: pokerRecords.filter(record => record.date?.substring(4,7)=="Dec")}
])


console.log(monthArray)


    return (
        monthArray.map(month => {

            if (month.records.length>0){
                return <DetailedMonth month={month} />  
            }           
            
      })  
      )
}

export default Details