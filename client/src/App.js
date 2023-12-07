import { useEffect, useState } from 'react';
import './App.css';
import Records from './components/Records';

function App() {

  const [live,setLive] = useState(()=>{
     if (localStorage.getItem("my-poker-records")){

      let temp = JSON.parse(localStorage.getItem("my-poker-records"))
      

      temp = temp.filter((record) => record.type =="Live Tournament" || record.type =="Live Cash Game");
      //console.log(temp)
      let value = 0
      temp.forEach((element) => value = (value + parseInt(element.profitLoss)));
      console.log(value)
      return value
     }
  })

  const [OCG,setOCG] = useState(()=>{
    if (localStorage.getItem("my-poker-records")){

     let temp = JSON.parse(localStorage.getItem("my-poker-records"))
     

     temp = temp.filter((record) => record.type =="Online Cash Game");
     //console.log(temp)
     let value = 0
     temp.forEach((element) => value = (value + parseInt(element.profitLoss)));
     console.log(value)
     return value
    }
 })
  const [pokerSoftware , setPokerSoftware] = useState(()=>{
    if (localStorage.getItem("my-poker-records")){

     let temp = JSON.parse(localStorage.getItem("my-poker-records"))
     

     temp = temp.filter((record) => record.type =="Poker Software");
     //console.log(temp)
     let value = 0
     temp.forEach((element) => value = (value + parseInt(element.profitLoss)));
     console.log(value)
     return value
    }
 })
  const [date, setDate] = useState()
  const [profitLoss, setProfitLoss] = useState()
  const [describtion, setDescribtion] = useState()
  const [type, setType] = useState("Live Tournament")

  const [pokerRecords, setPokerRecords] = useState(()=> {
    const localData = localStorage.getItem("my-poker-records");
    return localData ? JSON.parse(localData) : [];
  });

  const saveEntry = () => {
    

    let record = {date, profitLoss,describtion,type}
    setPokerRecords([...pokerRecords, record])
    window.location.reload();
   

  }

  const handleDate = (event) =>{
   setDate(event.target.value)
  }

  const handleProfitLoss = (event) =>{
    setProfitLoss(event.target.value)
    }

  const handleDescribtion = (event) =>{
        setDescribtion(event.target.value)
        
    }

  const handleType = (event) => {
    setType(event.target.value)
  }

  useEffect(()=> { //used to save to local storage everytime a record is entered
    localStorage.setItem("my-poker-records", JSON.stringify(pokerRecords))
  }, [pokerRecords]);

  return (
    <div className="App">
      <header className="App-header">
      POKER STATSTICS
      </header>
      <div className="general-tab">
        <header>Live {live} </header>
        <header>Online Cash Games {OCG}</header>
        <header>Poker Software {pokerSoftware}</header>
        <header>Total {live + OCG + pokerSoftware}</header>
      </div>

      <div className='record-tab'>     
        
        <table>
        <tr>
          <th>Date</th>          
          <th>Type</th>                
          <th>Profit/Loss</th>   
          <th>Describtion</th>              
        
        </tr>
          <Records pokerRecords={pokerRecords}></Records>
        </table>     
      
      </div>

      <form className='entry-tab' onSubmit={(event)=>{
        event.preventDefault()
        saveEntry()
       
      }}>
        
      <input  type="date" placeholder="Enter date" onChange={handleDate} required ></input>
         
      <select name="game-type"  value={type} onChange={handleType} >
            {/*<option value="0"> None </option> */}
            <option value ="Live Tournament">Live Tournament</option>
            <option  value="Live Cash Game">Live Cash Game </option>
            <option value="Online Cash Game">Online Cash Game</option>
            <option value="Poker Software">Poker Software</option>              
          
      </select>

      <input  type="number" placeholder="Profit/Loss" onChange={handleProfitLoss} required></input>
      <input  type="text" placeholder="Describtion" onChange={handleDescribtion}></input>

      <button type='submit' variant="outline-light">Save</button>

      </form>

      

      
    </div>
  );
}

export default App;
