import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">Gator Space</div>
            <div className="button"><a href="/new">Create event</a></div>
        </div>
    )
}

export default Sidebar;
