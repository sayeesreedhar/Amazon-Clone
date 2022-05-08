import React from 'react'
import { Grid } from '@material-ui/core';
import Leftproductlistpage from './Leftproductlistpage';
import "./productlistpage.css";
import Rightproductlistpage from './Rightproductlistpage';
const Productlistpage = () => {
  return (
    <div >
        <Grid container spacing={0}>
  <Grid item xs={2}>
    <div className='contents' ><Leftproductlistpage/></div>
  </Grid>
  <Grid item xs={10}><div className='borderline'>
    
    <Rightproductlistpage/></div>
  </Grid>
  
</Grid>
     


    </div>
  )
}

export default Productlistpage