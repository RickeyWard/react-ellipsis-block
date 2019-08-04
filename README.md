# react-ellipsis-block

> react element for ellipsis overflow that provides a title or tooltip only when hovered.

[![NPM](https://img.shields.io/npm/v/react-ellipsis-block.svg)](https://www.npmjs.com/package/react-ellipsis-block) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ellipsis-block
```

## Usage

```jsx
import React, { Component } from 'react'

import EllipsisBlock from 'react-ellipsis-block'

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
      
    )
  }
}
```

## License

MIT © [rickeyward](https://github.com/rickeyward)
