import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";

// pages
import Home from './pages/home';
import NewPost from './pages/newpost';
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

    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]

  return (
    <BrowserRouter>
        <Routes>
            <Route 
                index path="/" 
                element={<Home rows={rows} posts={posts}/>} 
            />
            <Route path="/new" element={<NewPost />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
