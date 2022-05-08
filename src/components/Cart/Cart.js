import React, { useContext, useEffect, useState } from 'react'
import { Grid,Button } from '@material-ui/core';
import "./cart.css";
import { Cartcontext } from '../Cartcontext';
const Cart = () => {
  const {item,size,increment,decrement}=useContext(Cartcontext);
  console.log(item);
  let total=0;
  for(var i=0;i<item.length;i++){
    total=total+item[i].price;
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
let x=numberWithCommas(total)
  console.log(total)
  const[arr,setarr]=useState([]);
 useEffect((item)=>{setarr(item);},);console.log(arr)
  return (
    <div>
                <Grid container spacing={0}>
  <Grid item xs={9}>
   <div className='cartcard'>
    <div className='titlecart'><div className='shoppingcart'>Shopping Cart</div><div className='price'>Price</div></div>{item.length==0?<div>Your cart is empty</div>:""}
    {item.map((cur)=> <div className='contents'><div className='img'><img className='imgs' src={cur.img}/></div><div className='tils'>{cur.name}<div className='stock'>In stock</div><div className='stocks'>Eligible for FREE Shipping</div></div>
      {/*<div className='stocksi'>
          <ul>
              <li>15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel</li>
              <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
              
              <li>A15 Bionic chip for lightning-fast performance</li>
              <li>Up to 22 hours of video playback</li>
              <li>Durable design with Ceramic Shield</li>
              
              
              
              
              </ul></div>*/}<div className='rate'>{cur.price}</div>
              <div className='gift'><input type="checkbox"/>This will be a gift<div className='learn'>Learn more</div></div>
              
              
              <div>
      
      
      
              
              <div className='lists'><div className='qt'>QTY:1</div><div className='qts' onClick={()=>{decrement(cur)}}>Delete</div><div className='qts'>Save for later</div><div className='qts'>See more like this</div></div>
              


              
             
              </div>
              </div>)}
              <div className='subtotals'>Subtotal:Rs.{total!=0?x:0}</div>
  </div>
  
  <div className='blank'></div>
  <div className='disclaimer'>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.

Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</div>
  </Grid>
  <Grid item xs={3}>
   <div className='cartright'>
     <div className='eligible'>Your order is eligible for FREE Delivery</div>
     <div className='eligibles'>Select this option at checkout.<div className='det'>Details</div></div>
     <div className='subtotalssss'>Subtotal:Rs.{total!=0?x:0}</div>
     <div className='giftsss'><input type="checkbox"/>This contains a gift</div>
     <div className='cartbut'><Button>Proceed to Buy</Button></div>

   </div>
    
  </Grid>
  
  
</Grid>





    </div>
  )
}

export default Cart