import React, {useState} from "react";

function InputStatus() {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onClear = () => {
        setValue('');
    };

    return (
        <div>
            <input onChange={onChange} value={value}/>
            <button onClick={onClear}>초기화</button>
            <div>
                <b>값 : </b>
                {value}
            </div>
        </div>
    );
}

export default InputStatus;