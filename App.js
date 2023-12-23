import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "i am heading ");

// JSX - HTML-like or XML-like syntax
const jsxHeading = (
  <h1 className="head" id="heading">
    Reach with raj
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading" id="heading">
      JS with Raj2
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
