# 객체종류

### 네이티브 객체

1. Object
2. Function
3. Number
4. String
5. Boolean
6. Array
7. Math
8. Date
9. RegExp
10.   Error
11.   Symbol

<br/>

### 호스트 객체

1. 전역 객체
   -  전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 브라우저에서는 **window**, Node.js에서는 **global** 객체를 의미한다.
2. BOM(Browser Object Model)
   -  브라우저 객체 모델은 브라우저 탭 또는 브라우저 창의 모델을 생성한다. 최상위 객체는 **window** 객체로 현재 브라우저 창 또는 탭을 표현하는 객체이다.
   -  **window.document** : 현재 로드된 웹페이지
   -  **window.history** : 브라우저 히스토리에 기록된 웹페이지들
   -  **window.location** : 현재 페이지 URL
   -  **window.navigator** : 브라우저 관련 정보
   -  **window.screen** : 장치의 디스플레이 정보
3. DOM(Document Object Model)
   -  문서 객체 모델은 현재 웹페이지의 모델을 생성한다. 최상위 객체는 **document** 객체로 전체 문서를 표현한다. 또한 이 객체의 자식 객체들은 문서의 다른 요소들을 표현한다.
   1. document
   2. html
   3. head, body
   4. title, div-attribute
   5. p-attribute-text
