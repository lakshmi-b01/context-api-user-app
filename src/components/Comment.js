import React from "react";

export default function Comment({username, isAdmin}){
    return (
        <div>
            <h3>comments</h3>
            <p>Logged in as {username}</p>
            {isAdmin && <button>edit comment</button>}
        </div>
    );
}