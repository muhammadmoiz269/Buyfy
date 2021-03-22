import { combineReducers } from 'redux';
import authReducers from './auth/authReducers';
import ProductsReducer from './Products/ProductsReducer';
import cartReducer from './cart/cartReducer';
import ModelReducer from './Modal/ModelReducer';
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"  //local storage


const persistConfig={
    key: "root",
    storage,
    whitelist: ["auth"]

}
var rootReducer= combineReducers({
    auth:authReducers,
    products:ProductsReducer,
    cart:cartReducer,
    model:ModelReducer
})

export default persistReducer(persistConfig, rootReducer);