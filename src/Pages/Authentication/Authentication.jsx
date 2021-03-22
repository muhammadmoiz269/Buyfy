import React,{useState} from 'react'
import SignInForm from '../../Components/SignInForm/SignInForm'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import SignOut from '../../Components/SignOut/SignOut'
import GoogleSignInBtn from '../../Components/GoogleSignInBtn/GoogleSignInBtn'
import MaterialUibutton from "./../../Components/MaterialUibutton/MaterialUibutton"

const Authentication = () => {
    var [formType,setformType] = useState("sign-in")
  
    return (
        <div  >
          
            {formType === "sign-in" ? 
             <div>
             <SignInForm />
              <MaterialUibutton style={{position:"absolute" , left:"90%", bottom:"7%"}} onClick={()=> setformType("sign-up")} >Sign Up</MaterialUibutton>
            <MaterialUibutton style={{position:"absolute" , left:"60%", bottom:"7%"}}>
             <GoogleSignInBtn/>

            </MaterialUibutton>
             </div>
            :  
            <div >        
            <SignUpForm /> 
            <MaterialUibutton style={{position:"absolute" , left:"58%", bottom:"-4%"}} onClick={()=> setformType("sign-in")} >Sign In</MaterialUibutton> 
            </div>
            }
            
            
           
            
         
          
            
        </div>
    )
}

export default Authentication
