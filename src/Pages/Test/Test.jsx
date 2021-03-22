import React,{useState} from 'react'
import { connect } from 'react-redux';
import { uploadProduct } from "../../Redux/Products/ProductsActions"
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Header/Header';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Button from '../../Components/Button/Button';
import ProductCard from '../../Components/ProductCard/ProductCard';
import MaterialUiGrid from "../../Components/MaterialUiGrid/MaterialUiGrid"
import { OPEN_MODEL } from '../../Redux/Modal/ModalConstants';
import { openModel } from '../../Redux/Modal/ModelActions';



const Test = ({uploadProduct,openModel}) => {

    var [category,setCategory]=useState("");
    var [title,setTitle]=useState("");
    var [cost,setCost]=useState("");
    var [description,setDescription]=useState("");
    var [quantity,setQuantity]=useState("");
    var [coverPhoto,setCoverphoto]=useState(null);

    var HandleFormSubmit=(e)=>{
        e.preventDefault();
        var productObj={
            category,
            title,
            cost,
            description,
            quantity,
            coverPhoto
        }
        uploadProduct(productObj)
    }

    return (
        <div style={{fontSize:"62.5%"}}> 
            <h1>Test</h1>
            {/* <form onSubmit={HandleFormSubmit}>
                <input value ={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category"/><br/>
                <input value ={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/><br/>
                <input value ={cost} onChange={(e) => setCost(e.target.value)} type="text" placeholder="Cost"/><br/>
                <textarea value ={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" cols="30" rows="10"/>
                <input value ={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" placeholder="Quantity"/><br/>
                <input  onChange={(e) => setCoverphoto(e.target.files[0])} type="file"/><br/>
                <button type="submit">submit</button>
                     
            </form> */}
            {/* <Cart/> */}
            {/* <Header fontSize={32} fontWeight="bold" color="black"> This is my Header</Header>  
            <Header fontSize={16} fontWeight="bold"> This is my Header</Header>
            <Header fontSize={32} fontWeight="bold" color="blue"> This is my Header</Header>  

            <Paragraph fontSize={32} fontWeight="bold" color="purple">This is my Para</Paragraph>
            <Paragraph fontSize={16} fontWeight="bold" color="black">This is my Para</Paragraph>

            <Button fontSize={16} fontWeight="regular" background="purple" color="white">Click Me</Button> */}
            {/* <ProductCard/> */}
            {/* <MaterialUiGrid/> */}
           
           

              <button onClick={()=>openModel({ modelType: "testModel" ,
             modelProps:{ number: 23 }})}>hello</button>

        <button onClick={()=>openModel({ modelType: "errorModel" ,
             modelProps:{error:"something went wrong"}})}>Error Model</button> 

            <button onClick={()=>openModel({ modelType: "addressFormModel" })}>Address form Model</button> 
           
           
           
        </div>
    )
}



var actions={
    uploadProduct,
    openModel,
    

    
}
export default connect(null,actions)(Test)
