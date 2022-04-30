import React from 'react'
import  './HeroBanner.module.scss';
import iconSymbol from "../../icons/simbolo.svg";

interface IHeroBanner {
    title: string
    buttonText: string
    buttonLink: string
    body: string
}

const HeroBanner = (props:IHeroBanner) => {
    const {title, buttonLink, buttonText, body} = props
    return (
        <div className='heroBanner'>
            <div className='heroBanner__content'>
                <h4 className='heroBanner__title'>
                    {title}
                </h4>
                <p className='heroBanner__body'>
                    {body}
                </p>
                <a href={buttonLink} className='heroBanner__button'>
                    <span>{buttonText}</span>
                </a>
            </div>
            <div className='heroBanner__icon'>
                <img src={iconSymbol} alt="simbolo" />
            </div>
        </div>
    )
}
 export default HeroBanner