# fe-my-react

### Vanilla JS로 구현하는 나만의 리액트 만들기 프로젝트

- 주관적으로 React의 핵심 기능이라고 생각하는 내부 작동 원리에 집중하여 재현하는 방향에 초점을 맞춤

1. createElement, createTextElement

   - JSX 없이 구조를 만들기 위한 핵심 함수

   - createElement = { type, props, children }

     > type, props, children 구조

   - React는 문자열 자식도 DOM 노드로 취급한다.  
     그래서 문자열은 별도로 가상 노드로 만들어야 함

2. Babel 설정 생략

   - Vanilla JS로 구현하는 것을 목표로 잡았기에 우선 생략, 추후 가독성을 위해 추가 예정

3. render 함수 구현 및 실행

4. Fiber Tree / FiberNode 생성

   - FiberNode = { type, props, parent, child, sibling, alternate, flags } 등등

   - type은 태그명, props는 속성, parent, child, sibling은 트리 구조를 만들기 위한 연결 고리

   - alternate는 이전 상태와 비교하기 위한 연결 고리

   - flags는 어떤 작업을 해야 할지를 담는 플래그 (Placement, Update, Deletion 등)

5. Fiber Tree 순회하며 diff 및 flags 기준 DOM 작업

   - render phase: 트리 만들고 변경 사항을 계산 하여 flag 지정,

     > 실제 DOM은 아직 조작 전.

   - commit phase: flags 보고 어떻게 바꿀지 실제 DOM 조작

6. 브라우저에 적용
   commit phase 완료 &rarr; 실제 DOM에 변경 사항 반영
