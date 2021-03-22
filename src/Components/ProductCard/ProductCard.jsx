import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "../../Redux/cart/cartActions";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paragraph from "../Paragraph/Paragraph";

// style={{background:`url(${coverPhoto})` , backgroundSize:"50% 50%,cover" , backgroundRepeat:"no-repeat"}} 

const ProductCard = ({ addProductToCart, ...product }) => {
  var { title,description, cost, id, coverPhoto,category } = product;
  return (
    <Link to={`/category-product/${category}`}>
    <div className="product-card">
      <div className="product_card_background"  >
     <div className="product_card_image" style={{background:`url(${coverPhoto})`, backgroundSize:"70% 100%,cover" , backgroundRepeat:"no-repeat" , backgroundPosition:"center"}} >

     </div>

      </div>
      <div className="product_card_content">
        <div className="C1">
           { <Paragraph 
        style={{ alignSelf: "flex-start", marginTop: "0.5em" }}
        fontSize={20}
      
        fontWeight="semi-bold"
        color="#222222"
      >
        {title}
      </Paragraph>}
        </div>
        <div className="C2">
        { <Paragraph 
        style={{ alignSelf: "flex-start", marginTop: "0.5em" }}
        fontSize={20}
        fontWeight="semi-bold"
        color="#222222"
        
      >
        $ {cost}
      </Paragraph>}
        
        </div>
        <div className="C3">
        { <Paragraph 
        style={{ alignSelf: "flex-start", marginTop: "0.5em" }}
        fontSize={15}
        fontWeight="semi-bold"
        color="#6C6A6C"
     
      >
        {description}
      </Paragraph>}
        </div>
        <div className="C4">
          <AddShoppingCartIcon onClick={()=>addProductToCart(product)} color="primary" />
        </div>
      </div>
      {/* <div className="product_card_hover center">
          <Button onClick={()=>addProductToCart(product)} fontSize={14}  background="rgba(0,0,0,0.8)" fontWeight="regular" color="white" >Add to Cart</Button>
      </div>
      */}
     
  
  
    
    
    </div>
    </Link>
  
      


    // {/* <h3><Link to={`/product/${id}`}> {title} </Link>-{`$${cost}`}-<button onClick={()=>addProductToCart(product)}>Add to cart</button>
    // </h3> */}
  );
};

var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
