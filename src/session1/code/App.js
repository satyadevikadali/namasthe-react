// var heading = document.createElement('h1');
// heading.innerHTML = "Namasthe javascript from javascript";

// document.getElementById('root').appendChild(heading);

const h1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "cla",
  },
  "Heading 123"
);

const h2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [h1, h2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); //passing react element inside the root
