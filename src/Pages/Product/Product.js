import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchSpecificProduct } from '../../Redux/Products/ProductsActions'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Product = ({fetchSpecificProduct, match:{params:{productId}}}) => {
    
    var [product,setProduct]= useState({})
    useEffect(async()=>{
    var productData = await fetchSpecificProduct(productId)
    setProduct(productData)
    
    },[])
    return (
        <div>
            <h1>Product page</h1>
            {product.title && <ProductCard {...product}/>}

       
        </div>

    )
}


var actions={
    fetchSpecificProduct
}
export default connect(null,actions)(Product)
