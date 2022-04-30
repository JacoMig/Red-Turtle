import React, { useEffect, useState } from 'react'
import "./Accordion.module.scss"
import classnames from 'classnames'

interface IAccordion {
    id: number
    body: string
    title: string
    active: number
    setActive: () => void
}

const Accordion = (props:IAccordion) => {
    const [open, setOpen] = useState(false)
    
    const handleClick = () => {
        if(props.id === props.active && open)
            setOpen(false)
        else {
            setOpen(true)
            props.setActive()
        }
    }

    useEffect(() => {
        setOpen(props.id === props.active);
    }, [props.active, props.id]);

    return (
        <div className={classnames('accordion__item', {
            ["open"]: open
        })} >
            <div className={"accordion__header"} onClick={handleClick}>
                <h4>{props.title}</h4>
                <i></i>
            </div>
            <p className={"accordion__body"}>{props.body}</p>
        </div>
    )
}

export default Accordion