import React from 'react'
import { connect } from 'react-redux'
import { closeModel } from '../../Redux/Modal/ModelActions'
import "./ModelContainer.css"

const ModelContainer = ({children,closeModel}) => {
    return (
        <div className="model-container center"
        onClick={(e)=>{ if(e.target === e.currentTarget) closeModel() }}
        >
            {children}
        </div>
    )
}


var actions={
    closeModel
}
export default connect(null,actions)(ModelContainer)
