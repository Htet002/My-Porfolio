import React from "react"
const Card =(props)=>{
    return(
        <section className="timeline_item">
            <i className={props.icon}></i>
           <span className="timeline_date">{props.year}</span>
            <h3 className="timeline_title">{props.title}</h3>
            <p className="timeline_text">{props.desc}</p>
        </section>
    )
}

export default Card