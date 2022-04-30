import React from 'react';
import Section from '../Section';
import Post from './Post';
import "./PostsGrid.module.scss";
import logo from "../../icons/simbolo.svg";

type ItemType = {
    id: number
    title: string
    body: string
    link: string
}

interface IPostsGrid {
    title: string;
    subtitle: string;
    items: ItemType[]
}

const PostsGrid = (props:IPostsGrid) => {
    const {title, items, subtitle} = props
    return (
        <div className="postsGrid">
            <img src={logo} className="postsGrid__logo" />
            <Section>
                <div className='postsGrid__content'>
                    <h4 className='postsGrid__title'>{title}</h4>
                    <p className='postsGrid__subtitle'>{subtitle}</p>
                    <div className='postsGrid__grid'>
                        {items && items.length > 0 ? 
                            items.map(item => <Post title={item.title} body={item.body} link={item.link} />)
                        : null}    
                    </div>
                </div>
            </Section>
            
        </div>
    )
}

export default PostsGrid