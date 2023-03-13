import React, { useState } from "react";
import './sidebar.css';


const Sidebar =()=>{
    const [toggle,show]=useState(false);
    return(<>
        <aside className={toggle ? "sidebar show":"sidebar"}>
            <a href="#homie" className="nav_log">
                <img src='slack.png' alt="" />
            </a>
            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            
                            <a href="#home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            
                            <a href="#about" className="nav_link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                       
                        <li className="nav_item">
                            
                            <a href="#resume" className="nav_link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            
                            <a href="#porfolio" className="nav_link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                       
                        <li className="nav_item">
                            
                            <a href="#contact" className="nav_link">
                                <i className="icon-phone"></i>
                            </a>
                        </li>
                        
                    </ul>
                </div>

            </nav>

            <div className="nav_footer">
                <span className="copy">&copy; 2022-2023 </span></div>
        </aside>
        <div className={toggle ? "nav_toggle nav_toggle-open": "nav_toggle"} onClick={()=>show(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar