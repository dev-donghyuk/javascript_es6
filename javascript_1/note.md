# Javascript_1

## Object는 객체

- object는 인스턴스

```sh
{key:value}
```

```sh
var test = new Number("123")
console.log(test) // __proto__와 파라미터값을 프리미티브 값으로 변경한 [[PrimitiveValue]]가 있음
```

## 오브젝트.prototype

- 인스턴스를 생성가능 여부 기준
- 프로퍼티를 연결하는 오브젝트(constructor,method)

## 프로토타입 객체

- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체연결되어있고,
  부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다.
- [[Prototype]]의 값은 Prototype(프로토타입) 객체이며 \_\_proto\_\_ property로 접근할 수 있다.
- 객체는 \_\_proto\_\_ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Objecprototype을 가리키고 있다.
- 모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]]을 가진다
- 함수도 객체이므로 [[Prototype]]를 갖는다. 그리고 prototy 프로퍼티소유하게 된다.

```sh
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function(name){
  console.log('Hi! my name is ' + this.name);
};

console.log(person.__proto__ === Object.prototype); // true
```

- person는 객체리터럴 방식으로 생성되었는데 객체리터럴 방식도 결국은 Object()이니 person의 프로토타입객체는 Object()로 생성된 객체의 prototype이다

## constructor 프로퍼티

- 객체의 입장에서 자신을 생성한 객체를 가리킨다.

```sh
function Person(name) {
  this.name = name;
}
var foo = new Person('Lee');
console.log(Person.prototype.constructor === Person);
```

## 프로토타입 체인

- 자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.

```sh
var student = {
  name: 'Lee',
  score: 90
}

console.log(student.hasOwnProperty('name')); // true
// Object.prototype.hasOwnProperty('name')과 같다
```
