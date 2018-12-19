# React build enviroment with code splitting

This is the next `react-code-splitting` version that is using `babel.config.js`.

This project is generated by [code-template-generator](https://www.npmjs.com/package/code-template-generator)

|Main packages|Version|Notes|
|---|:---:|---|
|[React](https://reactjs.org/)|16||
|[Babel](https://babeljs.io/docs/en)|7|[Babel 7 released](https://babeljs.io/blog/2018/08/27/7.0.0) and [removing Babel's stage presets](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets)|
|[Babel Loader](https://github.com/babel/babel-loader)|8||
|[Webpack](https://webpack.js.org/concepts/)|4||
|[Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)|3||

Other packages
* [Clean for WebPack](https://github.com/johnagan/clean-webpack-plugin)
* [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
* [CSS Loader](https://github.com/webpack-contrib/css-loader)
* [Style Loader](https://github.com/webpack-contrib/style-loader)
* [write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin)
* [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

## Features
||Location|
|---|---|
|Source code|`./src`|
|HTML template|`./src/index.html`|
|Styles|`./src/styles.css`|
|Entrypoint|`./src/index.js`|
|Images|`./src/images`|
|Webpack Dev Server custom config|`./webpack.custom.js`|

* Auto refresh whenever you make a change in your code.
* Directory `./dist` is deleted and then created automatic every time you run the command `npm run build`.
* CSS, JS files injected automatic into HTML template file `index.html`.
* Using only for `react-code-splitting` template:
    * Code splitting: Your code compiled into directory `./dist` with three separate file extensions `*.html, *.css, *.js`.
    * Image handling: Auto copy only directory `./src/images` into `./dist` when you compile your code or during development -> Improve performance.
    * You can use `async`/ `await` for fetching data from API in your code.

Tested on:
* Windows 10 (version 1803)
* MacOS High Sierra (version 10.13)
* Debian 9

## Using
* Run the command `npm i` to install all needed dependencies.
* Other commands:
    * `npm run start` - to start Webpack Dev Server
    * `npm run build` - to compile your app with production mode in Webpack into folder `./dist`
* Local web server started at `htpp://localhost:9000`

## References
* [Browserslist](https://github.com/browserslist/browserslist)
* [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
* [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)