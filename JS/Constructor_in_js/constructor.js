// // constructor function

// function Car(make ,model,year){
// this.make=make,
// this.model=model,
// this.year=year
// }

// //this method i call class function

// class Car{
//     constructor(make, model,year){
//         (this.make=make),(this.model=model),(this.year=year)



//     }
// }




const person={
    name :`Reena`,
    myFunc:function(){
        console.log(this.name);
    },
};
person.myFunc();

function myName(){
    console.log(this);
}
myName();
console.log(this);



//// call so in call we excute the code this manner


let Person2={
    name: 'rahul',
};
 let Person3={
    name:'manoj',
 };

 function muFunction(age ,city){
    this.age=age;
    this.city=city;
 }

 myFunction.call(Person2,24,'pune');
 console.log(Person2);


 //apply -so in apply we execute the code this manner


 


