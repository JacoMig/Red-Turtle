import React from "react"
import "./Post.module.scss"

interface IPost {
    title: string
    body: string
    link: string
}

const Post = (props:IPost) => {
    const {title, body, link} = props
    return (
        <div className="post">
            <div className="post__title">
                {title}
            </div>
            <div className="post__body">
                {body}
            </div>
            <a href={link} className="post__link">
                Approfondisci
            </a>
        </div>
    )
}

export default Post