const { OPEN_MODEL, CLOSE_MODEL } = require("./ModalConstants");

const initialState=null;

var ModelReducer =(state=initialState, {payload,type})=>{
    switch (type) {
        case OPEN_MODEL:
        return { modelType:payload.modelType, modelProps:payload.modelProps }
            
            
        case CLOSE_MODEL:
            return null
    
        default:
            return state
    }

}

export default ModelReducer;