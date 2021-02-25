import { combineReducers } from 'redux';
import authReducers from './auth/authReducers';
import ProductsReducer from './Products/ProductsReducer';
import cartReducer from './cart/cartReducer';

var rootReducer= combineReducers({
    auth:authReducers,
    products:ProductsReducer,
    cart:cartReducer
})

export default rootReducer;