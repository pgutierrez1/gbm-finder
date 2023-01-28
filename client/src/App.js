import React, { useState, useEffect } from "react";
import Axios from "axios";
// components
import PostRow from './components/postRow';
import Sidebar from './components/sidebar';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getposts")
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
    });

    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]
    // const posts = [
    //     { title: "First post", desc: "this is the first post"},
    //     { title: "2 post", desc: "second post"},
    //     { title: "3 post", desc: "third post lol"},
    //     { title: "4 post", desc: "loloolloloollolllol"},
    // ]
  return (
    <div className="App">
        <div className="mainView">
            <PostRow rowdata={rows[0]} postdata={posts} />
            <PostRow rowdata={rows[1]} postdata={posts} />
        </div>
        <Sidebar />
    </div>
  );
}

export default App;
