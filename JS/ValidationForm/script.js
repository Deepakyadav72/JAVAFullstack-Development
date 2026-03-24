function validation(){
    var fname= document.getElementById("fname").value;
     var lname= document.getElementById("lname").value;
     var email= document.getElementById("email").value;
     var pass= document.getElementById("pass").value;
     var gender=document.querySelector('input[name="gen"]:checked');
    var skills=document.querySelectorAll('input[name="skills"]:checked');
    var city= document.getElementById("city").value;

if(fname==""){
    document.getElementById("fnameError").innerHTML="Enter the  name";
    return false;

}
if(lname==""){
    document.getElementById("lnameError").innerHTML="Enter the  last name";
    return false;
    
}

}