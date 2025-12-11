import {CustomForm} from "./customComponets";

export const Form =()=>{
    const fields=[
        {
            name:'username',type:'text',
            placeholder: 'Enter your name',
            label: 'Username',required:'true'
        },
        {name:'email', type:'email',
            placeholder:'Enter your email',label:'Email',
            required:true},
             {name:'password', type:'password',
            placeholder:'Enter your password',label:'password',
            required:true},
             {name:'confirmpassword', type:'password',
            placeholder:'Enter your  Confirm password',label:' Confirm password',
            required:true},
             {name:'phone', type:'tel',
            placeholder:'Enter your number',label:'Phone',
            required:true},
    ];

    const handleFormSubmit=(data)=>{
        console.log('Form Submitted:',data);
    };
    return(<>
    <div>
        <h1>React from with Props validation</h1>
        <CustomForm
        field={fields}
        onSubmit={handleFormSubmit}
        buttonText="Register"/>
    </div>
    </>

    )
}