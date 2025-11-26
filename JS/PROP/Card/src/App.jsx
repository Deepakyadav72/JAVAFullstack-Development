import './App.css';
import {Card } from './Components/Card';
export const App =()=>{
  return(
  <>
  <h1>hello</h1>
  <div style={{display:'flex',gap:'10px'}}>
    <Card name={'Deepak'}age={25} email={'deepakyadav@gmail.com'}/>
    <Card name={'Deepak'} email={'deepakyadav@gmail.com'}/>
  </div>
  </>
  );
};