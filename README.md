# buffer-style-guide

[![NPM Version](https://img.shields.io/npm/v/buffer-style.svg)](https://www.npmjs.com/package/buffer-style)

A unified style and components to use across Buffer applications and services

## Usage

To use in your project. Use npm to install and use either Webpack or browserify
to build your project:

```
$ npm install --save buffer-style
```

```javascript
// ES5
var Card = require('buffer-style').Card;
// ES2015
import { Card } from 'buffer-style'
```

## Development

### Installing

```
$ git clone git@github.com:bufferapp/buffer-style.git
$ npm install
$ npm install -g gulp
```

### Building
Building the css.  Run this command when adjusting any .scss
```
$ npm run build
```

### Viewing the style guide
```
$ npm start
```
This will run a local web server where the index.html is the style guide

Head over to: http://localhost:3000 to view the style guide.  

### Publishing

To publish the style guide for consumption on npm, first run the prepublish task.

```
$ npm run prepublish
$ npm publish
```

### Directory Structure
```bash
/dist - all css and js files built to be included in other projects
/src  - all source files for react components and scss files
/public - all files for rendering the style guidde only
```
