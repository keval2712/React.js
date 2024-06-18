import{useState} from'react'
import './App.css';

function App() {

 let[counter,setCounter]= useState(0)
  
  const  addvalue=()=>{
   setCounter(counter+1)
   
  }
  const removevalue=()=>{
    setCounter(counter-1)
    
  }
  return (
    <>
  <h1>keval ponkiya</h1>
  <h2>counter value:{counter}</h2>
  <button onClick={addvalue}>increment{counter}</button>
  <br/>
  <button onClick={removevalue}>decrement{counter}</button>
  <p>footer:{counter}</p>
    </>
  );
}
  
export default App;
