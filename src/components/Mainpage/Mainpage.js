import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./mainpage.css"
import Ads from '../advertisements/Ads';
const Mainpage = () => {
  return (
    <div > 
<Carousel id="test">
        <Carousel.Item interval={3000}>
          <img
            className=" d-block w-100"
src="https://ik.imagekit.io/javaprojects/amazon-image/1348517_in_prime_2_pd_3000x1200_Eng._CB663273097_.jpg_La1eRmD02.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646887521484"
            alt="Image One"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
src="https://ik.imagekit.io/javaprojects/amazon-image/bigimage4_zzWR8ZH_sq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887521858"
            alt="Image Two"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
src="https://ik.imagekit.io/javaprojects/amazon-image/bigimage3_5KiHRznGc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887521524"
            alt="Image Two"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
src="https://ik.imagekit.io/javaprojects/amazon-image/bigimage2_XMWhL_BPq3Rr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646887521162"
            alt="Image Two"
          />
          
        </Carousel.Item>
        
      </Carousel>
      




    </div>
  )
}

export default Mainpage