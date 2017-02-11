### Hello World

[![Greenkeeper badge](https://badges.greenkeeper.io/devtools-html/hello-world.svg)](https://greenkeeper.io/)

This project shows the simplest launchpad tool that can be built. Hopefully, we can use it to also make the launchpad setup a little simpler

#### Bootstrap Steps

##### Get the project setup

```bash
mkdir hello-world
cd hello-world
git init
vim .gitignore # add node_modules
yarn init
yarn add devtools-launchpad
```

##### Copy skeleton files:

The basic launchpad principle is that it provides generic files, which are overriden with tool-specific needs. This is true for the webpack config, development server, and other files.

1. `webpack.config` - webpack config for tool overrides
2. `src/index.js` - bootstrap file, which is where you launch your app in onConnect
3. `bin/dev-server.js` - development server with tool overrides.
4. `bin/getConfig` - loads tool's configuration from `development.json`.
5. `configs/development.json` - has tool specific configs.

##### Add start script

Add the start script to `package.json`

```json
"scripts": {
  "start": "node bin/dev-server.js"
}
```
