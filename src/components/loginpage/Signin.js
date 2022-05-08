import React from 'react'
import firebase from 'firebase'
import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
import "./login.css";
import Signup from './Signup'
const Signin = () => {
    const [emails, setemails] = React.useState(null);
    const [passwords, setpasswords] = React.useState(null);
    const [status, setstatus] = React.useState(false);
    const [err, seterr] = React.useState("");
    const [datas, setdatas] = React.useState(null);
    var obj=null;
     function authenticates(){firebase.auth().signInWithEmailAndPassword(emails, passwords)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("test",user);
    localStorage.setItem("uid",user.uid);
    console.log("Logged in successfully",user);
    setstatus("true");localStorage.setItem("username",emails);
   
    const opt= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:8080/users/54',opt).then(response => response.json()).then(data => {
  
  
      setdatas(data);
    console.log(datas);
   localStorage.setItem("data",datas)

})
.catch(err => console.log(err))

      
 console.log(datas)
  
   window.location.reload();

    
    // ...
  } )
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    seterr("Invalid Credntials.Please Try Again!");

  });
}
    return (
        <div>
            <img className="login_logo" src="https://ik.imagekit.io/javaprojects/amazon-png-logo-vector-6695_VFeZUZcHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647941128184"/>
            <div className="login_space">
      <div className='amazonsigns'>Sign-In</div>
      <div className="infolog">{err}</div>
      <div className="login_rows"><form>
          <div className='email'>Email or mobile phone number </div>
      <input className="login_field login_rows" onChange={(event)=>{setemails(event.currentTarget.value);console.log(emails)}} type="text" /><br/>
      <div className='email'>Password</div>
      <input className="login_field login_rows" onChange={(event)=>{setpasswords(event.currentTarget.value);console.log(passwords)}} type="password" />
    </form></div>
    <div className="login_but"><Button id="login_button" onClick={authenticates}>Log In</Button></div>
    <div className='email'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
    
   
    </div><div className='sep'>
    <span className="login_separator">--------------------</span>
    <span className="login_separator">New to Amazon?</span>
    <span className="login_separator">-------------------</span></div>
    
        </div>
    )
}

export default Signin
