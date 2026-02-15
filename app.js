// REACT vs REACTDOM

// react job is to describe how element or ui will look like
// it does not create dom element like document.createElement
// thats the job of REACTDOM

// original react does like this👇🏻
const OriginalReact = {
  createElement: function (type, props, children) {
    return {
      type: type,
      props: {
        ...props,
        children: children,
      },
    };
  },
};
// const root = document.getElementById("root");

const reactElement = OriginalReact.createElement(
  "h1",
  {
    className: "heading",
    id: "head",
    style: { fontSize: "20px", backgroundColor: "orange" },
  },
  "hello from h1",
);

const OriginalReactDOM = {
  render: function (reactElement, root) {
    const element = document.createElement(reactElement.type);
    const { props } = reactElement;
    for (const key in props) {
      if (key === "style") {
        Object.assign(element.style, props.style);
      } else if (key === "children") {
        element.textContent = props.children;
      } else {
        element[key] = props[key];
      }
    }

    root.append(element);
  },
};

OriginalReactDOM.render(reactElement, root);

// to select root in react we need to select like this
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render()

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

// const React = {
//   createElement: function (tag, attribute, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;
//     for (const key in attribute) {
//       if (key === "style") {
//         Object.assign(element.style, attribute.style);
//       } else {
//         element[key] = attribute[key];
//       }
//     }
//     return element;
//   },
// };

// const ReactDOM = {
//   render: function (child, parent) {
//     parent.appendChild(child);
//   },
// };

const element = OriginalReact.createElement(
  "h1",
  {
    className: "heading",
    id: "head",
    style: { fontSize: "20px", backgroundColor: "orange" },
  },
  "hello from h1",
);

console.log(element);

// const root = document.getElementById("root");

// ReactDOM.render(element, root);

// root.appendChild(element);
