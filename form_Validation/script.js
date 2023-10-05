let username=document.querySelector('#username');
let pass=document.querySelector('#pass');
let confirm_password=document.querySelector('#confirm_password');
let mobile=document.querySelector('#mobile');
let email=document.querySelector('#email');
let error= document.getElementById('error');

function validate(){
    if(username.value=="" || username.value==null){
         error.innerHTML="pls enter the username";
    }
    if(pass.value==''||pass.value==null){
        document.getElementById('pass_error').innerHTML='pls enter the password';
    }
    if(confirm_password.value!=pass.value){
        document.getElementById('confirm_password_error').innerHTML='does not match the password';
    }if(mobile.value.length<10){
        document.getElementById('mobile_error').innerHTML='pls put the number 10 digit';
    }if(email.value==''){
        document.getElementById('email_error').innerHTML='pls enter the email';
    }
}