# buffer-style-guide

[![NPM Version](https://img.shields.io/npm/v/buffer-style.svg)](https://www.npmjs.com/package/buffer-style)

A unified style and components to use across Buffer applications and services

## Usage

To use in your project. Use npm to install and use either Webpack or browserify
to build your project:

```
$ npm install --save buffer-style
```

### React components

```javascript
// ES5
var Card = require('buffer-style').Card;
// ES2015
import { Card } from 'buffer-style'
```

### CSS

To use the css in your project copy the stylesheet from your `node_modules`
directory. Example:

```
$ cp ./node_modules/buffer-style/dist/css/style.css ./my-app/assets/style-code.css
```


## Development

### Installing

```
$ git clone git@github.com:bufferapp/buffer-style.git
$ npm install
$ npm install -g gulp
```

### Start the dev server and watch compilation

This will start a server at `http://localhost:3000` and auto-compile all css and
javascript bundles.

```
$ npm start
```

### Webpack dev Server

\**Work in Progress*\*

### Publishing

To publish the style guide for consumption on npm, first run the prepublish task.

```
$ npm run prepublish
$ npm publish
```

To publish on [Github pages](http://bufferapp.github.io/buffer-style/) run:

**WARNING!**
Commit all changes! 😅👍

```
$ npm run github-pages
```

### Directory Structure
```bash
/src  - all source files for react components and scss files
/public - all files for rendering the style guide only
/dist - all css and js files built to be included in other projects
```
