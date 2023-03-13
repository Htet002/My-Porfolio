import React from "react";
import './about.css'

const About =()=>{
    return(
      <section className="about container section" id="about">
        <h2 className="section_title">About Me</h2>
         <div className="about_container grid">
            <img src="images/about.png" className ="about_img"alt="" />
               <div className="about_data grid">
                  <div className="about_info">
         <p className="description">
            I am William Htun,an enthusistaic
            web developer from Pathein,Myanmar,passionate on 
            creating website design and building customization.
         </p>   
         <a href="https://drive.google.com/file/d/1la_2aipAy1kn-zJxufTZrDus4qTf7WcN/view" className="btn" download>Download CV</a>
         
                  </div>
              
             
         
        <div className="about_skill grid">
            <div className="skill_data">
                <div className="skill_title">
                    <h3 className="skil_name">Javascript</h3>
                    
                    <div>
                    <span className="skill_number">70%</span>
                   
                    </div>
                       
                    
                </div>
                <div className="skill_bar">
                    <span className="skill_percentage JS"></span>
                </div>
               {/* <div className="skill_title">
                    <h3 className="skil_name">HTML/CSS
                    <div>
                    <span className="skill_number">80%</span>
                    </div>
                       
                    </h3>
                </div>*/}
                <div className="skill_title">
                    <h3 className="skil_name">React</h3>
                        <div>
                        <span className="skill_number">50%

                        </span>
                        </div>
                       
                    
                </div>
                <div className="skill_bar">
                    <span className="skill_percentage React"></span>
                </div>
                <div className="skill_title">
                    <h3 className="skil_name">Node.js  </h3>
                    <div> <span className="skill_number">20%

                             </span></div>
                        
                  
                </div>
                <div className="skill_bar">
                    <span className="skill_percentage Node"></span>
                </div>
                <div className="skill_title">
                    <h3 className="skil_name">Tailwind CSS</h3>
                        <div>
                        <span className="skill_number">30%</span>
                        </div>
                        
                       
                </div>
                <div className="skill_bar">
                    <span className="skill_percentage Tailwind"></span>
                </div>
                <div className="skill_title">
                    <h3 className="skil_name">PHP</h3>
                        <div>
                        <span className="skill_number">40%</span>
                        </div>
                        
                       
                </div>
                <div className="skill_bar">
                    <span className="skill_percentage PHP"></span>
                </div>
            </div>
            </div>
            </div>
 
        </div>
      </section>
    )
}
export default About