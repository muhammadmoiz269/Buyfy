import React,{useState} from 'react'
import "./AddressFormModel.css"
import ModelContainer from '../ModelContainer/ModelContainer'
import TextField from '@material-ui/core/TextField';
import MaterialUibutton from "./../MaterialUibutton/MaterialUibutton"


const AddressFormModel = () => {
    var [address,setAddress]=useState("");
    var [email,setEmail]=useState("");
    var [contact,setContact]=useState("");
    var [name,setName]=useState("");

    return (
       

        <ModelContainer>
              <form className="address-form-model center">
                  <div className="addressFormField"> 

                  <TextField
                value={name}
                onChange={(e)=>setName(e.target.value)}
                id="standard-basic" 
                label="Name"            
              />
                <TextField
                    value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="standard-basic" 
                label="Email" 
               

              />
                </div>
                <div className="addressFormField">
                <TextField
                    value={contact}
                onChange={(e)=>setContact(e.target.value)}
                id="standard-basic" 
                label="Contact" 
               
              

              />
                  <TextField
                    value={address}
                onChange={(e)=>setAddress(e.target.value)}
                id="standard-basic" 
                label="Address" 
             

              />
              
              
              
             </div>

                
          
             <MaterialUibutton>Pay & Proceed</MaterialUibutton>

            
            </form>

        </ModelContainer>
      
    )
}

export default AddressFormModel
