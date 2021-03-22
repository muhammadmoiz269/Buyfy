import React from 'react'
import { auth } from '../../Firebase/Firebase'
import "./Home.css"
import Header from '../../Components/Header/Header'
import  MaterialUibutton from "../../Components/MaterialUibutton/MaterialUibutton"
import Paragraph from '../../Components/Paragraph/Paragraph'



const Home = () => {
    
    // console.log(auth)
    return (
        <div className="home">
            <div className="homeLeft">
              
              <div className="heading ">
                <Header  className="Hometext" fontSize={32} fontWeight="bold" color="#3F51B5">Sell Online With </Header>  
                <Header  className="Hometext" fontSize={36} fontWeight="bold" color="#47C1BF">BuyFy </Header>  
              

              </div>
               
                <div className="paragraph">
                    <Paragraph fontSize={14} fontWeight="medium" color="gray">
                    BuyFy is better than any other platform we’ve played with, and we’ve played with them all. You might try.
 
                    </Paragraph>
                  
                    <MaterialUibutton>Get Started</MaterialUibutton>
                   
                </div>

               
               
               
              
              
            </div>
            <div className="homeRight">

            </div>
          

          
        </div>
    )
}

export default Home
