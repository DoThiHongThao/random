# Random number

[Demo](https://sw999.github.io/random-number)

An experiment: generate a random positive integers in a given range.

Instead of using the unsafe `Math.random()`, *Random number* uses the Web Crypto API in browsers.

![Generate a random positive integers in a given range](https://user-images.githubusercontent.com/3176886/95495971-d6554400-09a8-11eb-8bf4-70cced9beae0.jpg)

<a href="https://github.com/sw999/random-number/blob/master/LICENSE.md"><img src="https://img.shields.io/github/license/sw999/random-number.svg?style=flat-square" alt="License"></a> <a href="https://github.com/SW999/random-number/tags"><img src="https://img.shields.io/github/v/tag/sw999/random-number.svg?sort=semver&style=flat-square" alt="Version"></a> ![GitHub last commit](https://img.shields.io/github/last-commit/sw999/random-number.svg?style=flat-square)

## Built With
* [Parcel](https://parceljs.org/) web application bundler
* [React](https://reactjs.org/) with TypeScript
* [SASS](https://sass-lang.com/)
* [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
* Tests via Jest and @testing-library/react
* progressive web application (PWA)

## Getting started


* Clone or download repo
* Install dependencies:

```sh
cd random-number
npm i
```


## Usage

* For start:
```sh
npm start
```

Tab with URL *http://localhost:1234* will be open in a browser.

* For build:
```sh
npm run build
```
## Tests

```sh
npm run test
```

or

```sh
npx majestic
```

## License

MIT © Siarhei Vaitehovich
