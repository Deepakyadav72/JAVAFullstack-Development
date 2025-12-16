import './App.css';
import {CustomForm} from "./Components/Form";
import {PropsOverView} from './Componets/PropsOverview';
import { Propsvalidation } from './Components/Propsvalidation';


funsction App(){

    const fields=[
        {
            name:'username',
            type:'text',
            placeholder: 'Enter your name',
            label: 'Username',
            isrequired:'true'
        },
         {
            name:'userEmail',
            type:'email',
            placeholder: 'Enter your email',
            label: 'User email',
            isrequired:'true'
        },
         {
            name:'userPhone',
            type:'tel',
            placeholder: 'Enter your Phone',
            label: 'Phone',
            isrequired:'true'
        },
         {
            name:'userpass',
            type:'password',
            placeholder: 'Enter your password',
            label: 'password',
            isrequired:'true'
        },
        
    ];

    
    return(
    <>
    {/* <div>
        <h1>React from with Props validation</h1>
        <CustomForm
        field={fields}
        onSubmit={handleFormSubmit}
        buttonText="Register"/>
    </div> */}
    <Form formData={field}/>
    </>

    );
}
export default App;
