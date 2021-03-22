import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart, removeProductFromCart, deleteProductFromCart } from '../../Redux/cart/cartActions'
import "./CheckoutListItem.css"
import Paragraph from '../Paragraph/Paragraph'
import Button from "./../Button/Button"
import CloseIcon from '@material-ui/icons/Close';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import MaterialUibutton from "./../MaterialUibutton/MaterialUibutton"


const CheckoutListItem = ({addProductToCart,removeProductFromCart,deleteProductFromCart,...product}) => {
    var {title,cost,quantity,id,coverPhoto}=product;
    return (
        <div className="checkout-list-item">
            <div className="checkout-item-product">
                <div className="checkout-item-image" style={{background:`url(${coverPhoto})`,
                 backgroundSize:"100% 100%"}}>
                </div>
                <Paragraph style={{letterSpacing:"2px"}} fontSize={20} fontWeight="semi-bold" color="#3d3d3d" >{title}</Paragraph>

            </div>
            <div className="checkout-item-quantity center" style={{flexFlow:"row"}}>
                {/* <RemoveOutlinedIcon /> */}
              

                
                 <RemoveRoundedIcon  onClick={()=>removeProductFromCart(id)}/>         
                <Paragraph style={{padding:"10px 20px"}} fontWeight="semi-bold" fontSize={20} color="#3F51B5">{quantity}</Paragraph>
                <AddRoundedIcon onClick={()=>addProductToCart(product)}/>

            </div>
            <div className="checkout-item-price center">
                <Paragraph  style={{letterSpacing:"2px"}} fontSize={20} fontWeight="semi-bold" color="#3d3d3d" > $ {cost} </Paragraph>
            </div>
            <div className="checkout-item-cross center">
            <Paragraph onClick={()=>deleteProductFromCart(id)} style={{cursor:"pointer"}} style={{letterSpacing:"2px"}} fontSize={20} fontWeight="semi-bold" color="#3d3d3d" > 
            <CloseIcon/>
             </Paragraph>

            </div>

            {/* <h1>{title} - {cost} - <button onClick={()=>deleteProductFromCart(id)}>X</button></h1>
            <h3><button onClick={()=>addProductToCart(product)}>+</button> {quantity} <button onClick={()=>removeProductFromCart(id)}>-</button></h3> */}
        </div>
    )
}


var actions={
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart    
}
export default connect(null,actions)(CheckoutListItem)

