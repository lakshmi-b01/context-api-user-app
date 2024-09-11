import React from "react";
import Comment from "./Comment";

export default function Post({username, isAdmin}){
    return (
        <div>
            {isAdmin && <button>delete</button>} 
            <h2>Example Post Title</h2>
            <p>This is a post content example</p>
            <Comment username={username} isAdmin={isAdmin}></Comment>
        </div>
    );
}