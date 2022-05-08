import React from 'react'
import './ads.css'
const Advertisement1 = ({img,title}) => {
  return (
    <div className='ad4'>
        <div className='topad'>{/*Upto 70% Off on Electronic Gadgets*/}{title}
           <div className='midad'><img className="ad1img" src={img}/>
           
               <div className='botad'>See more</div>
           </div>
       </div>


    </div>
  )
}

export default Advertisement1