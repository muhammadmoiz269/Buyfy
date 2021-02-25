import React,{useState} from 'react'
import { connect } from 'react-redux';
import { signup } from '../../Redux/auth/authActions';

const SignUpForm = ({signup}) => {

    var [fullName,setFullName]=useState("");
    var [email,setEmail]=useState("");
    var [password,setPassword]=useState("");

    var handleFormSubmit=(e)=>
    {
        e.preventDefault();
        var cred={
            fullName,email,password
        }
        signup(cred);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value = {fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="Full Name"/>
                <input value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="Pass"/>
        <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
var actions={
    signup
}
export default connect(null,actions)(SignUpForm)
