import React from 'react'
import firebase from 'firebase'
import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
firebase.initializeApp({
    apiKey: "AIzaSyCKJx1TOVPuCchOMKBB7z_bAWHExdrpMDc",
    authDomain: "clone-aee3b.firebaseapp.com",
    projectId: "clone-aee3b",
    storageBucket: "clone-aee3b.appspot.com",
    messagingSenderId: "745342179278",
    appId: "1:745342179278:web:c0177abbed20cf10ce3d9f",
    measurementId: "G-HSC6E6CZ7B"
});
  
const Signup = () => {
    const [email, setemail] = React.useState(null);
    const [fullname, setfullname] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    const [username, setusername] = React.useState(null);
    const [info, setinfo] = React.useState("");
    const newsignup=()=>{firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        setinfo("You have been registered successfully.Login to continue");
        console.log(info);
        const params={
            "uid":user.uid,
            "email":email,
            "address":username,
            "name":fullname
        }
        const opt= {
            method: 'POST',
            
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }
        fetch('http://localhost:8080/users',opt)
  .then(response => response.json()).then(data => {
    console.log('Success:', data);
  })
  .catch(err => console.log(err))
  
        // ...
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setinfo("Invalid email id or password.Ensure that the password contains minimum of 8 alphanumeric values");
        // ..
        localStorage.setItem("username",username);
      });}
    return (
        <div>
            <img className="login_logo" src="https://ik.imagekit.io/javaprojects/amazon-png-logo-vector-6695_VFeZUZcHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647941128184"/>
        <div className="login_spaces">
        <div className='amazonsignss'>Create Account</div>
      <div className="infolog">{info}</div>
      <div className="login_rows"><form>
      <div className='email'>Email or mobile phone number </div>
      <input className="login_field login_rows" onChange={(event)=>{setemail(event.currentTarget.value);console.log(email)}} type="text" /><br/>
      <div className='email'>Full Name</div>
      <input className="login_field login_rows" onChange={(event)=>{setfullname(event.currentTarget.value);console.log(fullname)}} type="text" /><br/>
      <div className='email'>Address </div>
      <input className="login_field login_rows" onChange={(event)=>{setusername(event.currentTarget.value);console.log(username)}} type="text" /><br/>
      <div className='email'>Password </div>
      <input className="login_field login_rows" onChange={(event)=>{setpassword(event.currentTarget.value);console.log(password)}}type="password" />
    </form></div>
    <div className="login_but"><Button id="login_button" onClick={newsignup}>Sign Up</Button></div>
    <div className="email">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</div>
    
        </div></div>
    )
}

export default Signup
