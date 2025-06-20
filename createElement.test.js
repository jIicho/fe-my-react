import { describe, it, expect } from "vitest";
import { createElement } from "./createElement.js";

describe("createElement 함수 테스트", () => {
  it("기본 엘리먼트 생성", () => {
    const element = createElement(
      "div",
      { id: "container" },
      createElement("h1", null, "안녕! 코드스쿼드"),
      createElement("p", null, "궁시렁 궁시렁")
    );

    expect(element.type).toBe("div");
    expect(element.props.id).toBe("container");
    expect(element.props.children.length).toBe(2);
  });
});

describe("createTextElement 함수 테스트", () => {
  it("텍스트 노드 처리 테스트", () => {
    const textNode = createElement("p", null, "hello");
    expect(textNode.props.children[0]).toEqual({
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: "hello",
        children: [],
      },
    });

    const element = createElement("span", null, "text");
    expect(element.props.children.length).toBe(1);
  });
});
