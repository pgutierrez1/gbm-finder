import React, { useState } from "react";
import Axios from "axios";
import "./newpost.css";

const NewPost = (props) => {
    const post_url = "http://localhost:3001/api/createpost";
    const [newPost, setNewPost] = useState({
        title: "",
        desc: "",
        date: "",

    })
    const handle = (e) =>{
        const postdata={ ...newPost };
        postdata[e.target.id] = e.target.value;
        setNewPost(postdata);
        console.log(postdata);

    }
    const submit = (e) => {
        e.preventDefault();
        Axios.post(post_url,{
            title: newPost.title,
            desc: newPost.desc,
            date: newPost.date

        })
            .then(res=>{
                console.log(res.newPost)
            })

    }
    
    return (
        <div className="form-body">
        <p className="form-title">Create a new event</p>
            <form onSubmit={(e)=>submit(e)}>
                <label>Event name
                    <input onChange={(e)=>handle(e)} id="title" value={newPost.name} type="text" />
                </label> <br />
                <label>Description
                    <input onChange={(e)=>handle(e)} id="desc" value={newPost.desc} type="textarea" />
                </label> <br />
                <label>Date
                    <input onChange={(e)=>handle(e)} id="date" value={newPost.date} type="date" />
                </label> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default NewPost 
