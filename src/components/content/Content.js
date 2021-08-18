import React from "react";
import "./Content.css";
import Header from "../content-header/Header";
import Avatar from "../avatar/Avatar";
import Contentimg from "../content-img/Contentimg";
import Comment from "../comments/Comment";

export default function Content({ size = 'sm', src , name, location }) {
    return (
        <div className="content">
            <Header name={name} location={location} >
                <Avatar size={size} src={src} />
            </Header>
            <Contentimg src={src}/>
            <Comment />
        </div>
    );
}
