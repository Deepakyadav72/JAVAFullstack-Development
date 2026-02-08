const prompt=require('prompt-sync');

let n1=parseInt(prompt('Enter the 1st num'));
let n2=parseInt(prompt('Enter the 2nd num'));
let choice= parseInt(prompt('Enter choice: 1.Addition|2.Sub|3.mul|4.Div'));

if (choice==1){
    console.log('This is Add:'+(n1+n2));
}else if(choice==2){
    console.log('This is Sub:'+(n1-n2));
}else if(choice==3){
    console.log('This is mul:'+(n1*n2));
}else if(choice==4){
    console.log('This is div:'+(n1%n2));
}else {
    console.log('invalid Choice..  try agin!!!!');
}