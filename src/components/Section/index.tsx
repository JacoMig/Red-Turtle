import React,{ ReactNode } from "react"
import "./Section.module.scss";
interface ISection {
    children?: JSX.Element
}

const Section = (props:ISection) => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export default Section