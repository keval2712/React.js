import {useState} from "react"
import './App.css';

function App() {

  const [color,setColor]= useState()
 
  return (
    <div className="w-full h-screen duration-200" style={{
      backgroundColor:color}}>

      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor: "red"}}>red</button>
      <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor: "green"}}>green</button>
      <button onClick={()=> setColor("olive")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor: "olive"}}>olive</button>
      <button onClick={()=> setColor("silver")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor:"silver"}}>silver</button>
      <button onClick={()=> setColor("fuchsia")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor:"fuchsia"}}>fuchsia</button>
      <button onClick={()=> setColor("antiquewhite")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor:"antiquewhite"}}>antiquewhite</button>
      <button onClick={()=> setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{
      backgroundColor:"indigo"}}>indigo</button>
        </div></div> 
    </div>
  );
}

export default App;
