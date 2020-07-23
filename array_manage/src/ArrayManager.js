import React, {useState, useRef} from "react";
import './example.sass'
import UserList from "./ListTags";
import CreateUser from "./CreateUser";

function ArrayManager() {
    const nameInput = useRef();
    const nextId = useRef(4);
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const [userList, setUserList] = useState([
        {
            id : 0,
            name: 'jkjan',
            email: 'jkjan@naver.com',
        },
        {
            id : 1,
            name: 'cskeh',
            email: 'cskeh@naver.com',
        },
        {
            id : 2,
            name: 'tom2607',
            email: 'tom2607@gmail.com',
        }
    ]);

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const onModify = (idx, modified) => {
        userList[idx] = modified
        setUserList(userList);
    }

    const onClear = () => {
        setUser({
            name: '',
            email: '',
        });
        nameInput.current.focus();
    };

    const onSubmit = () => {
        setUserList(userList.concat({
            id : nextId.current,
            ...user,
        }));

        setUser({
            name:'',
            email:'',
        })

        nameInput.current.focus();
        nextId.current++;
    };

    const onRemove = (idx) => {
        setUserList(
            userList.slice(0, idx).concat(userList.slice(idx+1))
        );
    };

    return (
        <div>
            <CreateUser nameInput={nameInput} user={user} onChange={onChange} onClear={onClear} onSubmit={onSubmit}/>
            <ul className="jeongin">
                <UserList users={userList} onRemove={onRemove} onModify={onModify}/>
            </ul>
        </div>
    );
}

export default ArrayManager;