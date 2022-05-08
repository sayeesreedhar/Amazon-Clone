import React, { useState } from 'react'
import "./productlistpage.css";
const Leftproductlistpage = () => {
    const [brand,setbrand]=React.useState(["Apple","Asus","LG","Samsung","Sony"]);
    const cost=["Under Rs.5000","Rs.5000-Rs.10000","Rs.10000-Rs.20000","Rs.20000-Rs.30000","Rs.30000-Rs.40000","Rs.40000-Rs.50000","Over Rs.50000"] 
//var brands;
/*React.useEffect(() => {brands=["Apple","Asus","LG","Samsung","Sony"];
    //Runs only on the first render
  }, setbrand(brands));*/
  return (
    <div className='pads'>
      <div className='title'>Brands</div>
      {brand.map((cur)=><div className='test'><input type="checkbox"/>{cur}</div>)}
      <div className='title'>Price</div>
      {cost.map((cur)=><div><input type="checkbox"/>{cur}</div>)}



    </div>
  )
}

export default Leftproductlistpage