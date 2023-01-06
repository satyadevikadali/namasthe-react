// var heading = document.createElement('h1');
// heading.innerHTML = "Namasthe javascript from javascript";

// document.getElementById('root').appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

/* 
  "Create a nested header element using react.createElement(h1,h2,h3 inside a divwith class title)"


const h1 = React.createElement(
  "h1",
  {
    class: "title",
    key: "h1",
  },
  "Session 3"
);

const h2 = React.createElement(
  "h2",
  {
    class: "title",
    key: "h2",
  },
  "Laying the foundation"
);

const h3 = React.createElement(
  "h2",
  {
    class: "title",
    key: "h3",
  },
  "Create a nested header element using react.createElement(h1,h2,h3 inside a divwith class title)"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [h1, h2, h3]
);
*/

/* Create a nested header element using JSX
const container = (
  <div id="container">
    <h1>Session 3</h1>
    <h2>Laying the foundation</h2>
    <h3>Create a nested header element using JSX</h3>
  </div>
);
*/
/* Create a nested header element using function component
const Container = function () {
  return (
    <div id="container">
      <h1>Session 3</h1>
      <h2>Laying the foundation</h2>
      <h3>Create a nested header element using function component</h3>
    </div>
  );
};
*/

const Container = function () {
  return (
    <div id="container">
      <Header />
      <h1 titlename="title">Session 3</h1>
      <h2>Laying the foundation</h2>
      <h3>
        Create a nested header element using function component with passing
        attributes
      </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />); //passing react element inside the root
