import React, {useState} from "react";

function MultipleInputStatus () {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : '',
    });

    const {name, nickname} = inputs;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            e.target.id : e.target.value,
        });
    };

    const onClear = () => {
        setInputs({
            name : '',
            nickname: '',
        });
    };

    return (
        <div>
            <input onChange={onChange} placeholder={"이름을 입력해주세요"} value={name}/>
            <input onChange={onChange} placeholder={"별명을 입력해주세요"} value={nickname}/>
            <button onClick={onClear}>초기화</button>
            <div>
                <b>이름 : </b>
                {name}
                <b>별명 : </b>
                {nickname}
            </div>
        </div>
    );
}

export default MultipleInputStatus;