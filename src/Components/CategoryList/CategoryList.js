import React,{useEffect} from 'react'
import { fetchProducts } from '../../Redux/Products/ProductsActions'
import { categorizedProducts } from '../../utility/product'
import CategoryListItem from '../CategoryListItem/CategoryListItem'
import { connect } from 'react-redux'


const CategoryList = ({fetchProducts,categories}) => {
    
    useEffect(()=>{
        //Component did mount
        fetchProducts();
    },[])
    return (
        <div>
            <h1>Category list</h1>
          {categories.map((category) => <CategoryListItem key={category.category} {...category}/>)}
        
         

        </div>
    )
}


var actions={
    fetchProducts
}
var mapState=(state)=>({
    categories : categorizedProducts(state.products)

})
export default connect(mapState,actions)(CategoryList)
