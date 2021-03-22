import React,{useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { connect } from 'react-redux'
import { calculateTotal } from '../../utility/checkout'
import OrderForm from '../../Components/OrderForm/OrderForm'
import "./Checkout.css"
import Header from "./../../Components/Header/Header"
import MaterialUibutton from "./../../Components/MaterialUibutton/MaterialUibutton"
import { openModel } from '../../Redux/Modal/ModelActions'


const Checkout = ({total,openModel}) => {
    var [shipFormSHown, setshipFormShown]=useState(false)
    return ( 
        <div className="checkout-page-container">
            <div className="checkout">
        <Header  style={{letterSpacing:"5px", wordSpacing:"10px"}} fontSize={36} fontWeight="semi-bold" color="#47C1BF" >SHOPPING CART</Header>
            <CheckoutList/>
           
            <div  className="checkout-bottom-content">
        <Header   fontWeight="semi-bold" fontSize={20} color="#3F51B5" >Total : $ <span>{total}</span></Header>
        <MaterialUibutton style={{cursor:"pointer"}} onClick={()=>openModel({ modelType: "addressFormModel" })} >Proceed & Pay</MaterialUibutton>


            </div>
    
            </div>
           
        </div>
    )
}

var mapState=(state)=>({
    total:calculateTotal(state.cart)
})

var actions={
    openModel

}
export default connect(mapState,actions)(Checkout)
