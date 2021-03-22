import React from 'react'
import CartList from '../CartList/CartList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { generateOrder } from '../../Redux/order/orderActions'
import "./Cart.css"
import Header from "./../Header/Header"
import MaterialUibutton from "./../MaterialUibutton/MaterialUibutton"


//


const Cart = ({generateOrder,cart}) => {
    return (
        <div className="cart">
            <Header  fontSize={20} fontWeight="medium" color="#47C1BF" style={{letterSpacing:"5px"}} >SHOPPING CART</Header>
            <CartList/>
             
            { cart.length > 0 ? <MaterialUibutton style={{cursor:"pointer"}} onClick={generateOrder}>Checkout</MaterialUibutton> : 
            <MaterialUibutton disabled="true" >Checkout</MaterialUibutton>
            
        }
       
         
            
                
        </div>
    )
}


var actions={
generateOrder    
}
var mapState=(state)=>({
    cart:state.cart
})
export default connect(mapState,actions)(Cart)
