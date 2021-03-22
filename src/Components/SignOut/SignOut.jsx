import React from 'react'
import { connect } from 'react-redux'
import { signout } from '../../Redux/auth/authActions';
import LockIcon from '@material-ui/icons/Lock';


const SignOut = ({signout}) => {
    return (
        <div>
            {/* <SignOut onClick={signout}></SignOut> */}
            <button onClick={signout}>Sign Out</button>
        </div>
    )
}


var actions={
    signout
}
export default connect(null,actions)(SignOut)
