import React, { useEffect, useState } from "react"
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


const chunkSize = 3;
const chunksItems = (array:TeaserTypes[]) => {
    let chunk:TeaserTypes[] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunk = array.slice(i, i + chunkSize);
    }
    return chunk
}

const TeaserRow = (props:ITeaserRow) => {
    const [teaserContent, setTeaserContent] = useState<TeaserTypes[]>(props.items.filter((itm ,i) => i < chunkSize))
    const [teaserRows, setTeaserRows] = useState<any[]>([])
    const onShowAll = () => setTeaserContent(props.items)
    
    useEffect(() => {
        setTeaserRows([...teaserRows, chunksItems(teaserContent)])
    }, [teaserContent])
    
    return (
        <div className="Teasers">
            {teaserRows.length > 0 ? 
                teaserRows.map((row, i) => (
                    <div className="Teasers__row" key={"row-"+i}>
                        {row.length > 0 && row.map((item:TeaserTypes) => (
                            <Teaser 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                body={item.body}
                                date={createDate(item.date)}
                                link={item.link}
                                image={item.image}
                            />
                        ))}
                    </div>
                ))
            : null}
            {teaserContent.length < props.items.length 
            ? 
                <button className="Teasers__showAll" onClick={onShowAll}>Vedi tutto</button>
            : null}
        </div>
        
    )
}

export default TeaserRow