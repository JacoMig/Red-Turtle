import React, { useState } from "react"
import { TeaserTypes } from "../types"
import "./Teaser.module.scss";

const Teaser = (props:TeaserTypes) => {
    const {date, title, body, link, image} = props
    return (
        <div className="Teaser" 
           style={{backgroundImage: `url(/${image})`}}
        >
            <div className="Teaser__content">
                <div className="Teaser__date">{date}</div>
                <h4 className="Teaser__title">{title}</h4>
                <p className="Teaser__body">{body}</p>
                <a className="Teaser__link" href={link}>Vedi</a>
            </div>
        </div>
    )
}

export default Teaser