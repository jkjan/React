# useState

기존 클래스 컴포넌트에서

```jsx
class CComponent {
	state = {
		num : 0
	};
	render() {
		return (
			<div>
				<button onClick={
					this.setState({
						num: 1
					})}>
				</button>
			</div>
		);
	}
}
```

와 같이 쓰였던 state 를 함수 컴포넌트에서도 사용할 수 있다.

사용법 :

1. react 에서 useState 를 구조 분해 할당하여 가져온다.

```jsx
import React, {useState} from "react"
```

2. useState 함수를 호출하여 반환되는 배열인 [상태, 상태를 바꿀 함수]를 구조 분해하여 저장한다.

```jsx
const [number, setNumber] = useState(0);
// useState 의 전달인자는 초기값
```

3. 상태를 바꾸는 메소드를 정의한다.

```jsx
const onIncrease = () => {
	setNumber(number + 1);
}
...
```

전체 예시 - useState 를 활용한 숫자 더하고 빼기

```jsx
import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
```