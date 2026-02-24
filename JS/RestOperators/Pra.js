function sum(firstname, course,...args){
    console.log(`Hello ${firstname}`);
    console.log(`Qualification ${course}`);

    let sum=0;
    for(let i in args){
        sum=sum+args[i];
    }console.log(`Sum is : ${sum}`);

}
sum ('deepak','bsc it',13,23,2,13,3)
sum ('deepak','bsc it',13,23,4,2,13,3)
sum ('deepak','bsc it',13,23,4,3,14,2,13,3)