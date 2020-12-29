import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOptions from "./InputOptions";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOutlined} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
