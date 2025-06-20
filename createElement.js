// JSX 없이 구조를 만들기 위해 createElement 함수 만들기
// 전달받은 type, props, children을 기반으로 구조를 만들어서 반환하는 함수
// JavaScript 객체로 구조화
export function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

// text를 기반으로 구조를 만들어서 반환하는 함수
export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
      // TextNode는 children은 항상 빈배열
      // 작성하지 않아도 되지만, 실제 React에서 텍스트 노드의 children은 빈 배열로 설정되어 있음 따라서 동일하게 작성
      // + props.children을 순회할 때, 텍스트 노드도 순회하기 때문에 에러가 발생하지 않도록 동일하게 빈 배열로 설정
      // + 객체 구조의 일관성을 위해 작성
    },
  };
}
