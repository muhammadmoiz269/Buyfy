import React from 'react'
import { connect } from 'react-redux'
import TestModel from '../TestModel/TestModel';
import ErrorModel from '../ErrorModel/ErrorModel';
import AddressFormModel from '../AddressFormModel/AddressFormModel';


var modelLookup={
    testModel:TestModel,
    errorModel:ErrorModel,
    addressFormModel:AddressFormModel
};
const ModelManager = ({model}) => {
    var renderedModel=null;
    if(model)
    {
        var {modelType, modelProps}=model;
        var ModelComponent = modelLookup[modelType]
        renderedModel = <ModelComponent {...modelProps}/>
    }

    return (
        <div>
            {renderedModel}
        </div>
    )
}

var mapState=(state)=>({
    model:state.model
})
export default connect(mapState)(ModelManager)
