import React from "react";
import "./Content.css";
import Header from "../content-header/Header";
import Avatar from "../avatar/Avatar";
import Contentimg from "../content-img/Contentimg";
import Comment from "../comments/Comment";

export default function Content() {
    return (
        <div className="content">
            <Header>
                <Avatar />
            </Header>
            <Contentimg />
            <Comment />
        </div>
    );
}
