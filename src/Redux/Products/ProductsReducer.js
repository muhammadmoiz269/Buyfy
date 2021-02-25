import { SET_PRODUCTS, CLEAR_PRODUCTS } from "./ProductsConstant";

var initialState=[];
var ProductsReducer=(state=initialState,action)=>
{
    var {type,payload}= action;
    switch (type) {
        case SET_PRODUCTS:
            return[...payload.products]
      
        case CLEAR_PRODUCTS:
            return []
    
        default:
            return state;
    }

}

export default ProductsReducer;