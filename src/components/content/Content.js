import React from "react";
import "./Content.css";
import Header from "../content-header/Header";
import Avatar from "../avatar/Avatar";
import Contentimg from "../content-img/Contentimg";
import Comment from "../comments/Comment";
import AvatarProfile from '../../IMG_0031.JPG';

export default function Content({ size = 'sm', src = AvatarProfile }) {
    return (
        <div className="content">
            <Header>
                <Avatar size={size} src={src} />
            </Header>
            <Contentimg />
            <Comment />
        </div>
    );
}
