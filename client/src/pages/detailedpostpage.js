import React from "react";
import "./detailedpostpage.css";

const DetailedPostPage = (props) => {
    const { item = {} } = props;
    console.log(item);
    return (
        <div className="detailedPostContainer">
            <p className="detailed-header">{item.title}</p>
            <img className="detailed-image" src={process.env.PUBLIC_URL + "/images/placeholder.jpg"} alt="unable to load"/>
            <p className="detailed-text detailed-bold">{item.org}</p>
            <p className="detailed-text">{item.datetime}</p>
            <p className="detailed-text">{item.desc}</p>
            <p className="detailed-text">{item.location}</p>
            <p className="detailed-text">{item.interest} people are interested</p>
        </div>
    )
}
export default DetailedPostPage
