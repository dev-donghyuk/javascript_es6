# Symbol

-  ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용한다.

<br/>

### Symbol의 생성

```sh
let mySymbol = Symbol();

console.log(mySymbol);        // Symbol()
console.log(typeof mySymbol); // symbol

new Symbol(); // TypeError: Symbol is not a constructor
```

<br />

### Symbol의 사용

```sh
const obj = {};

const mySymbol = Symbol('mySymbol');
obj[mySymbol] = 123;

console.log(obj); // { [Symbol(mySymbol)]: 123 }
console.log(obj[mySymbol]); // 123
```
