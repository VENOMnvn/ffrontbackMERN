import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import './Login.css';
import loginBanner  from'./Assets/Login.jpg';
import axios from 'axios';

const Login = () => {
    const [username,Setusername] = useState("");
    const [fullname,Setfullname] = useState("");
    const [email,Setemail] = useState("");
    const [password,Setpassword] = useState("");
    const [valid,setValid] = useState(false);

    const buttonValidity = useRef();
    const usernameRef = useRef();
    const fullnameRef = useRef();
    const emailRef = useRef();
    const PasswordRef = useRef();

    function CheckValidity(e)
    {
      var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(emailRef.current.value.match(pattern) && fullnameRef.current.value.length>3 && username.current.value.length>2)
      {
        setValid(true);
      }
      else
      {
        setValid(false);
      }
    }

    
    
    
    function submitForm()
    {  
   run();
    if(valid)
    { 

      console.log("submitting");
    }
    if(!valid)
    {
      document.getElementsByClassName('alert')[0].innerText="Enter All Feilds OR Enter a Valid email"
      ;
      console.log("reject");
    }
 }
    
 function checkPassword()
 {
   let Passwordstr = PasswordRef.current.value;
   if(Passwordstr.length>=6)
   {
    console.log("True",Passwordstr.length,Passwordstr);
    setValid(true);
    document.getElementsByClassName('alert')[0].innerText="";
  }
  else
  {
     setValid(false);
     console.log("ree")
     document.getElementsByClassName('alert')[0].innerText="Enter a Password at least 6 words";
   }
 }

 function run()
 {
   axios.post("http://localhost:5000/signup",{name:"naveen"})
   .then((res)=>{
    console.log(res);
   })
 }
 
 return (
  <div className="SignupWrapper">

    <div className='Signup'>
      <div className="banner">
         <img src={loginBanner} alt="" srcset="" />
      </div>
         <div className="Greet">
           Welcome , New User Signup !!
          </div> 

        <label htmlFor="username" >User Name</label>
        <input type="text" name='username' placeholder='User Name' ref={usernameRef} onChange={CheckValidity}/>

        <label htmlFor="Fullname" >Full Name</label>
        <input type="text" name='Fullname' placeholder='Full Name' ref={fullnameRef} onChange={CheckValidity}/>
      
        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='example@test.com' onChange={(e)=>CheckValidity(e)} ref={emailRef}/>
      
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='password' onChange={checkPassword} ref={PasswordRef}/>
      
        <div className="alert">

        </div>
        <button className={`${valid}active`} ref={buttonValidity} onClick={submitForm}>Register</button>
    </div>
  </div>
  )
}

export default Login
