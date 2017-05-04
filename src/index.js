/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
