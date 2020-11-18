# 클로저

```sh
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  innerFunc();
}

outerFunc(); // 10
```

1. innerFunc 함수 스코프 내에서 변수 x를 검색한다. => 실패
2. innerFunc 함수를 포함하는 외부 함수 outerFunc의 스코프에서 변수 x를 검색한다. => 성공

<br />

```sh
function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

var inner = outerFunc();
inner(); // 10
```

-  함수 outerFunc는 실행된 이후 실행 컨텍스트 스택에서 제거되었으므로 함수 outerFunc의 변수 x 또한 더이상 유효하지 않게 되어 변수 x에 접근할 수 있는 방법은 없어 보인다. 그러나 실행결과는 변수 x의 값인 10이다.

-  이처럼 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(Closure)라고 부른다.

-  클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프(렉시컬 스코프)를 기억하여 렉시컬 스코프 밖에서 호출되어도 그 환경에 접근할 수 있는 함수

-  간단히 말하면, 클로저는 자신이 생성될 때의 환경(렉시컬 환경)을 기억하는 함수다
