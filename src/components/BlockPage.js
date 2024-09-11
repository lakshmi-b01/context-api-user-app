import React from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserInfoContext";
import { useContext } from "react";

export default function BlockPage(){
    const {username, isAdmin} = useContext(UserInfoContext);
    return (
        <div>
            <h1>Blog</h1>
            <Post username={username} isAdmin={isAdmin}></Post>
        </div>
    );
}