import React from "react";

function User({user, onRemove}) {
    return (
        <div>
            <b>{user.name}</b> : {user.email}
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    )
}

function ListTags({users, onRemove}) {
    return (
        <div>
            {users.map(user=> (
                <User user={user} key={user.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default ListTags;