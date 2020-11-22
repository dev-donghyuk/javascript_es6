# 매개변수 기본값, Rest 파라미터, Spread 문법, Rest/Spread 프로퍼티

### 매개변수 기본값

```sh
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1));    // 1
console.log(sum(1, 2)); // 3
```

<br/>

### Rest 파라미터

-  Rest 파라미터는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다. Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

-  Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

```sh
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
```

<br/>

```sh
function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```

<br />

-  Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

```sh
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2
```

<br />

### Spread 문법

-  Spread 문법는 대상을 개별 요소로 분리한다. Spread 문법의 대상은 이터러블이어야 한다.

```sh
console.log(...[1, 2, 3]) // 1, 2, 3

console.log(...'Hello');  // H e l l o

console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator
```

<br />

### Rest/Spread 프로퍼티

-  객체 리터럴을 분해하고 병합하는 편리한 기능을 제공한다.

```sh
// Spread 프로퍼티
const n = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
```

<br />

```sh
// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
console.log(added); // { x: 1, y: 2, z: 0 }
```
