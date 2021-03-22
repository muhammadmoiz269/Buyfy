import React from 'react'
import { connect } from 'react-redux'
import { deleteProductFromCart, removeProductFromCart, addProductToCart } from '../../Redux/cart/cartActions'
import "./CartListItem.css"
import Paragraph from "./../Paragraph/Paragraph"


const CartListItem = ({addProductToCart,removeProductFromCart,deleteProductFromCart,...product}) => {
    var {title,cost,quantity,id,coverPhoto}=product;
    // console.log(id);
    return (
        <div className="cart-list-item">
            <div style={{background:`url(${coverPhoto})`, backgroundSize:"100% 100%, cover" ,backgroundRepeat:"no-repeat"}} className="cart-item-img"></div>
            <div className="cart-item-desc">
            <Paragraph fontSize={15} color="#47C1BF" >{title}</Paragraph>
               
                <div style={{display:"flex", alignItems:"center"}}>
                    <Paragraph fontWeight="bold" color="#3d3d3d" fontSize={13}>{cost}$ X {quantity} =</Paragraph>
                    <Paragraph fontSize={13} fontWeight="bold" color="#3d3d3d">${cost * quantity}</Paragraph>

                  
                </div>
            </div>

            {/* <h1>{title} - {cost} - <button onClick={()=>deleteProductFromCart(id)}>X</button></h1>
            <h3><button onClick={()=>addProductToCart(product)}>+</button> {quantity} <button onClick={()=>removeProductFromCart(id)}>-</button></h3> */}
        </div>
    )
}



var actions={
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart, 
}
export default connect(null,actions)(CartListItem)
