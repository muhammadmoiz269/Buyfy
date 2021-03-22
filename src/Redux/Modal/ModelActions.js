import { OPEN_MODEL, CLOSE_MODEL } from "./ModalConstants";

export var openModel =({modelType,modelProps={}})=>({
    type:OPEN_MODEL,
    payload:{
        modelType,
        modelProps,
    }
})

export var closeModel=()=>({
    type:CLOSE_MODEL
})