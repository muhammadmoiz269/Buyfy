import React,{useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { connect } from 'react-redux'
import { calculateTotal } from '../../utility/checkout'
import OrderForm from '../../Components/OrderForm/OrderForm'

const Checkout = ({total}) => {
    var [shipFormSHown, setshipFormShown]=useState(false)
    return (
        <div>
            <h1>Check Out Page</h1>
            <CheckoutList/>
            <h3>$ {total}</h3>
        { shipFormSHown && <OrderForm/> }
            <button onClick={()=>setshipFormShown(!shipFormSHown)} >Pay Now</button>
        </div>
    )
}

var mapState=(state)=>({
    total:calculateTotal(state.cart)
})
export default connect(mapState)(Checkout)
