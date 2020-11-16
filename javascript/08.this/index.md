# this

-  this는 일반적으로 메소드를 호출한 객체가 저장되어 있는 속성이다.

-  자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를 암묵적으로 전달 받는다.

<br/>

## 함수 호출 방식과 this 바인딩

-  함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

-  !!함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 함수를 선언할 때 결정된다. this 바인딩과 혼동 XX

<br/>

## 함수 호출 방식

1. 함수 호출
2. 메소드 호출
3. 생성자 함수 호출
4. apply/call/bind 호출

```sh
var foo = function () {
  console.log(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```
