import React from 'react'
import './ads.css'
import Advertisement1 from './Advertisement1'
import Advertisement4 from './Advertisement4'
import Advertisementrow from './Advertisementrow'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const Ads = () => {
  return (<Link to="/display" style={{textDecoration:"none"}}>
    <div className='ads'>
       
      <Advertisement4/>
      <Advertisement4/>
      <Advertisement1 title={"Deal of the Day"} img={"https://ik.imagekit.io/javaprojects/amazon-image/tab9_u4FN_eV6vY7T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887533268"}/>
      <Advertisement1 title={"Grocery & Gourmet Foods"} img={"https://ik.imagekit.io/javaprojects/amazon-image/tab2_bWyxnavIi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887530425"}/>
      <Advertisement4 img1={"https://ik.imagekit.io/javaprojects/amazon-image/box3_4_KiLwbCiK4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887526009"}/>
      <Advertisement4/>
      <Advertisementrow/>

        
        </div></Link>
  )
}

export default Ads