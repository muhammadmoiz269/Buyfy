import React from 'react'
import { connect } from 'react-redux'
import "./CheckoutList.css"
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'
import Paragraph from '../Paragraph/Paragraph'

const CheckoutList = ({CartItems}) => {
    // console.log(CartItems)
    return (
        <div className="checkout-list">
            <div className="checkout-list-item checkout-list-item-extended">
                <Paragraph style={{letterSpacing:"3px",marginBottom:"5px"}} fontSize={24} fontWeight="semi-bold" color="#3F51B5" >Product</Paragraph>
                <Paragraph style={{letterSpacing:"3px",marginBottom:"5px"}} fontSize={24} fontWeight="semi-bold" color="#3F51B5" >Quantity</Paragraph>
                <Paragraph style={{letterSpacing:"3px",marginBottom:"5px"}} fontSize={24} fontWeight="semi-bold" color="#3F51B5" >Price</Paragraph>

            </div>
        {CartItems.map((item)=><CheckoutListItem key={item.id} {...item}/>)}

        </div>
    )
}

var mapState=(state)=>({
    CartItems:state.cart
})
export default connect(mapState)(CheckoutList)
