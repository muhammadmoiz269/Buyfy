import React from 'react'
import "./Header.css"

var fontWeightEstimator =(weightStr)=>{
    switch (weightStr) {
        case "light":
        return 300
        case "regular":
        return 400
        case "semi-bold":
        return 500
        case "bold":
        return 700
            
    
        default:
        return 400;
    }

}
const Header = ({children,fontSize=16,fontWeight="bold",style={},color="Black"}) => {

    var fontWeightValue=fontWeightEstimator(fontWeight)
    var fontSizevalue=fontSize/10;
    return (
        <div className="header" style={{
            fontWeight:fontWeightValue,
            fontSize:`${fontSizevalue}em`,
            color,
            ...style,

        }}>
            {children}
          
        </div>
    )
}

export default Header
