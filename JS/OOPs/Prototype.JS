class A{
    show(x,y){
        let add=x+y;
        console.log(`Add tow no:${add}`);

    }
    show(x,y){
        let multi=x*y;
        console.log(`* tow no:${multi}`);

    }
    show(x,y){
        let div=x/y;
        console.log(`div tow no:${div}`);

    }
    
}
let co=new A();
co.show(100,20);
co.show(200,2);
co.show(100,25);