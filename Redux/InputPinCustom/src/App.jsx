import { useState } from 'react'
import { InputBox} from './Components/InputBox'


export const App=() =>{
  
  const style={
    padding:"10px",
    margin: "5px",
    width:"15px"

  }
  const [value ,setValue]= useState("");


  return (
    <>
      <InputBox length={4} style={style}/>
    </>
  )
}

export default App
