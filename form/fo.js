function Search(e)
{
var a=document.getElementById("fname").value;
if(a==="")
{
document.getElementById("f").innerHTML = "Cannot be left blank";
return false;
}
var n=/^[a-zA-Z]+$/;
if(e.value.match(n))
{document.getElementById("f").innerHTML = ""; 
return false;}
else
{
document.getElementById("f").innerHTML = "Enter valid name";
return false;
}
}
function Searc(e)
{
var a=document.getElementById("lname").value;
if(a==="")
{
document.getElementById("l").innerHTML = "Cannot be left blank";
return false;
}
var n=/^[a-zA-Z]+$/;
if(e.value.match(n))
{document.getElementById("l").innerHTML = ""; 
return false;}
else
{
document.getElementById("l").innerHTML = "Enter valid name";
return false;
}
}
function Sear(e)
{
var a=document.getElementById("faname").value;
if(a==="")
{
document.getElementById("fa").innerHTML = "Cannot be left blank";
return false;
}
var n=/^[a-zA-Z]+$/;
if(e.value.match(n))
{document.getElementById("fa").innerHTML = ""; 
return false;}
else
{
document.getElementById("fa").innerHTML = "Enter valid name";
return false;
}
}
function Sea(e)
{
var a=document.getElementById("mname").value;
if(a==="")
{
document.getElementById("m").innerHTML = "Cannot be left blank";
return false;
}
var n=/^[a-zA-Z]+$/;
if(e.value.match(n))
{document.getElementById("m").innerHTML = ""; 
return false;}
else
{
document.getElementById("m").innerHTML = "Enter valid name";
return false;
}
}
function Se(e)
{
var a=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
if(e.value.match(a))
{
document.getElementById("p").innerHTML = ""; 
return false;}
else
{
document.getElementById("p").innerHTML = "Enter 10 digit number";
return false;
}
}
function S(e)
{
var a=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 
if(e.value.match(a))
{
document.getElementById("e").innerHTML = ""; 
return false;}
else
{
document.getElementById("e").innerHTML = "Enter valid email id";
return false;
}
}
function search()
{
document.getElementById("f").innerHTML = "";
return false;
}

