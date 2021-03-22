import React,{useEffect, useState} from 'react'
import { fetchProducts } from '../../Redux/Products/ProductsActions'
import { categorizedProducts } from '../../utility/product'
import CategoryListItem from '../CategoryListItem/CategoryListItem'
import { connect } from 'react-redux'
import "./CategoryList.css"

// import { render } from 'react-dom'
// import { useSpring, animated as a } from 'react-spring'


// function Card() {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
//     <div mousemove={() => set(state => !state)}>
//       <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
//       <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
//     </div>
//   )
// }




const CategoryList = ({fetchProducts,categories}) => {
    
    useEffect(()=>{
        //Component did mount
        fetchProducts();
    },[])
    return (
       
        <div className="category_list">
             <div className="slider">
               <div className="left">
               <div class="man man1"></div>
              <div class="man man2"></div>
               </div>

               <div className="right">       
               <div class="intro intro1 flex">
            
          <p>Nike <br/> New  Arrival <span className="date"><br/>2021.</span></p>


      
          </div>

         
               </div>
            
        </div>
            <div className="catlistitem">
            {categories.map((category) => <CategoryListItem key={category.category} {...category}/>)}

            </div>
          
        
         

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
