fakedata
======

[![Build Status](https://travis-ci.org/danielabar/fakedata.svg?branch=master)](https://travis-ci.org/danielabar/fakedata)
[![Dependency Status](https://david-dm.org/danielabar/fakedata.svg?theme=shields.io)](https://david-dm.org/danielabar/fakedata)
[![devDependency Status](https://david-dm.org/danielabar/fakedata/dev-status.svg?theme=shields.io)](https://david-dm.org/danielabar/fakedata#info=devDependencies)

[Writing Node Modules with TutsPremium](https://tutsplus.com/course/writing-node-modules/)

Learning how to write and publish an npm module using TDD with mocha.

This module generates fake data such as random names and email addresses.

### Setup

  ```
  gem install travis-lint
  npm install
  ```

### Development

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

Browse to [http://localhost:8000](http://localhost:8000)

### Using Module

To make module available to other projects before it's been published to npm, from root of module development project, run:

  ```
  npm link
  ```

This creates a symlink between the development directory, and the global node_modules directory.

Then ```cd``` to root of another project where you'd like to use this module, and run:

  ```npm link fakedata```

This creates a symlink between the node_modules of the project and fakedata in global node_modules, which itself is a symlink as explained above.

### Command Line Modules
To tell npm that module is a command line utility, specify in ```package.json```:

  ```javascript
  "preferGlobal": true,
  "bin": {
    "helloworld": "index.js"
  }
  ```

index.js MUST start with a hashbang, to tell the shell that this is a node program:

  ```bash
  #!/usr/bin/env node
  ```

To "install" the module globally, from project root, run:

  ```
  npm link
  ```

Sample output of symlink creation:

  ```
  /usr/local/bin/helloworld -> /usr/local/lib/node_modules/cli-example/index.js
  /usr/local/lib/node_modules/cli-example -> /Users/dbaron/projects/cli-example
  ```

To run the new command line bin:

  ```
  helloworld
  ```
