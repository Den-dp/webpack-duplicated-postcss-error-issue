# webpack-duplicated-postcss-error-issue

## Steps

```shell
npm i
npm run build
```

## Expected output

```shell
> npm run build

> webpack-duplicated-postcss-error@1.0.0 build
> webpack build --mode=production

assets by status 647 bytes [cached] 1 asset
./src/index.js 23 bytes [built] [code generated]
./src/style.css 39 bytes [built] [code generated] [1 error]

ERROR in ./src/style.css
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):

SyntaxError

(2:14) from "postcss-errror-on-important" plugin: C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css Dont use !important

  1 | .test {
> 2 |   color: red !important;
    |              ^
  3 | }
  4 |
 @ ./src/index.js 1:0-21

webpack 5.94.0 compiled with 1 error in 665 ms
```

## Actual output

```shell
> npm run build

> webpack-duplicated-postcss-error@1.0.0 build
> webpack build --mode=production

assets by status 4.8 KiB [cached] 1 asset
orphan modules 39 bytes [orphan] 1 module
./src/index.js 23 bytes [built] [code generated]
./src/style.css 39 bytes [built] [code generated] [1 error]

ERROR in ./src/style.css (./src/style.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css)
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):

SyntaxError

(2:14) from "postcss-errror-on-important" plugin: C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css Dont use !important

  1 | .test {
> 2 |   color: red !important;
    |              ^
  3 | }
  4 |
 @ ./src/style.css
 @ ./src/index.js 1:0-21

ERROR in ./src/style.css
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
HookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):

SyntaxError

(2:14) from "postcss-errror-on-important" plugin: C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css Dont use !important

  1 | .test {
> 2 |   color: red !important;
    |              ^
  3 | }
  4 |

    at tryRunOrWebpackError (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\HookWebpackError.js:86:9)
    at __webpack_require_module__ (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5276:12)
    at __webpack_require__ (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5233:18)
    at C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5305:20
    at symbolIterator (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\neo-async\async.js:3485:9)
    at done (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\neo-async\async.js:3527:9)
    at Hook.eval [as callAsync] (eval at create (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\tapable\lib\Hook.js:18:14)
    at C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5211:43
    at symbolIterator (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\neo-async\async.js:3482:9)
-- inner error --
Error: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):

SyntaxError

(2:14) from "postcss-errror-on-important" plugin: C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css Dont use !important

  1 | .test {
> 2 |   color: red !important;
    |              ^
  3 | }
  4 |

    at Object.<anonymous> (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\css-loader\dist\cjs.js!C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\postcss-loader\dist\cjs.js??ruleSet[1].rules[0].use[2]!C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css:1:7)
    at C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\javascript\JavascriptModulesPlugin.js:453:10
    at Hook.eval [as call] (eval at create (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\tapable\lib\HookCodeFactory.js:19:10), <anonymous>:7:1)
    at Hook.CALL_DELEGATE [as _call] (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\tapable\lib\Hook.js:14:14)
    at C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5278:39
    at tryRunOrWebpackError (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\HookWebpackError.js:81:7)
    at __webpack_require_module__ (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5276:12)
    at __webpack_require__ (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5233:18)
    at C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\webpack\lib\Compilation.js:5305:20
    at symbolIterator (C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\neo-async\async.js:3485:9)

Generated code for C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\css-loader\dist\cjs.js!C:\tmp\webpack-duplicated-postcss-error-issue\node_modules\postcss-loader\dist\cjs.js??ruleSet[1].rules[0].use[2]!C:\tmp\webpack-duplicated-postcss-error-issue\src\style.css
1 | throw new Error("Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:14) from \"postcss-errror-on-important\" plugin: C:\\tmp\\webpack-duplicated-postcss-error-issue\\src\\style.css Dont use !important\n\n \u001b[90m 1 | \u001b[39m\u001b[33m.test\u001b[39m \u001b[33m{\u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m  color\u001b[33m:\u001b[39m red !important\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m             \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m 4 | \u001b[39m\n");
 @ ./src/index.js 1:0-21

webpack 5.94.0 compiled with 2 errors in 682 ms
```
