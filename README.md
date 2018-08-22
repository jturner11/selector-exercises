
# selector-exercises

## Getting started

Install dependencies:

```bash
npm install
```

Run the tests:
 
```bash
npm test
```
 

## Project layout

There is a top-level `test` directory which contains test files numbered sequentially from `001.test.js` to `00N.test.js`.

```
test
├── 001.test.js
└── 002.test.js
└── ...
└── 00N.test.js
```

The idea is to make the tests pass in order. Later tests will depend upon code written to solve earlier tests.

Jest is being used as the test runner. It's set with the following flags:

```bash
jest --bail --runInBand
```

`--bail` means the jest will stop at the first failed test.
`--runInBand` ensures that the tests run sequentially.