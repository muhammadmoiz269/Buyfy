import React from 'react'
import ModelContainer from '../ModelContainer/ModelContainer'
import "./ErrorModel.css"

const ErrorModel = ({error}) => {
    return (
        <ModelContainer>
            <div className="error-model center"> 
            <h1>{error}</h1>
          </div>

        </ModelContainer>
        
    )
}

export default ErrorModel
