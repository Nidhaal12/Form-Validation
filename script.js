var nameT=document.getElementById("name");
var lastn=document.getElementById("lastn");
var add=document.getElementById("add");
var email=document.getElementById("email");
var psd=document.getElementById("psd");
var cmnt=document.getElementById("cmnt");
var btn=document.getElementById("btn");
var frm =document.getElementById("frm");
"use strict";




function fglobal(){
/*if (empty()&&passwordValidation()&&ValidateEmail()){
    return true;
}else return false;
*/

 if( empty()===true)
 
     
{    if (passwordValidation()===true)

       {   ValidateEmail()}


}

}



/*
frm.addEventListener("submit",empty);
frm.addEventListener("submit",passwordValidation);
frm.addEventListener("submit",ValidateEmail);*/

frm.addEventListener("submit",fglobal);


function empty()
{
    
  
            if (nameT.value =="")								 
            { 
               alert("Please enter your name."); 
                name.focus(); 
                return false; 
            } 
            if (lastn.value == "")								 
            { 
                alert("Please enter your last name."); 
                lastn.focus(); 
                return false; 
            } 
           if (add.value == "")								 
            { 
               alert("Please enter your adress ."); 
               add.focus(); 
                return false; 
            } 
            if (email.value == "")								 
            { 
                alert("Please enter your email."); 
                email.focus(); 
                return false; 
            }  if (psd.value == "")								 
            { 
                alert("Please enter your password."); 
               psd.focus(); 
                return false; 
            }  if (cmnt.value == "")								 
            { 
                alert("Please enter your comment."); 
                cmnt.focus(); 
                return false; 
            }  return true;
        };


function passwordValidation()
{
    if ((psd.value).length < 7)								 
            { 
                alert("password must has more than 8 caracters "); 
                
                psd.focus(); 
                return false; 
            }
     if  (psd.value.search(/[A-Z]+/)==-1) 
           {
              alert( "The password must contain at least one capital caracter.\n");
              
            psd.focus(); 
            return false; 
           }
     if (psd.value.search(/[0-9]+/)==-1)
          { 
            alert("The password must contain at least one number.\n");
            psd.focus(); 
            return false; 
          } return true;
    };
    
    function ValidateEmail()
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
     email.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
    }
    };

function submitReset(){
    return ((name.value=="")&&(lastn.value=="")&&(add.value=="")&&(email.value=="")&&(psd.value=="")&&(cmnt.value==""));

};

