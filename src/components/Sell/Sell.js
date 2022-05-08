import React from 'react'
import firebase from 'firebase'
import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
import "./sell.css"
const Sell = () => {
    const [brand, setbrand] = React.useState(null);
    const [name, setname] = React.useState(null);
    const [category, setcategory] = React.useState(null);
    const [price, setprice] = React.useState(0);
    const [discount,setdiscount]=React.useState(0);
    const [emi,setemi]=React.useState(0);
    const [info, setinfo] = React.useState("");
    const [rating, setrating] = React.useState(0);
    const [vendor, setvendor] = React.useState("");
    const [img, setimg] = React.useState("");
    const [con1, setcon1] = React.useState("");
    const [con2, setcon2] = React.useState("");
    const [con3, setcon3] = React.useState("");
    const [con4, setcon4] = React.useState("");
    var a=[]
    const newsignup=()=>{
      
        console.log(info);
        var a=[con1,con2,con3,con4];
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(img.name).put(img);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);


      const params={
        "pid":Math.floor(Math.random()*100000).toString(),
        "brand":brand,
        "price":price,
        "name":name,
        "category":category,
        "discount":discount,
        "rating":rating,
        "seller":vendor,
        "img":downloadURL,
        "emi":emi,
        "ratingcnt":Math.floor(Math.random()*10000),
        "description":a
    }
    const opt= {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    fetch('http://localhost:8080/product/add',opt)
.then(response => response.json()).then(data => {
console.log('Success:', data);setinfo("Product uploaded successfully")
})
.catch(err => console.log(err))



    });
  }
);
       
        
  
     
       
      }
  return (
    <div>
        <div className="sell_spaces">
        <div className='amazonsignss'>Upload a product</div>
      <div>{info}</div>
      <div><form  className="login_rowssell">
      <div className='emails'>Product Brand<br/>
      <input className="login_fields" onChange={(event)=>{setbrand(event.currentTarget.value);console.log(brand)}} type="text" /></div><br/>
      
      <div className='emails'>Product Name<br/>
      <input className="login_fields" onChange={(event)=>{setname(event.currentTarget.value);console.log(name)}} type="text" /></div><br/>

      <div className='emails'>Product Category<br/>
      <input className="login_fields" onChange={(event)=>{setcategory(event.currentTarget.value);console.log(category)}} type="text" /></div><br/>
     
      <div className='emails'>Product Price<br/>
      <input className="login_fields" onChange={(event)=>{setprice(event.currentTarget.value);console.log(price)}} type="number" /></div><br/>

      <div className='emails'>Discount<br/>
      <input className="login_fields" onChange={(event)=>{setdiscount(event.currentTarget.value);console.log(discount)}} type="number" /></div><br/>

      <div className='emails'>Product Rating<br/>
      <input className="login_fields" onChange={(event)=>{setrating(event.currentTarget.value);console.log(rating)}} type="number" /></div><br/>

      <div className='emails'>Registered Vendor Name<br/>
      <input className="login_fields" onChange={(event)=>{setvendor(event.currentTarget.value);console.log(vendor)}} type="text" /></div><br/>
       
      <div className='emails'>Upload a product image<br/>
      <input className="login_fields" onChange={(event)=>{setimg(event.currentTarget.files[0]);console.log(img)}} type="file" /></div><br/>
     
      <div className='emails'>Product EMI<br/>
      <input className="login_fields" onChange={(event)=>{setemi(event.currentTarget.value);console.log(emi)}} type="number" /></div><br/>

      <div className='emails'>Product description<br/>
      <input className="login_fields" onChange={(event)=>{setcon1(event.currentTarget.value);console.log(a)}} type="text" placeholder='1.'/><br/>
      <input className="login_fields" onChange={(event)=>{setcon2(event.currentTarget.value);console.log(a)}} type="text" placeholder='2.'/><br/>
      <input className="login_fields" onChange={(event)=>{setcon3(event.currentTarget.value);console.log(a)}} type="text" placeholder='3.'/><br/>
      <input className="login_fields" onChange={(event)=>{setcon4(event.currentTarget.value);console.log(a)}} type="text" placeholder='4.'/></div><br/>


      
     

    </form></div><div className='lastpart'>
    <div className="login_but"><Button id="login_button" onClick={newsignup}>Upload product</Button></div>
    <div >By uploading a product, you agree to Amazon’s Conditions of Use and Privacy Policy.</div></div>
    
        </div>

        <div className='sellblank'></div>



    </div>
  )
}

export default Sell