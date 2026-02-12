import './App.css'
import { HomeButton } from './components/HomeButton';
import { Sign_in_Button } from './components/Sing_in_Button';
import { Button } from './components/Button';



function App() {
  return (
    <>
      <h1>hello</h1>
      <HomeButton value={'home button'}/> <br/>
      <br/>
      <Sign_in_Button value={'signIN'}/> 

      <br/>
      <br/>
      <Button 
        value={{
          name:'signUp',
          style:{
            padding:'.25rem 1rem',
          borderRadius:'4rem',
          border:'2rem solid red',
          background:'transparent',
        },
        }}
      />
    </>
  );
}

export default App;
