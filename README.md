# OPG Performance and Error Google Analytics Library

> Performance and Error tracking analytics plugin for Google Analytics

[![CircleCI](https://circleci.com/gh/ministryofjustice/opg-performance-analytics/tree/master.svg?style=svg)](https://circleci.com/gh/ministryofjustice/opg-performance-analytics)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

To install via NPM run

`npm install opg-performance-analytics`

To install via Yarn run

`yarn add opg-performance-analytics`

This package allows you to import two different methods of analytics tracking. To import and run them you can use the following code.

```
import {
  PerformanceAnalytics,
  ErrorAnalytics,
} from "opg-performance-analytics";

PerformanceAnalytics();
ErrorAnalytics();
```

### PerformanceAnalytics

This will use a great library called [perfume.js](https://www.npmjs.com/package/perfume.js) to collect various performance metrics from the users browser. It then collects and sends this data to your Google Analytics instance.

Visit [https://www.npmjs.com/package/perfume.js](https://www.npmjs.com/package/perfume.js) for a full list of metrics you will recieve.

### ErrorAnalytics

This implements a very basic JS Error capture script which aims to collect any JavaScript error messages and send them to your Google Analytics account.

## Development

You will notice we have a few extras added into the package to help maintain a clean code base for others to follow. To enable this we use [Husky](https://www.npmjs.com/package/husky) to maintain and configure our hooks.

We have 2 hooks.

#### prepare-commit-msg

This will interrupt your commit message and lead you through a set of prompts. Fill these in and the commit message will be formatted to follow the semantic release pattern. This enables us to handle automated versioning of releases and generation of release notes at the CI level. Please make these as detailed as possible.

#### pre-commit

This action will use [lint-staged](https://www.npmjs.com/package/lint-staged). We run eslint, prettier and tests against any staged files.

### Commitizen

We use [commitizen](https://www.npmjs.com/package/commitizen) to control and format our commit messages. For more information, please check out the link to read why.

## Testing

Running tests can be done with the four options below.

`yarn run test` - Will run a one off test across all \*.test.js files.

`yarn run test:watch` - Will begin watch mode for file changes and run tests appropriate to the files you have changed.

`yarn run test:staged` - Used by Husky Hooks, this is used to test only staged files before a commit

`yarn run test:coverage` - Will give you feedback on your test coverage. The output of which will be output as a `lcov-report` inside the `coverage` folder

## Release

Releases are done automatically by our CI server. All development must be done on a branch and when approved and merged to master, the release cycle will happen.

We use [semantic-release](https://www.npmjs.com/package/semantic-release) for this. One a merge to master it will do the following.

- Read the commit messages since the last release
- Update the version number accordingly in package.json
- Update the release notes
- git tag the release and push to git
- Publish new version to NPM

## Linking to local site

Should you wish to test locally on an external application then you can use `npm/yarn link` to create a local Symlink to this repo.

- In your Terminal, navigate to the root of this repo
- run `yarn link`
- Now navigate to the project you want to import this into
- run `yarn add opg-performance-analytics`

You can now access the local package and get instant updates from code changes.

## Recommended VSCode Extensions

**Name: ESLint**

Id: dbaeumer.vscode-eslint

Description: Integrates ESLint JavaScript into VS Code.

Version: 2.1.3

Publisher: Dirk Baeumer

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

**Name: Prettier - Code formatter**

Id: esbenp.prettier-vscode

Description: Code formatter using prettier

Version: 4.3.0

Publisher: Esben Petersen

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
