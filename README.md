# usage

```
# commands to run
nvm use
npm install
npm run start

# should yield
➜  test-esm-deps git:(main) ✗ npm run start

> test-esm-deps@0.0.1 start
> nest start

Error: No "exports" main defined in /home/user/test-esm-deps/node_modules/@lodestar/params/package.json
    at new NodeError (node:internal/errors:372:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:472:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:693:7)
    at resolveExports (node:internal/modules/cjs/loader:482:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/home/user/test-esm-deps/src/main.ts:1:1)

``` 