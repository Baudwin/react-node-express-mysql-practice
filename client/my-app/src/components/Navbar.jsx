import React from "react";
import { Route , BrowserRouter, Router, Link } from 'react-router-dom';


const Navbar = (props)=>{
return <div>
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
  <li><a href="about.asp">{props.att}</a></li>
  <li style={{marginTop:"10px"}}> <button> {props.cart}</button> </li>
  
</ul>

</div>
}

export default Navbar