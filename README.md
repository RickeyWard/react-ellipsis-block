# react-ellipsis-block

> react element for ellipsis overflow that provides a title or tooltip only when hovered.

[![NPM](https://img.shields.io/npm/v/react-ellipsis-block.svg)](https://www.npmjs.com/package/react-ellipsis-block) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
[Live Demo](https://rickeyward.github.io/react-ellipsis-block/)

## Install

Depends on ReactHooks, react 16.8+ 

```bash
npm install --save react-ellipsis-block
```

## Usage

```jsx
import React, { Component } from 'react'

import EllipsisBlock, {EllipsisBlockLazy} from 'react-ellipsis-block'

class Example extends Component {
  render () {
    const longTitleThatMightEllipse = "I'm a long title that might get ellipsis-ed? but we still need to know what it is.";
    return (
      <EllipsisBlock
        title={longTitleThatMightEllipse}
      >
        {longTitleThatMightEllipse}
      </EllipsisBlock>
      <EllipsisBlock
        title={longTitleThatMightEllipse}
        renderAs="h1" /* render with a different tag */
      >
        {longTitleThatMightEllipse}
      </EllipsisBlock>

      /* Lazy use block, uses a single resize event, and waits for window resizing to settle before setting state on the react components, This is better for longer lists of ellipsis elements, but extra overhead for one offs or just a few on a page. */
      <EllipsisBlockLazy
        title={longTitleThatMightEllipse}
      >
        {longTitleThatMightEllipse}
      </EllipsisBlockLazy>
      
    )
  }
}
```

## License

MIT © [rickeyward](https://github.com/rickeyward)

## contributing

Using `create-react-library` with hooks causes a weird issue running the example and the library at the same time, it makes you have 2 reacts, somehow. you *MAY* need to run 

```bash
npm link example/node_modules/react
```
if you get an "using react hooks" error. due to reason on the list. Though I think this is fixed by asking the exaple to use the parent folder's node module, though this requires that the root npm install has already been ran before running example npm install.
