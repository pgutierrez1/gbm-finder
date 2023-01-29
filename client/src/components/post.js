import React from "react";
import { useNavigate } from "react-router-dom";
import "./post.css";

const Post = (props) => {
    const { item = {} } = props;
    const naviagate = useNavigate();

    const handleClick = async (e) => {
        await props.getDetailedPostPage(e, item);
        naviagate("/post");

    }

    return (
        <div onClick={handleClick} className="post">
            <img src={process.env.PUBLIC_URL + "/images/placeholder.jpg"} alt="failed to load" />
            <div className="info-container">
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
            </div>
        </div>
    )
}

export default Post
