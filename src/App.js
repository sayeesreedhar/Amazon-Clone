
import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import Ads from './components/advertisements/Ads';
import Subnavbar from './components/Navbar/Subnavbar';
import Productlistpage from './components/productlistpage/Productlistpage';
import Productdisplaypage from './components/productdisplaypage/Productdisplaypage';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CartcontextProvider, { Cartcontext } from './components/Cartcontext';
import Loginpage from './components/loginpage/Loginpage';
import Sell from './components/Sell/Sell';
console.log(localStorage.getItem("test"));
function App() {
  return (<div>{localStorage.getItem("test")==null||localStorage.getItem("test")==undefined?<div><Loginpage/></div>:
    <Router>
    <div><CartcontextProvider> 
    <Navbar/>
    <Subnavbar/>
    <Switch>
    
    <Route path="/display">
    <Productlistpage/>
    </Route>
    <Route path="/product/:id"><Productdisplaypage/></Route>
  <Route path="/cart"><Cart/></Route>
  <Route path="/sale"><Sell/></Route>
  <Route path="">
  <div><Mainpage/>
     <Ads/></div></Route>
</Switch>
   </CartcontextProvider> 
</div></Router>}</div>);
}

export default App;
