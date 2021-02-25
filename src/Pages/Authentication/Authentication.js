import React from 'react'
import SignInForm from '../../Components/SignInForm/SignInForm'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import SignOut from '../../Components/SignOut/SignOut'
import GoogleSignInBtn from '../../Components/GoogleSignInBtn/GoogleSignInBtn'

const Authentication = () => {
    return (
        <div>
            <h1>Auth Page</h1>
            <SignInForm/>
            <SignUpForm/>
            <SignOut/>
            <GoogleSignInBtn/>
            
        </div>
    )
}

export default Authentication
