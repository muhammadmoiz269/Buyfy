import React from 'react'
import { connect } from 'react-redux'
import { SignInWithGoogle } from '../../Redux/auth/authActions'

const GoogleSignInBtn = ({SignInWithGoogle}) => {
    return (
        <div>
            <p onClick={SignInWithGoogle}>Google Sign In</p>
        </div>
    )
}


var actions={
    SignInWithGoogle
}
export default connect(null,actions)(GoogleSignInBtn)
