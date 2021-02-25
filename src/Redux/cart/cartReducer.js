import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,DELETE_PRODUCT_FROM_CART} from './cartConstant'
import { productAdditionInCart, productRemoveFromCart } from '../../utility/product';
var initialState=[];
var cartReducer=(state=initialState,action)=>{
    var {type,payload}=action;
    switch (type) {
       case ADD_PRODUCT_TO_CART:
           return productAdditionInCart(state,payload.product)
        case REMOVE_PRODUCT_FROM_CART:
            return productRemoveFromCart(state,payload.productId)

        case DELETE_PRODUCT_FROM_CART:
            return state.filter((product)=> product.id !== payload.productId );
          
      

        default:
            return state;
    }
}

export default cartReducer;
