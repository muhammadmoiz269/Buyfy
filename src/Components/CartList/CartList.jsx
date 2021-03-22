import React from 'react'
import CartListItem from '../CartListItem/CartListItem'
import { connect } from 'react-redux'
import "./CartList.css"

const CartList = ({CartItems}) => {
    // console.log(CartItems)
    return (
        <div className="cart-list">
            {/* <h1>cart List</h1> */}
        {CartItems.map((item)=><CartListItem key={item.id} {...item}/>)}
    

        </div>
    )
}

var mapState=(state)=>({
    CartItems:state.cart
})
export default connect(mapState)(CartList)
