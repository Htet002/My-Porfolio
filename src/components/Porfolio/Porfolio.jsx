import React, { useState } from "react";
import work from "./Work";
import "./Porfolio.css"






const Porfolio =()=>{
    const[items,setItems] =useState(work);
    const filterItem=(categoryItem)=>{
        const uptItem = work.filter((curt)=>{
            return curt.category ===categoryItem;
        });
        setItems(uptItem)

    }
    return(
      <section className="work" container section id="porfolio">
        <h2 className="section_title">Recent Projects</h2>
        <div className="work_filter">
            <span className="work_item" onClick={()=>setItems(work)} >All</span>
           {/*<span className="work_item">Design</span>*/}
            <span className="work_item" onClick={()=>filterItem
            ("Front End")}>Front End</span>
            <span className="work_item" onClick={()=>filterItem
            ("Full Stack")}>Fullstack</span>
        </div>
        <div className="work_container grid">
            {items.map((elem)=>{
                const{id,image,title,category} =elem;
                     return(
                        <div className="work_card" key={id}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img"/>
                                <div className="work_mask">

                                </div>
                            </div>
                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <a href="#" className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>

                        </div>
                     )
            } )}
        </div>
      </section>
    )
}
export default Porfolio