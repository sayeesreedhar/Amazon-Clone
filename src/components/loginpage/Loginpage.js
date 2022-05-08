import React from 'react';
//import "./instagram.css";

import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
import Signin from './Signin';
import Signup from './Signup'
import "./login.css";


const Loginpage = () => {
  const [login, setlogin] = React.useState(true);
  
    return (
        <>
        <Grid container spacing={0}>
  <Grid item xs={4}>
    
  </Grid>
  
  <Grid item xs={5}>
    {login?<Signin/>:<Signup/>}
    {login?<div className="login_signupspace">
     <Button id="login_facebooktext" onClick={()=>{login?setlogin(false):setlogin(true);}}>Create your Amazon account</Button>
    </div>:<div className="login_signupspaces">
    <div className='email'>Already have an account?</div><Button id="login_facebooktexts" onClick={()=>{login?setlogin(false):setlogin(true);}}>Log In</Button>
    </div>}
    
    
    
    
  </Grid>
  <Grid item xs={3} >
    
    
  </Grid>
  </Grid>
  
      
  
            
        </>
    )
}

export default Loginpage

