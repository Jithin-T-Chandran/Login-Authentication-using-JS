function validateUser()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if((username=="jithin"&& password=="user")||(username=="admin"&& password=="newton"))
{
    alert("login succesfully");
    //return false;
    document.getElementById("loginS").innerHTML="login succesfully"
}
else if(username==""&&password==""){
    alert("field can't be empty");
}
else
{
    alert("login failed. The username or password is incorrect");
    document.getElementById("loginF").innerHTML="login failed"

}
}

