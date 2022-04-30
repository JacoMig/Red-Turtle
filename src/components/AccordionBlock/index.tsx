import React, { useState } from 'react'
import Accordion from './Accordion'
import './AccordionBlock.module.scss'
type ItemType = {
    id: number,
    title: string,
    body: string
}

interface IAccordionBlock {
    items: ItemType[]
}

const AccordionBlock = (props:IAccordionBlock) => {
    const {items} = props
    const [active, setActive] = useState(0)

    
    
    return ( 
        <div className="accordion">
            {items && items.length > 0 ? 
                items.map(i => 
                    <Accordion
                        key={i.id}
                        id={i.id}
                        active={active}
                        setActive={() => setActive(i.id)}
                        title={i.title}
                        body={i.body}
                    />      
                )
            : null}
        </div>
        
  )
}

export default AccordionBlock