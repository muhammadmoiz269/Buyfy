import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const CategoryListItem = ({category,products}) => {
    return (
        <div>
            <h1>{category}</h1>
            {products.map((product)=><ProductCard key={product.title} {...product}/>)}
            <Link to={`/category-product/${category}`}><button>View More</button></Link>
        </div>
    )
}

export default CategoryListItem
