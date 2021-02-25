import React from 'react'
import { connect } from 'react-redux'
import { SignInWithGoogle } from '../../Redux/auth/authActions'

const GoogleSignInBtn = ({SignInWithGoogle}) => {
    return (
        <div>
            <button onClick={SignInWithGoogle}>SignIn With Google</button>
        </div>
    )
}


var actions={
    SignInWithGoogle
}
export default connect(null,actions)(GoogleSignInBtn)
