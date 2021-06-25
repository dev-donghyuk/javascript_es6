# 실행 컨텍스트(Execution Context)

- 실행 컨텍스트는 scope, hoisting, this, function, closure 등의 동작원리를 담고 있는 자바스크립트의 핵심원리이다. 실행 컨텍스트를 바로 이해하지 못하면 코드 독해가 어려워지며 디버깅도 매우 곤란해 질 것이다.

- 실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경 이라고 말할 수 있겠다.

- 일반적으로 실행 가능한 코드는 전역 코드와 함수 내 코드이다.

- 자바스크립트 엔진은 코드를 실행하기 위하여 실행에 필요한 여러가지 정보를 알고 있어야 한다.

  - 변수 : 전역변수, 지역변수, 매개변수, 객체의 프로퍼티
  - Scope
  - 함수 선언식
  - this

- 이와 같이 실행에 필요한 정보를 형상화하고 구분하기 위해 자바스크립트 엔진은 실행 컨텍스트를 물리적 객체의 형태로 관리한다. 아래의 코드를 살펴보자.

<br/>

```sh
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
```

1. 컨트롤이 실행 가능한 코드로 이동하면 논리적 스택 구조를 가지는 새로운 실행 컨텍스트 스택이 생성된다. 스택은 LIFO(Last In First Out, 후입 선출)의 구조를 가지는 나열 구조이다.
2. 전역 코드로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓인다. 전역 실행 컨텍스트는 애플리케이션이 종료될 때까지 유지된다.
3. 함수를 호출하면 해당 함수의 실행 컨텍스트가 생성되며 직전에 실행된 코드 블록의 실행 컨텍스트 위에 쌓인다.
4. 함수 실행이 끝나면 해당 함수의 실행 컨텍스트를 파기하고 직전의 실행 컨텍스트에 컨트롤을 반환한다.

<br/>

## 실행 컨텍스트의 3가지 객체

<br/>

### Variable Object (VO / 변수객체)

<br/>

- 실행 컨텍스트가 생성되면 자바스크립트 엔진은 실행에 필요한 여러 정보들을 담을 객체를 생성한다. 이를 Variable Object(VO / 변수 객체)라고 한다. Variable Object는 코드가 실행될 때 엔진에 의해 참조되며 코드에서는 접근할 수 없다.

- Variable Object : 변수, 매개변수(parameter), 인수정보(arguments),함수 선언식(함수 표현식X)

[전역 컨텍스트의 경우]

- Variable Object는 유일하며 최상위에 위치하고 모든 전역 변수, 전역 함수 등을 포함하는 전역 객체(Global Object / GO)를 가리킨다. 전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.

- foo:Function Object, x:"xxx"

[함수 컨텍스트의 경우]

- Variable Object는 Activation Object(AO / 활성 객체)를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.

- arguments:{}, bar:Function Object, y:"yyy"

<br/>

### Scope Chain (SC)

<br/>

- 스코프 체인은 해당 전역 또는 함수가 참조할 수 있는 변수, 함수 선언식 등의 정보를 담고 있는 전역 객체(GO) 또는 활성 객체(AO)의 리스트를 가리킨다.

- 현재 실행 컨텍스트의 활성 객체(AO)를 선두로 하여 순차적으로 상위 컨텍스트의 활성 객체(AO)를 가리키며 마지막 리스트는 전역 객체(GO)를 가리킨다.

[함수 컨텍스트의 경우]

- Scope Chain는 활성 객체(AO)와 전역 객체(GO)를 가리키며,

[전역 컨텍스트의 경우]

- Scope Chain는 전역 객체(GO)를 가르킨다.

<br/>

### this value

<br/>

- this 프로퍼티에는 this 값이 할당된다. this에 할당되는 값은 함수 호출 패턴에 의해 결정된다.

<br/>

## 실행 컨텍스트의 생성과정

<br/>

1. 컨트롤이 전역 실행 컨텍스트에 진입하기 전, 글로벌 오브젝트(GO : Built-In, BOM, DOM)생성

<br />

2. 전역코드에 컨트롤이 진입 후, 전역 실행 컨텍스트 생성되고 실행 컨텍스트 스택에 밑에 쌓임(LIFO : 후입선출)

<br />

3. 전역 실행 컨텍스트에 스코프 체인의 생성과 초기화 실행, 0번째 리스트에 GO 담음

<br />

4. 변수의 객체화(VO에 프로퍼티와 값을 추가하는 것) 실행, 전역 실행 컨텍스트에 VO는 GO이다.

<br />

5. 함수 foo의 선언 처리(함수 호이스팅),

```sh
  GO => {
        foo:function object,
        [[Scopes]]:[Global] (Scope Chain)
}
```

- [[Scope]]프로퍼티는 자신을 포함하는 외부 함수의 실행 컨텍스트가 소며라여도 참조할 수 있다. 이것이 클로저이다.

<br />

6. 변수 x의 선언 처리(변수 호이스팅),

```sh
GO => {
          foo:function object,
          x:undefined
          [[Scopes]]:[GO] (Scope Chain)
        }
```

<br />

7. 전역 컨텍스트의 this value 결정, this는 GO이다.

<br />

8. 변수의 할당,

```sh
GO => {
          foo:function object,
          x:undefined
          [[Scopes]]:[GO] (Scope Chain)
        }
```

<br/>

9. 함수 foo의 실행, 함수 실행 컨텍스트\_1가 생성되고 전역 실행 컨텍스트 스택에 위에 쌓임(LIFO : 후입선출)

<br />

10. 함수 실행 컨텍스트\_1의 스코프체인의 AO_1에 대한 레퍼런스 설정

<br />

11. 함수 실행 컨텍스트\_1의 스코프체인의 AO_1에 대한 레퍼런스 설정 후, 0번째 리스트에 AO_1를 담고 1번째 리스트에 GO를 담음

<br />

12. 변수의 객체화 실행, 이 함수 실행 컨텍스트\_1에 VO는 AO_1다.

<br />

13. 함수 bar의 선언 처리(함수 호이스팅), bar의[[Scope]]는 AO_1의 스코프체인이다., 변수 y의 선언처리(변수 호이스팅)

```sh
GO => {
          bar:function object,
          y:undefined
          [[Scopes]]:[AO_1,GO] (Scope Chain)
        }
```

<br/>

14. 함수 실행 컨텍스트\_1의 this value 결정(내부함수이므로 GO가 설정됨)

<br />

15. 변수의 할당,

```sh
AO_1 => {
          bar:function object,
          y:'yyy'
          [[Scopes]]:[AO_1,GO] (Scope Chain)
        }
```

<br />

16. 함수 bar의 실행, 함수 bar가 실행되기 시작하면 새로운 실행 컨텍스트가 생성되어 함수실행 컨텍스트\_1 위에 쌓인다.

<br />

[링크참조] https://poiemaweb.com/js-execution-context
