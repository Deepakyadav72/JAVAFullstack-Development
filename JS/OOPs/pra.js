class Student {
constructor(fname, lname, skill) {
this.firstName = fname;
this.lastName = lname;
this.skill = skill;
}
show() {
document.write("First Name is:" + this.firstName +"<br>");

document.write("Last Name is:" + this.lastName +"<br>");

document.write("Skill is:" + this.skill + "<br>");
document.write("<hr>");
}
}
let s1 = new Student("Nishant", "Kumar", "JavaScript");
s1.show();
console.log(s1);
let s2 = new Student("Prashant", "Singh", "Java");
s2.show();
console.log(s2);
let s3 = new Student("Anu", "Shree", "ReactJS");
s3.show();
console.log(s3);