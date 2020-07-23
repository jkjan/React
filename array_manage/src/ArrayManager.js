import React, {useState, useRef} from "react";
import './example.sass'
import UserList from "./ListTags";
import CreateUser from "./CreateUser";

function ArrayManager() {
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
        console.log(e.target.name, e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const onClear = () => {
        setUser({
            name: '',
            email: '',
        });
        ref.current.focus();
    };

    const onSubmit = () => {
        setUserList(userList.concat({
            id : userList.length-1,
            ...user}));
        setUser({
            name:'',
            email:'',
        })
    };

    const ref = useRef();

    const onRemove = id => {
        console.log(id);
        setUserList(userList.filter(user => user.id !== id));
    };

    return (
        <div>
            <CreateUser user={user} onChange={onChange} onClear={onClear} onSubmit={onSubmit}/>
            <ul className="jeongin">
                <UserList users={userList} onRemove={onRemove}/>
            </ul>
        </div>
    );
}

export default ArrayManager;