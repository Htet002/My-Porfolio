import React from "react";
import "./Home.css";
import Homesocial from "./Homesocial.jsx";
import Scrolldown from "./Scrolldown.jsx";
import Shapes from "./Shapes.jsx"


const Home =()=>{
    return(
       <section className="home cont" id="home">
         <Shapes/>
        <div className="intro">
            <img src="images/myimg.png" className ="home_img"alt="" />
        <h1 className="my_name">William Htun</h1>
        <span className="my_des">
            I am a Web Developer
        </span>
          
        <Homesocial/>
         <a href="https://www.linkedin.com/in/htet-htun-55a983175/" className="btn">Hire Me</a>
        <Scrolldown/>
       
        </div>
        
    
        </section>
      
       
    )
}
export default Home