# 템플릿리터럴

- ES6는 템플릿 리터럴이라고 불리는 새로운 문자열 표기법을 도입하였다. (\` `)

<br/>

```sh
const template = `템플릿 리터럴은 '작은따옴표'과 "큰따옴표"를 혼용할 수 있다.`;
```

<br />

- 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백를 표현하기 위해서는 백슬래시(\)로 시작하는 이스케이프 시퀀스를 사용하여야 한다.
- ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용된다.

```sh
const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;
```

<br />

- 템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 이를 문자열 인터폴레이션이라 한다.

```sh
const first = 'Ung-mo';
const last = 'Lee';
// ES5
console.log('My name is ' + first + ' ' + last + '.');
// ES6
console.log(`My name is ${first} ${last}.`);
```
