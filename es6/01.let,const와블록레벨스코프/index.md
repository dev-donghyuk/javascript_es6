# let, const와 블록 레벨 스코프

### var 키워드로 선언된 변수의 문제

1. 함수 레벨 스코프
   -  전역 함수 외부에서 생성한 변수는 모두 전역 변수이다. 이는 전역 변수를 남발할 가능성을 높인다.
2. var 키워드 생략 허용
   -  암묵적 전역 변수를 만들 가능성이 크다.
3. 변수 중복 선언 허용
   -  도하지 않은 변수값의 변경이 일어날 가능성이 크다.
4. 변수 호이스팅
   -  변수를 선언하기 이전에 참조할 수 있다.

-  이러한 var 키워드의 단점을 보완하기 위해 let과 const 키워드를 도입하였다.

<br/>

## let

-  블록 레벨 스코프

```sh
var foo = 123; // 전역 변수

console.log(foo); // 123

{
  var foo = 456; // 전역 변수
}

console.log(foo); // 456
```

```sh
let foo = 123; // 전역 변수

{
  let foo = 456; // 지역 변수
  let bar = 456; // 지역 변수
}

console.log(foo); // 123
console.log(bar); // ReferenceError: bar is not defined
```

<br />

-  변수 중복선언 금지

```sh
var foo = 123;
var foo = 456;  // 중복 선언 허용

let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared
```

<br/>

### 호이스팅

-  var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

```sh
console.log(foo); // undefined
var foo;

console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;
```

<br />

### 전역 객체와 let

```sh
var foo = 123; // 전역변수

console.log(window.foo); // 123

let bar = 123; // 전역변수

console.log(window.bar); // undefined
```

## const

-  const의 특징은 let과 대부분 동일하므로 let과 다른 점만 살펴보도록 하자.

<br/>

### 선언과 초기화

-  let은 재할당이 자유로우나 const는 재할당이 금지된다.

<br />

### 상수

-  const는 상수와 객체를 선언할 때, const를 자주써 가독성을 높일 수 있다.

### const와 객체

-  const는 재할당이 금지된다. 하지만 이때 객체의 프로퍼티는 보호되지 않는다.

```sh
const user = { name: 'Lee' };

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.

// 객체의 내용은 변경할 수 있다.
user.name = 'Kim';

console.log(user); // { name: 'Kim' }
```
