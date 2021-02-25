import React,{useState} from 'react'
import { connect } from 'react-redux';
import { signin } from '../../Redux/auth/authActions';

const SignInForm = ({signin}) => {

   
    var [email,setEmail]=useState("");
    var [password,setPassword]=useState("");

    var handleFormSubmit=(e)=>
    {
        e.preventDefault();
     
        var cred={
            email,
            password
        }
        signin(cred)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
           
                <input value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="Pass"/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}


var actions={
    signin
}
export default connect(null,actions)(SignInForm)