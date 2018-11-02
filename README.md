# eslint-plugin-sort-after-slice

Did you called slice() after sort()?

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sort-after-slice`:

```
$ npm install eslint-plugin-sort-after-slice --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sort-after-slice` globally.

## Usage

Add `sort-after-slice` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sort-after-slice"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sort-after-slice/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here

# Contribute

Clone the repository, install packages and setup git hooks:

```
git clone https://github.com/expobrain/eslint-plugin-sort-after-slice
yarn install
git config core.hooksPath .githooks
```
