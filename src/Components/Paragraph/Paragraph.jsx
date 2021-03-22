import React from 'react'
import "./Paragraph.css"

var fontWeightEstimator =(weightStr)=>{
    switch (weightStr) {
        case "light":
        return 300
        case "regular":
        return 400
        case "semi-bold":
        return 600
        case "bold":
        return 700
            
    
        default:
        return 400;
    }

}
const Paragraph = ({children,fontSize=16,fontWeight="bold",style=[],color="black", ...restProps }) => {

    var fontWeightValue=fontWeightEstimator(fontWeight)
    var fontSizevalue=fontSize/10;
    return (
        <div 
        {...restProps}
        className="paragraph" style={{
            fontWeight:fontWeightValue,
            fontSize:`${fontSizevalue}em`,
            color,
            ...style,

        }}>
            {children}
          
        </div>
    )
}

export default Paragraph
