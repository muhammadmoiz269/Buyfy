import React from 'react'
import CartListItem from '../CartListItem/CartListItem'
import { connect } from 'react-redux'

const CartList = ({CartItems}) => {
    console.log(CartItems)
    return (
        <div>
            <h1>cart List</h1>
        {CartItems.map((item)=><CartListItem key={item.id} {...item}/>)}

        </div>
    )
}

var mapState=(state)=>({
    CartItems:state.cart
})
export default connect(mapState)(CartList)
