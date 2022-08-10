# usage

```
# init
nvm use
npm install

# action #1 start nestjs app
npm run start

# action #2 trigger controller with dynamic import
curl http://localhost:6556

# problem: jest cannot find module, but application worked fine
npm run test

> test-esm-deps@0.0.1 test
> jest

 FAIL  src/app.controller.spec.ts
  ● Test suite failed to run

    src/app.controller.ts:9:28 - error TS2307: Cannot find module '@lodestar/params' or its corresponding type declarations.

    9     const p = await import('@lodestar/params')
                                 ~~~~~~~~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.211 s

``` 