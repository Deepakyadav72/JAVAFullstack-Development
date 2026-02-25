var emp={
    fname:'Deepak',
    lname:'Yadav',
    email: 'deepakya@gmai.com',
    kills:['JS','React', 'JAVA','SQL'],
    salary:function(){
        return 130000
    },
    fullname:function(){
        return this.fname+" "+this.lname;
    },
    address:{
        city:'mumbai',
        country:'india',
        pin:400065

    }
}
console.log(emp.fullname());
console.log(emp.address.city)
console.log(emp.salary())