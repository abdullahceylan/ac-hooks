# @ac-hooks/use-connectivity

A custom React Hook that provides internet connectivity status using browsers' online/offline events.

[![npm version](https://badge.fury.io/js/%40ac-hooks%2Fuse-connectivity.svg)](https://badge.fury.io/js/%40ac-hooks%2Fuse-connectivity)

## Installation

```bash
$ npm i @ac-hooks/use-connectivity
```

or

```bash
$ yarn add @ac-hooks/use-connectivity
```

## Usage

Here is a basic usage:

```js
import useConnectivity from '@ac-hooks/use-connectivity';

const { isOnline } = useConnectivity();

if (isOnline) {
  // you're back!
} else {
  // oh no! I can't see you!
}
```

## How to test

You can check it toggling the `Offline` checkbox in the `Network` pane of your `developer tools`.

## Live demo

You can view/edit the sample code above on CodeSandbox.

[![Edit demo app on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/j39z2m23z5)

## Parameters

This hook doesn't accept any parameter.

## Return

| Parameter   | Type          | Description |
| :---------- | :-------------|:---------------------- |
| `isOnline`  | bool          | Whether you are online or not|


## License

**[MIT](LICENSE)** Licensed

Contributions of any kind welcome!
