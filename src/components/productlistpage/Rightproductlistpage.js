import React, { useEffect,useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import "./productlistpage.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const Rightproductlistpage = () => {
  const[list,setlist]=useState([]);
  const[temp,settemp]=useState([]);
  useEffect(()=>{const availableproducts=[{"uid":"123456","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Uxvh3OvuI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887536972","name":"Apple Iphone 12 (128GB) - Green","rating":"na"
  ,"price":"Rs.72,520","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"213456","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__5_3QBG88Iszr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887537267","name":"Samsung Galaxy Note 20 (256GB) - Green","rating":"na"
  ,"price":"Rs.64,630","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"124356","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__UEXqEEJfb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887537691","name":"Samsung Galaxy 21 Ultra 5G (256GB) - Green","rating":"na"
  ,"price":"Rs.83,940","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"123465","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__xswcrHl1H.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887535694","name":"One Plus 9 Lite (128GB) - Green","rating":"na"
  ,"price":"Rs.42,320","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"123546","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__s6CiWIurpS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887534133","name":"Apple Iphone XR (64GB) - White","rating":"na"
  ,"price":"Rs.32,560","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "},{"uid":"12345643","img":"https://ik.imagekit.io/javaprojects/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__Z78M5nJ_g5Af.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646887535912","name":"One Plus Nord 2 (128GB) - Green","rating":"na"
  ,"price":"Rs.32,330","delivery":"Get it By tomorrow,9am","discount":"Flat INR 5000 Off on HDFC Debit/Credit cards "}];setlist(availableproducts)
  const opt= {
    method: 'GET',
    
    headers: {
      'Content-Type': 'application/json'
    }
    
  }
fetch('http://localhost:8080/product/all',opt)
.then(response => response.json()).then(data => {
console.log('Success:', data);settemp(data);console.log(temp);
})
.catch(err => console.log(err))},[]);
  return (
    <div className='products'>
        {/*list.map((cur)=>(<Link to={"/product/"+cur.uid} style={{textDecoration:'none'}}><div className='productcard'>
         <div className='productimage'><img className='productimage' src={cur.img}/></div>
         <div className='producttitles'>{cur.name}</div>
         <div style={{display:"flex"}}><Rating name="read-only" value={4} style={{fontSize:"17px",zIndex:"-10"}}/><div style={{fontWeight:"bold",fontSize:"14px"}}>|52,235 ratings</div></div>
         <div className='productpricess'>{cur.price}</div>
         <div className='productdiscount'>{cur.discount}</div>
         <div className='productdelivery'>{cur.delivery}</div>
         <div> Delivery By Amazon</div>






  </div></Link>))*/}
        {temp.map((cur)=>(<Link to={"/product/"+cur.pid} style={{textDecoration:'none'}}><div className='productcard'>
         <div className='productimage'><img className='productimage' src={cur.img}/></div>
         <div className='producttitles'>{cur.name}</div>
         <div style={{display:"flex"}}><Rating name="read-only" value={cur.rating} style={{fontSize:"17px",zIndex:"-10"}}/><div style={{fontWeight:"bold",fontSize:"14px"}}>|{cur.ratingcnt}ratings</div></div>
         <div className='productpricess'>Rs.{cur.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
         <div className='productdiscount'>Flat INR{" "+cur.discount+" "}Off on HDFC Debit/Credit cards</div>
         <div className='productdelivery'>Get it By tomorrow,9am</div>
         <div> Delivery By Amazon</div>






        </div></Link>))}



    </div>
  )
}

export default Rightproductlistpage