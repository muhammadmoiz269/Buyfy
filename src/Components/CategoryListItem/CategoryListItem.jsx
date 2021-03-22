import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import "./CategoryListItem.css"
const CategoryListItem = ({category,products}) => {
    return (
        <div className="category_List_Item">

          {/* <p className="category-text"><Link to={`/category-product/${category}`}>{category}</Link></p> */}
           
            {products.map((product)=><ProductCard key={product.title} {...product}/>)}
            
        </div>
    )
}

export default CategoryListItem
