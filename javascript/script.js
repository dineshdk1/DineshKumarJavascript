  function validate()
{
    var fname=document.form.fname.value;
    var lname=document.form.lname.value;
    var phone=document.form.phone.value;
    var email=document.form.email.value;
    var password=document.form.password.value;
    var pos=email.search('.com');
    var pos1=email.search('@');
    if(fname==null || fname==="")
    {
       document.getElementById('fnames').innerHTML="!First name can't be empty";
        return false;
    }
    else if(lname==null || lname==="")
    {
        document.getElementById('lnames').innerHTML="!Last name can't be empty";
        return false;
    }
    else if(phone.length!=10)
    {
        document.getElementById('phones').innerHTML="!Phone number should be exactly 10 digits";
        return false;
    }
    else if(email==null || email==="")
    {
        document.getElementById('emails').innerHTML="!Email can't be empty";
        return false;
    }
    else if(pos==-1)
    {
        document.getElementById('emails').innerHTML='!Email should end with .com';
        return false;
    }
    else if(pos1==-1)
    {
        document.getElementById('emails').innerHTML="!Email should contain @ symbol";
        return false;
    }
    else if(password.length<6)
    {
        document.getElementById('passwords').innerHTML="!Password should contain atleast 6 characters";
        return false;
    }
    else{
        alert("Registration succesful");
        return true;
    }
}
function removeWarning() {
    document.getElementById(this.id + "s").innerHTML = "";
}

document.getElementById("fname").onkeyup = removeWarning;
document.getElementById("lname").onkeyup = removeWarning;
document.getElementById("phone").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("password").onkeyup = removeWarning;
    
