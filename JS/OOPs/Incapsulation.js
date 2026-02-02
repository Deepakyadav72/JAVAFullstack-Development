let c1=new miniSUV("defender","landrover","mehFuz","sporty");
console.log('🚀 ~ c1:', c1);

class Car2{
    #owner;
    constructor(x,y,z,){
        this.name=x,
        this.brand=y;
        this.#owner=z
    }
    showPrivetVariable (){
        console.log('🚀 ~ this:', this);
        return `this is priate ${this.#owner}`
    }
    

}
// let c2=new Car2("defender","landrover","megFuz");
// console.log('🚀 ~ c2:', c2.showPrivetVariable());
