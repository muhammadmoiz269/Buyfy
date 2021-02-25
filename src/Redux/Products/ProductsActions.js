import { storage, serverTimeStamp, firestore } from "../../Firebase/Firebase"
import {v4 as uuid} from 'uuid';
import firebase from "./../../Firebase/Firebase"
import { SET_PRODUCTS, CLEAR_PRODUCTS } from "./ProductsConstant";

//admin side stuff
export var uploadProduct = (productObj) => async() => {
    try {
    //   1-send file to storage and get download URL
    var imageRef=storage.child(`products/img-${uuid()}`);
    var fileListener=imageRef.put(productObj.coverPhoto);

    //file listener takes 4 argumnets
    //fileListener.on(event type, cb file state, cb error, cd will trigger after file upload)
    fileListener.on("state_changed",
     (snapshot) =>{
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("Upload is "+progress+" % done")
    },
    (error)=>{
        console.log(error)
    },
    async ()=>{
        //will trigger after completion
        var downloadURL=await imageRef.getDownloadURL();

        //modify productObj with coverPhoto URL and created At
        productObj.coverPhoto=downloadURL;
        productObj.createdAt=serverTimeStamp();
        productObj.cost=parseFloat(productObj.cost);
        productObj.quantity=parseInt(productObj.quantity);

        //create doc at firestore
        await firestore.collection("products").add(productObj);
        console.log(productObj)
    }
    )
    } catch (error) {
        console.log(error)
    }
}


//products side stuff
export var fetchProducts=()=> async (dispatch)=>{
    try {
        var query = await firestore.collection("products").get();
        var products=[];
        query.docs.forEach((doc) => {
            products.push({...doc.data(), id:doc.id})
        })
        dispatch({
            type : SET_PRODUCTS,
            payload: {
                products     //array

            }
        })
        // categorizedProducts(products)
    } catch (error) {
        console.log(error)
        
    }
}

export var fetchCategoryProducts=(category)=> async (dispatch)=>{
    try {
        var query = await firestore.collection("products").where("category","==",category).get();
        var products=[];
        query.docs.forEach((doc) => {
            products.push({...doc.data(), id:doc.id})
        })
        dispatch({
            type : SET_PRODUCTS,
            payload: {
                products     //array

            }
        })

    } catch (error) {
        console.log(error)
    }
}

export var fetchSpecificProduct=(productId)=> async (dispatch)=>{
    try {
        var query=await firestore.collection("products").doc(productId).get()
        var product =query.data();
        return product
        
    } catch (error) {
        console.log(error)
    }

}
export var clearProducts =() => async(dispatch)=>{
    try {
        dispatch({
            type:CLEAR_PRODUCTS
        })
        
    } catch (error) {
        console.log(error)
        
    }

}