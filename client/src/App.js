import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";

// pages
import Home from './pages/home';
import NewPost from './pages/newpost';
import DetailedPostPage from './pages/detailedpostpage'
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getposts")
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
    },[]);

    const [detailedPostInfo, setDetailedPostInfo] = useState({})
    const getDetailedPostPage = async (e, item) => {
        const detailedPostInfo = { ...item};
        await setDetailedPostInfo(detailedPostInfo);
        console.log(detailedPostInfo);

    }

    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]

  return (
    <BrowserRouter>
        <Routes>
            <Route 
                index path="/" 
                element={<Home rows={rows} posts={posts} getDetailedPostPage={getDetailedPostPage.bind()}/>} 
            />
            <Route path="/new" element={<NewPost />}/>
            <Route path="/post" element={<DetailedPostPage item={detailedPostInfo}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
