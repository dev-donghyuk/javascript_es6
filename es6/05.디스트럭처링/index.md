# 디스트럭처링

-  구조화된 배열 또는 객체를 디스트럭처링하여 개별적인 변수에 할당하는 것이다. 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.

### 배열 디스트럭처링

<br/>

```sh
const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three); // 1 2 3
```

<br/>

### 객체 디스트럭처링

<br/>

```sh
const obj = { firstName: 'Ungmo', lastName: 'Lee' };
const { lastName, firstName } = obj;
console.log(firstName, lastName); // Ungmo Lee
```
