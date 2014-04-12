fakedata
======

[![Build Status](https://travis-ci.org/danielabar/fakedata.svg?branch=master)](https://travis-ci.org/danielabar/fakedata)

Writing Node Modules with TutsPremium.

Learning how to write and publish an npm module using TDD with mocha.

Also using npm scripts for development workflow tasks.

  ```
  npm run lint
  npm run test
  npm run coverage
  ```

Or to run lint and coverage (which also runs the tests) all in one line:

  ```
  npm run dev
  ```

To see the coverage reports:

  ```
  cd coverage/lcov-report
  python -m SimpleHTTPServer
  ```

Browse to http://localhost:8000