import React from "react";
import "./Content.css";
import Header from "../contentheader/Header";
import Avatar from "../avatar/Avatar";
import Contentimg from "../content-img/Contentimg";
import Comment from "../comments/Comment";
import Input from "../input/input";

export default function Content() {
    return (
        <div className="content">
            <Header>
                <Avatar />
            </Header>
            <Contentimg />
            <Comment>
                <Input />
            </Comment>
        </div>
    );
}
