import React, { useContext } from 'react'
import "./navbar.css"
import { Carousel } from 'react-bootstrap';
import Mainpage from '../Mainpage/Mainpage';
import { Cartcontext } from '../Cartcontext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const opts=["All Categories","Electronics","Mobiles","Computers and Laptops","Household"];

const Navbar = () => {
  const {item,size,increment}=useContext(Cartcontext);
  return (
    <div>
      <div className='logopos'>
        <Link to=""><img className='logo' src="https://ik.imagekit.io/javaprojects/PikPng.com_amazon-logo-png_3272114_FXwO73GdQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646830311419"/></Link>  
     <div className='locationadjust '><div className='locations'></div><div className='place'>Bangalore</div></div>
     <div  className='search'><select className='options'>
         <option >All</option>
         {opts.map((cur)=><option>{cur}</option>)}
         
         </select>
     
     
     
     <input   type="text" className='searchfield'/>
     </div><div className='searchlogo'><div className='searchicons'></div></div>
     
     <div className='up'>Hello, Sayee
       <div className='down'>Accounts & Lists</div>
     </div>
     <div className='up'>Returns
       <div className='down'>& Orders</div>
     </div>
     <div className='cartcount'>{size}</div>
       <Link className=" carts"  to="/cart"><div className='cartlogo'><div className='cart'>Cart</div>
     </div></Link>
     



     </div>
     
     
      
    </div>
  )
}

export default Navbar