import React from "react";
import "./detailedpostpage.css";

const DetailedPostPage = (props) => {
    const { item = {} } = props;
    console.log(item);
    return (
        <div class="detailedPostContainer">
            <p className="detailed-header">{item.title}</p>
            <p className="">{item.org}</p>
            <p className="">{item.datetime}</p>
            <p className="">{item.desc}</p>
        </div>
    )
}
export default DetailedPostPage
