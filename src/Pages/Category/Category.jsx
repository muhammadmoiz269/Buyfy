import React,{useEffect} from 'react'
import CategoryList from '../../Components/CategoryList/CategoryList'
import { connect } from 'react-redux'
import { clearProducts } from '../../Redux/Products/ProductsActions'
import "./Category.css"

const Category = ({clearProducts}) => {
    useEffect(()=>{
        return()=>{
         clearProducts();
        }
    },[])
    return (
        <div className="category">
        
           <CategoryList/>
        </div>
    )
}




var actions={
    clearProducts
}
export default connect(null,actions)(Category)
