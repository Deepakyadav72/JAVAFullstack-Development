// import { useState } from "react";
// import './App.css'
// import { useLocalStorage } from "./hooks/useLocalStorage";
// import { useToggle } from "./hooks/useToggle";


// function App() {
//   const[string, setString]=useState('');
//   const [value ,setValue]=useLocalStorage('name',[]);
  
//   const[toggle, setToggle]=useToggle();
//   console.log('🚀 ~ toggle:', toggle);

//   return (
//     <>
//     <input type="text" onChange={(e)=> setString(e.target.value)}/>
//     <button onClick={()=>setValue(string)}>click</button>
//     {toggle && <h1>i am invoke</h1>}
//     <button onClick={()=>setToggle(false)}>off</button>
//     <button onClick={()=>setToggle(true)}>on</button>

//       </>
//   );
// }

// export { App};


import { useState } from "react";
import './App.css'
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToggle } from "./hooks/useToggle";

import {useFetch} from './hooks/useFetch';

function App() {
  const [string, setString] = useState('');
  const [LocalStorage, setLocalStorage] = useLocalStorage('name', []);
  const {data}=useFetch('http://fakestoreapi.com/products');

  // const [toggle, setToggle] = useToggle();

  return (
    <>
      <input type="text" onChange={(e) => setString(e.target.value)}                                                                                           /0>

     <button onClick={() => setValue(string)}>
        click
      </button>

      {toggle && <h1>I am invoke</h1>}

      {/* Single Toggle Button */}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "OFF" : "ON"}
      </button>
    </>
  );
}

export { App };
