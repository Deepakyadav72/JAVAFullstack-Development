const  {sum,sub,mul,div,expo}=require('./index');

const num1= +process.argv[2];

const num2= +process.argv[3];

const num3= process.argv[4];

switch(num3){
    case'+':
    console.log(sum(num1,num2));
    break;
    case'-':
    console.log(sub(num1,num2));
    break;
    case'/':
    console.log(div(num1,num2));
    break;

    default:
        "please enter the fiels";
        break;
    
}



 
