class Car {
    constructor(n,b){
        this.name=n;
        this.brand=b;

    }
    showDetails(){
        console.log(`${this.name}${this.brand}`);
        return`${this.name}${this.brand}${this.buyer}`
    }
}






class SUV extends Car{
    constructor(x,y,z){
        super(x,y);
        this.buyer=z;
    }
}

// let c1=new SUV("defender","landrover","Deepak Yadav");
// console.log('🚀 ~ c1:', c1);
// console.log(c1.showDetails());


class miniSUV{
    constructor(x,y,z,m)
    {
        super(x,y,z);
        this.look=m
    }
}
let c1=new SUV("defender","landrover","Deepak Yadav","sporty");
console.log('🚀 ~ c1:', c1);
