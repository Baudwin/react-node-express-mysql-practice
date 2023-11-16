import React from "react";



const Cart = (props)=>{
return  <h4 onClick={()=>props.showCart()} >Cart ({props.cart.length})</h4>

}





export default Cart