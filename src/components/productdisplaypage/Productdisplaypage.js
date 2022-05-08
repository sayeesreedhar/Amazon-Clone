import { Grid,Button } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React, { useContext, useState } from 'react'
import "./productdisplaypage.css"; 
import { useParams } from 'react-router-dom';
import { Cartcontext } from '../Cartcontext';
const availableproducts={"img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Uxvh3OvuI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887536972","name":"Apple Iphone 12 (128GB) - Green","rating":"na"
,"price":"Rs.72,520","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "}
const Productdisplaypage = () => {
  const {item,size,increment}=useContext(Cartcontext);
  let {id}=useParams();
  
  const[list,setlist]=React.useState([]);
  const[desc,setdesc]=React.useState([]);
  React.useEffect(()=>{const availableproducts=[{"uid":"123456","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Uxvh3OvuI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887536972","name":"Apple Iphone 12 (128GB) - Green","rating":"na"
  ,"price":"Rs.75,630","prs":75630,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"213456","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__5_3QBG88Iszr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887537267","name":"Samsung Galaxy Note 20 (256GB) - Green","rating":"na"
  ,"price":"Rs.64,630","prs":64630,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"124356","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__UEXqEEJfb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887537691","name":"Samsung Galaxy 21 Ultra 5G (256GB) - Green","rating":"na"
  ,"price":"Rs.83,940","prs":83940,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"123465","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__xswcrHl1H.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887535694","name":"One Plus 9 Lite (128GB) - Green","rating":"na"
  ,"price":"Rs.42,320","prs":42320,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"123546","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__s6CiWIurpS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887534133","name":"Apple Iphone XR (64GB) - White","rating":"na"
  ,"price":"Rs.32,560","prs":32560,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"12345643","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__Z78M5nJ_g5Af.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887535912","name":"One Plus Nord 2 (128GB) - Green","rating":"na"
  ,"price":"Rs.32,330","prs":32330,"delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "}];//let tes=availableproducts.filter((cur)=>{if(cur.uid==id)return cur});console.log(tes);setlist(tes[0])
  const opt= {
    method: 'GET',
    
    headers: {
      'Content-Type': 'application/json'
    }
    
  }
fetch('http://localhost:8080/product/all',opt)
.then(response => response.json()).then(data => {
console.log('Success:', data);console.log(list);let tes=data.filter((cur)=>{if(cur.pid==id)return cur});console.log(tes);setlist(tes[0])
})
.catch(err => console.log(err))
},[]);
var m=list.price?list.price:0;
var x=m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var r=list.rating?list.rating:4;
  console.log(x);
  return (
    <div>
         {/*<Grid container spacing={0}>
  <Grid item xs={5}>
    <img className='productimg' src={list.img}/>
  </Grid>
  <Grid item xs={5}>
    <div>
    <div className='producttitle'>{list.name}<div className='productsite'><div style={{fontWeight:"bold",color:"black"}}><Rating name="read-only" value={4} style={{fontSize:"17px"}}/>|52,235 ratings</div>Visit product store</div></div>
    <div ><div className='productprice'>Price:<div className='productsites'>{list.price}</div></div></div><div className='tax'>Inclusive  of all taxes</div>
    <div className='emi'>EMI starts at Rs.3250. <div>No cost EMI available</div></div>
    <div className='save'>Save Extra: <div className='saves'>with 4 offers</div></div>
    <div className='save'>Bank Offer:<div className='saves'>Flat Rs.5000 on HDFC Debit/Credit cards</div></div>
    <div className='save'>No cost EMI:<div className='saves'>Avail no cost EMI on select cards</div></div>
    <div className='productsite'>7 day replacement only
    <div className='stocksi'>
          <ul>
              <li>15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel</li>
              <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
              {/*list.description?list.description.map((cur)=>(<li>{cur}</li>)):<div></div>}
              <li>A15 Bionic chip for lightning-fast performance</li>
              <li>Up to 22 hours of video playback</li>
            <li>Durable design with Ceramic Shield</li>
              
              
              
              
              </ul></div>
    
    
    
    </div>
    


    </div>
    
  </Grid>
  <Grid item xs={2}>
  <div className='pricecard'>
  <div className='producttitles'>Without Exchange<div className='productsites'>{list.price}</div></div>
    <div ><div className='productprices'>Free Delivery<div className='productpriceis'>Friday,March 18</div></div></div><div className='taxes'>Sold By Appario Retail Private Ltd</div>
    <div className='emi'>and <div>Fulfilled by Amazon.</div></div>
    <div>Add Accessory:</div>
    <div className='saves'><input type="checkbox"/>Airpods: <div className='saves'>Rs.20,000</div></div>
    <div className='saves'><input type="checkbox"/>Charger:<div className='saves'>Rs.2,000</div></div>
    <div id="but" ><Button onClick={()=>{increment(list)}}>Add to cart</Button></div>
    <div id="but1"><Link to="/cart" style={{textDecoration:"none"}}><Button  onClick={()=>{increment(list)}}>Buy Now</Button></Link></div>
    <div className='productsite'>Secure Transaction</div></div>

    
    </Grid>
  
</Grid>*/}

<Grid container spacing={0}>
  <Grid item xs={5}>
    <img className='productimg' src={list.img}/>
  </Grid>
  <Grid item xs={5}>
    <div>
    <div className='producttitle'>{list.name}<div className='productsite'><div style={{fontWeight:"bold",color:"black"}}><Rating name="read-only" value={r} style={{fontSize:"17px"}}/>|{list.ratingcnt} ratings</div>Visit product store</div></div>
    <div ><div className='productprice'>Price:<div className='productsites'>{"Rs."+x}</div></div></div><div className='tax'>Inclusive  of all taxes</div>
    <div className='emi'>EMI starts at Rs.{list.emi}. <div>No cost EMI available</div></div>
    <div className='save'>Save Extra: <div className='saves'>with 4 offers</div></div>
    <div className='save'>Bank Offer:<div className='saves'>Flat Rs.{list.discount} on HDFC Debit/Credit cards</div></div>
    <div className='save'>No cost EMI:<div className='saves'>Avail no cost EMI on select cards</div></div>
    <div className='productsite'>7 day replacement only
    <div className='stocksi'>
          <ul>
              {/*<li>15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel</li>
              <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>*/}
              {list.description?list.description.map((cur)=>(<li>{cur}</li>)):<div></div>}
              {/*<li>A15 Bionic chip for lightning-fast performance</li>
              <li>Up to 22 hours of video playback</li>
            <li>Durable design with Ceramic Shield</li>*/}
              
              
              
              
              </ul></div>
    
    
    
    </div>
    


    </div>
    
  </Grid>
  <Grid item xs={2}>
  <div className='pricecard'>
  <div className='producttitles'>Without Exchange<div className='productsites'>{"Rs."+x}</div></div>
    <div ><div className='productprices'>Free Delivery<div className='productpriceis'>Friday,March 18</div></div></div><div className='taxes'>Sold By {list.seller}</div>
    <div className='emi'>and <div>Fulfilled by Amazon.</div></div>
    <div>Add Accessory:</div>
    <div className='saves'><input type="checkbox"/>Airpods: <div className='saves'>Rs.20,000</div></div>
    <div className='saves'><input type="checkbox"/>Charger:<div className='saves'>Rs.2,000</div></div>
    <div id="but" ><Button onClick={()=>{increment(list)}}>Add to cart</Button></div>
    <div id="but1"><Link to="/cart" style={{textDecoration:"none"}}><Button  onClick={()=>{increment(list)}}>Buy Now</Button></Link></div>
    <div className='productsite'>Secure Transaction</div></div>

    
    </Grid>
  
</Grid>


    </div>
  )
}

export default Productdisplaypage