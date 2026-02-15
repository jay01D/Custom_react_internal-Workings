const root = document.getElementById("root");

// const element = document.createElement("h1");
// element.textContent = "Hello World";

function createElement(tag, attribute, children) {
  const element = document.createElement(tag);
  element.textContent = children;
  for (const key in attribute) {
    element[key] = attribute[key];
  }
  return element;
}

const element = createElement(
  "h1",
  { className: "heading", id: "head" },
  "hello from h1",
);

root.appendChild(element);
