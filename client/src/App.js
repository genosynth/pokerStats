import { useEffect, useState } from 'react';
import './App.css';
import Records from './components/Records';
import ExtraInfo from './components/ExtraInfo'

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

 const [headsUp] = useState(()=>{
  if (localStorage.getItem("my-poker-records")){

    let temp = JSON.parse(localStorage.getItem("my-poker-records"))
    

    temp = temp.filter((record) => record.type =="Heads Up");
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

  const [styleLive] = useState(()=>{
    if (live<0) {return {color:"red",fontSize:"50px"}}
    if (live>0) {return {color:"green",fontSize:"50px"}}
    return {color:"white", fontSize:"50px"}
  })

  const [styleOCG] = useState(()=>{
    if (OCG<0) {return {color:"red",fontSize:"50px"}}
    if (OCG>0) {return {color:"green",fontSize:"50px"}}
    return {color:"white", fontSize:"50px"}
  })

  const [styleheadsUp] = useState(()=>{
    if (headsUp<0) {return {color:"red",fontSize:"50px"}}
    if (headsUp>0) {return {color:"green",fontSize:"50px"}}
    return {color:"white", fontSize:"50px"}
  })



  const [stylePokerSoftware] = useState(()=>{
    if (pokerSoftware<0) {return {color:"red",fontSize:"50px"}}
    if (pokerSoftware>0) {return {color:"green",fontSize:"50px"}}
    return {color:"white", fontSize:"50px"}
  })

  const [styleAll] = useState(()=>{
    if ((live+OCG+pokerSoftware+headsUp)<0) {return {color:"red",fontSize:"50px"}}
    if (live+OCG+pokerSoftware+headsUp==0) {return {color:"white",fontSize:"50px"}}
    return {color:"green", fontSize:"50px"}
  })
  
  const [choice,setChoice] = useState()

  const updateBoxShadow = (parameter) =>{
    if (parameter<0)  return {boxShadow: "10px 5px 5px red"}
    if (parameter>0)  return  {boxShadow: "10px 5px 5px green"}
    else return {boxShadow: "10px 5px 5px white"}
  }



  const saveEntry = () => {
    

    let record = {date, profitLoss,describtion,type}
    setPokerRecords([record,...pokerRecords])
    window.location.reload();
   

  }

  const handleDate = (event) =>{
    let date = new Date(event.target.value).toDateString()    // for alphanumerical date 
   
    setDate(date)
  
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
        <div style={updateBoxShadow(live)} onClick={()=>setChoice("live")}>
          <header >Live Poker</header>
          <span style={styleLive}>{live} </span>
        </div>
        <div style={updateBoxShadow(OCG)} onClick={()=>setChoice("ocg")}>
          <header >Online Cash Games</header>
          <span style={styleOCG}> {OCG}</span>
        </div>
        <div style={updateBoxShadow(headsUp)} onClick={()=>setChoice("heads-up")}>
          <header >Heads Up</header>
          <span style={styleheadsUp}> {headsUp}</span>
        </div>
        <div  style={updateBoxShadow(pokerSoftware)} onClick={()=>setChoice("poker-software")}>
          <header >Poker Software</header>
          <span style={stylePokerSoftware}>{pokerSoftware}</span>
        </div>
        <div  style={updateBoxShadow(live+OCG+pokerSoftware+headsUp)} onClick={()=>setChoice("all")}>
          <header>Total</header>
          <span style={styleAll}> {live + OCG + pokerSoftware + headsUp}</span>
        </div>
      </div>

      <div className='record-tab'>     
        
        <table>
        <tr>
          <th>Date</th>          
          <th>Type</th>                
          <th>Profit/Loss</th>   
          <th>Describtion</th>              
        
        </tr>
          <Records pokerRecords={pokerRecords} choice={choice}></Records>
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
            <option value="Heads Up">Heads Up</option>         
          
      </select>

      <input  type="number" placeholder="Profit/Loss" onChange={handleProfitLoss} required></input>
      <input  type="text" placeholder="Describtion" onChange={handleDescribtion}></input>

      <button type='submit' variant="outline-light">Save</button>

      </form>

      <ExtraInfo choice={choice} pokerRecords={pokerRecords} updateBoxShadow={updateBoxShadow}></ExtraInfo>
      

      
    </div>
  );
}

export default App;
