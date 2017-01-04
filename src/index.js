const { bootstrap, L10N } = require("devtools-launchpad");
const React = require("react");
const ReactDOM = require("react-dom");

function onConnect({ client } = {}) {
  debugger
}

const root = document.createElement("div");
root.innerHTML = "hello world"

bootstrap(React, ReactDOM, root)
  .then(onConnect)
