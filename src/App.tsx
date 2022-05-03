import React from 'react'
import AccordionBlock from './components/AccordionBlock'
import HeroBanner from './components/HeroBanner'
import PostsGrid from './components/PostsGrid'
import Section from './components/Section'
import TeaserRow from './components/TeaserRow'
import accordion_data from "./data/accordion.json"
import posts_grid_data from "./data/posts_grid.json";
import teaser_row_data from "./data/teaser_row.json";

const App = () => {
    return (<div className="page">
        <HeroBanner 
            title="Infrastruttura  e tecnologia dietro ogni emozione"
            body="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem"
            buttonLink="https://www.theguardian.com/"
            buttonText="Approfondisci"
        />
        <Section>
            <AccordionBlock items={accordion_data}/>
        </Section>
        <PostsGrid 
            title="I nostri valori"
            subtitle='sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non'
            items={posts_grid_data}
        />
         <Section>
             <TeaserRow items={teaser_row_data} />
         </Section>
    </div>)
}

export default App