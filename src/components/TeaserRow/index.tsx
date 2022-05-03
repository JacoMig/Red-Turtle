import React, { useState } from "react"
import "./TeaserRow.module.scss"
import Teaser from "./Teaser"
import { TeaserTypes } from "./types"


interface ITeaserRow {
    items: TeaserTypes[]
}

const createDate = (date:string) => {
    const myDate = new Date(date)
    return myDate.toLocaleString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }); 
    
}

const TeaserRow = (props:ITeaserRow) => {
    const [showAll, setShowAll] = useState<Boolean>(false);
    return (
        <div className="TeaserRow">
            {props.items && props.items.length > 0 ? 
                props.items.filter((itm ,i) => i <= 2).map((item,i) => { 
                    return <Teaser 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body}
                        date={createDate(item.date)}
                        link={item.link}
                        image={item.image}
                    />
                })
            : null}
        </div>
    )
}

export default TeaserRow