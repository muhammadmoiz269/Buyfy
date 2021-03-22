import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCategoryProducts, clearProducts } from '../../Redux/Products/ProductsActions'
import Category from '../Category/Category'
import ProductCard from '../../Components/ProductCard/ProductCard'
import "./CategoryProducts.css"

const CategoryProducts = ({match:{params:{category},},fetchCategoryProducts,products,clearProducts}) => {
    useEffect(() => {
        //CDM
        fetchCategoryProducts(category)
        return()=>{
            clearProducts()
        }
    },[])
//    console.log(products)
    return (
        <div className="category-products">
              <p className="category_heading">{category}</p>
            <div className="category_products_list">

            {products.map((product)=><ProductCard key={product.title} {...product}/>)}
            </div>
          
        </div>
    )
}



var actions={
    fetchCategoryProducts,
    clearProducts
}
var mapState=(state)=>({
products:state.products
})
export default connect(mapState,actions)(CategoryProducts)
