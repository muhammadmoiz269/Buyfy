import React from 'react'
import "./Button.css"

const Button = ({children, background,fontSize, color, fontWeight, style={}}) => {
    var fontSizevalue=fontSize/10;
    return (
        <span  style={{background, color,
            fontWeight:fontWeight,
            fontSize:`${fontSizevalue}em`,
              ...style}} className="button" >
            
            {children}
        </span>
    )
}

export default Button
