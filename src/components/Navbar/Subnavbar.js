import React from 'react'
import "./navbar.css"
import firebase from 'firebase'
import {Button,Grid, makeStyles, Paper,Box, styled} from '@material-ui/core'
import { Link } from 'react-router-dom'
const sub=["Best Sellers","Mobiles","Customer Servcice","Today's Deals","Electronics","Fashions","Books","New Releases"];
const Subnavbar = () => {
  const logout=()=>{firebase.auth().signOut().then(() => {
    // Sign-out successful.
    localStorage.removeItem("test");
    window.location.reload();
  }).catch((error) => {
    // An error happened.
  });}
  return (
   <div className='submenus'><div className='opticon'></div>All <div className='submenu'>{sub.map((cur)=><div className='submenuopts'>{cur}</div>)}<Link className='sells' to="/sale"><div className='submenuopts'>Sell</div></Link><Button id="logout" onClick={logout}>Logout</Button></div></div>
  )
}

export default Subnavbar