const { bootstrap, L10N } = require("devtools-launchpad");
const React = require("react");
const ReactDOM = require("react-dom");

// this function is called when the tool connects to the client
function onConnect({ client } = {}) {
}

// this is the tool's root element
const root = document.createElement("div");
root.innerHTML = "hello world"

bootstrap(React, ReactDOM, root)
  .then(onConnect)
