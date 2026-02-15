const root = document.getElementById("root");

// const element = document.createElement("h1");
// element.textContent = "Hello World";

// function createElement(tag, attribute, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;
//   for (const key in attribute) {
//     if (key === "style") {
//       Object.assign(element.style, attribute.style);
//     } else {
//       element[key] = attribute[key];
//     }
//   }
//   return element;
// }

const React = {
  createElement: function (tag, attribute, children) {
    const element = document.createElement(tag);
    element.textContent = children;
    for (const key in attribute) {
      if (key === "style") {
        Object.assign(element.style, attribute.style);
      } else {
        element[key] = attribute[key];
      }
    }
    return element;
  },
};

const element = React.createElement(
  "h1",
  {
    className: "heading",
    id: "head",
    style: { fontSize: "20px", backgroundColor: "orange" },
  },
  "hello from h1",
);

root.appendChild(element);
