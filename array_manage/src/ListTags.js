import React, {useState, useRef} from "react";
import CreateUser from "./CreateUser";

function User({idx, user, onRemove, onModify}) {
    const [isEditing, setIsEditing] = useState(false);
    const origin = user;
    const [thisUser, setThisUser] = useState(user);
    const userModify = useRef();

    const onEdit = () => {
        setIsEditing(!isEditing);
    }

    const onCancel = () => {
        onEdit();
        setThisUser(origin);
    }

    const onSubmit = () => {
        onEdit();
        onModify(idx, thisUser);
    }

    const onChange = (e) => {
        setThisUser({
            ...thisUser,
            [e.target.name]: e.target.value,
        })
    }

    const onClear = () => {
        setThisUser({
            ...thisUser,
            name: '',
            email: '',
        });
        userModify.current.focus();
    };

    return (
        <div>
            {!isEditing ?
                <div>
                    <b>{thisUser.name}</b> : {thisUser.email}
                    <button onClick={() => onRemove(idx)}>삭제</button>
                    <button onClick={onEdit}>수정</button>
                </div> :

                <span>
                    <CreateUser
                        nameInput={userModify}
                        idx={idx}
                        user={thisUser}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        onClear={onClear}
                    />
                    <button onClick={onCancel}>취소</button>
                </span>
            }
        </div>
    )
}

function ListTags({users, onRemove, onModify, onClear}) {
    return (
        <div>
            {users.map((user, i) => (
                <User idx={i} user={user} key={user.id} onRemove={onRemove} onClear={onClear} onModify={onModify}/>
            ))}
        </div>
    );
}

export default ListTags;