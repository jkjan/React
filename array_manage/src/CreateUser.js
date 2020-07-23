import React from "react";

function CreateUser({user, onSubmit, onClear, onChange}) {
    return (
        <div>
            <input name="name" onChange={onChange} placeholder="아이디를 입력해주세요." value={user.name}/>
            <input name="email" onChange={onChange} placeholder="이메일을 입력해주세요." value={user.email}/>
            <button onClick={onSubmit}>제출</button>
            <button onClick={onClear}>초기화</button>
        </div>
    );
}

export default CreateUser;