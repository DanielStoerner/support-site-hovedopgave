function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="danielstoerner"&& password=="FreakySneaky1337")
{

alert("du har logget ind");
window.open ("../forside/forside.html");
return false;
  }
else{
    alert("du har tastet den forkerte kode ind");
}

}