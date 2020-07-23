import React, {useState, useRef} from "react";

function DomSelect() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : '',
    });
    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    };

    const onClear = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name"
                   placeholder="이름을 입력해주세요"
                   onChange={onChange}
                   value={name}
                    ref={nameInput}/>
            <input name="nickname"
                   placeholder="별명을 입력해주세요"
                   onChange={onChange} value={nickname}/>
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

export default DomSelect;