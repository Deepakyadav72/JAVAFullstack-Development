import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const[string, setString]=useState('');
  const [value ,setValue]=useLocalStorage('name',[]);
  

  return (
    <>
    <input type="text" onChange={(e)=> setString(e.target.value)}/>
    <button onClick={()=>setValue(string)}>click</button>
      </>
  );
}

export { App};