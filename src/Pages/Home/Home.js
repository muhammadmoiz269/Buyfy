import React from 'react'
import { auth } from '../../Firebase/Firebase'

const Home = () => {
    
    console.log(auth)
    return (
        <div>
            <h1>Home page</h1>
        </div>
    )
}

export default Home
