# 이벤트

### 이벤트

<br/>

-  **이벤트**는 어떤 사건을 의미한다. 브라우저에서의 이벤트란 예를 들어 사용자가 버튼을 **클릭**했을 때, 웹페이지가 **로드**되었을 때와 같은 것인데 이것은 **DOM 요소와 관련**이 있다.
-  이벤트가 발생하는 **시점**이나 **순서**를 사전에 인지할 수 없으므로 일반적인 제어 흐름과는 다른 접근 방식이 필요하다.
-  즉, **이벤트가 발생**하면 누군가 이를 **감지**할 수 있어야 하며 그에 대응하는 **처리를 호출**해 주어야 한다.
-  **브라우저**는 **이벤트를 감지할 수 있으며** 이벤트 **발생 시에는 통지**해 준다. 이 과정을 통해 사용자와 웹페이지는 **상호작용**이 가능하게 된다.
-  이벤트가 발생하면 그에 맞는 반응을 하여야 한다. 이를 위해 이벤트는 일반적으로 함수에 연결되며 그 함수는 이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되면 실행된다.
   이 함수를 **이벤트 핸들러**라 하며 **이벤트에 대응하는 처리**를 기술한다.

<br/>

### 이벤트루프와 동시성

<br/>

-  브라우저는 **단일 쓰레드**에서 **이벤트 드리븐 방식**으로 **동작**한다.

-  **단일 쓰레드**는 쓰레드가 하나뿐이라는 의미이며 이말은 곧 **하나의 일만을 처리할 수 있다는 것**을 의미한다.
-  하지만 실제로 동작하는 웹 애플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴진다.
-  이처럼 **자바스크립트의 동시성**을 지원하는 것이 바로 **이벤트 루프**이다.

<br/>

### 브라우저의 환경

<br/>

-  대부분의 자바스크립트 엔진은 크게 2개의 영역으로 나뉜다.

#### 첫번째 영역

-  Call Stack

   -  함수가 호출되면 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고 순차적으로 실행된다.
      자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 task가 종료하기 전까지는
      다른 어떤 task도 수행될 수 없다.

-  Heap

   -  동적으로 생성된 객체 인스턴스가 할당되는 영역이다.

-  자바스크립트 엔진은 단순히 작업이 요청되면 Call Stack을 사용하여 요청된 작업을 순차적으로 실행할 뿐이다. 앞에서 언급한 동시성 지원하기 위해 필요한 **비동기 요청(이벤트를 포함) 처리**는 자바스크립트 엔진을 구동하는 환경 즉 **브라우저(또는 Node.js)가 담당**한다.

<br/>

#### 두번째 영역

<br/>

-  Event Queue(Task Queue)

   -  **비동기 처리 함수**의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 **콜백 함수가 보관되는 영역**으로 이벤트 루프 의해 특정 시점(Call Stack이 비어졌을 때)에
      순차적으로 Call Stack으로 이동되어 실행된다.

-  Event Loop
   -  **Call Stack 내에서 현재 실행중인 task가 있는지** 그리고 **Event Queue에 task가 있는지 반복하여 확인**한다. 만약 **Call Stack이 비어있다면** **Event Queue 내의 task가 Call Stack으로 이동하고 실행**된다.

<br />

```sh
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  setTimeout(function () {
    console.log('func2');
  }, 0);

  func3();
}

function func3() {
  console.log('func3');
}

func1();
```

<br/>

(setTimeout 비동기 함수 시점)

1. 함수 func1이 호출되면 함수 **func1은 Call Stack**에 쌓인다.
2. 그리고 함수 func1은 함수 func2을 호출하므로 함수 **func2가 Call Stack에 쌓이고** **setTimeout가 호출**된다.
3. setTimeout의 콜백함수는 지정한 시간이 지나 “tick” 이벤트가 발생하면 **이벤트 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행**된다.

<br />

```sh
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  // <button class="foo">foo</button>
  const elem = document.querySelector('.foo');

  elem.addEventListener('click', function () {
    this.style.backgroundColor = 'indigo';
    console.log('func2');
  });

  func3();
}

function func3() {
  console.log('func3');
}

func1();
```

<br />

(addEventListener 시점)

1. 함수 func1이 호출되면 함수 func1은 Call Stack에 쌓인다.

2. 그리고 함수 func1은 함수 func2을 호출하므로 함수 func2가 Call Stack에 쌓이고 addEventListener가 호출된다.

3. addEventListener의 콜백함수는 foo 버튼이 클릭되어 click 이벤트가 발생하면 이벤트 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.
