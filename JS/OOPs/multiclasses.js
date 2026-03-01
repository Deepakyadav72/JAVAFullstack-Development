class A{
    Add(x,y){
        return x+y;
    }
    
}
class B{
    sub(x,y){
        return x-y;
    }
    
}
class c{
    mul(x,y){
        return x*y;
    }
    
}
class D{
    div(x,y){
        return x/y;
    }
    
}let ao=new A();
let Addition=ao.Add(10,30);
console.log(Addition);

let bo=new B();
let SB=bo.sub(103,30);
console.log(SB);

let co=new c();
let mul=co.mul(10,30);
console.log(mul);

// let do=new D();
// let div=do.div(10,30);
// console.log(div);