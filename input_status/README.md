# 입력 상태 관리

useState 를 이용하여

입력 폼에 입력되는 값의 상태를 관리할 수 있다.

![Untitled%200dcee4dc841f48dab7fc99532b6ccdc0/ezgif-2-24c43058e53a.gif](Untitled%200dcee4dc841f48dab7fc99532b6ccdc0/ezgif-2-24c43058e53a.gif)

이때 입력 값이 바뀌는 것을 감지하기 위해

input의 property 인 onChange 를 사용한다.

1. useState 로 입력 값의 상태를 불러온다.

    빈 텍스트가 초기값이므로 '' 로 저장한다.

    ```jsx
    const [value, setValue] = useState('');
    ```

2. onChange 에 넣어줄 함수를 구현한다.

    ```jsx
    const onChange = (e) => {
    	setValue(e.target.value);
    };
    ```

3. onClear 에 넣어줄 함수를 구현한다.

```jsx
const onClear = () => {
	setValue('');
};
```

전체 코드

```jsx
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
```