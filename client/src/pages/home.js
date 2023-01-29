import React from "react";

import PostRow from '../components/postRow';
import Sidebar from '../components/sidebar';
import "./home.css";

const Home = (props) => {
    const { rows = [], posts = [] } = props;
    return (
        <div className="homeContainer">
            <div className="mainView">
                <PostRow rowdata={rows[0]} postdata={posts} getDetailedPostPage={props.getDetailedPostPage} />
                <PostRow rowdata={rows[1]} postdata={posts} getDetailedPostPage={props.getDetailedPostPage} />
            </div>
            <Sidebar />
        </div>
    )
}

export default Home
