import React from "react";
import "./post.css";

const Post = (props) => {
    const { item = {} } = props;
    return (
        <div className="post">
            <div className="info-container">
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
            </div>
        </div>
    )
}

export default Post
