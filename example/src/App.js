import React, { Component } from 'react'
import EllipsisBlock from 'react-ellipsis-block'

export default class App extends Component {
  render () {
    const exampleText = "This is a long text that could be ellipsed";
    return (
      <div>
        <p>Resize window to cause ellipsis to happen, hover for title</p>
        <EllipsisBlock title={exampleText}>{exampleText}</EllipsisBlock>
        <EllipsisBlock title={exampleText} renderAs="h1">{exampleText}</EllipsisBlock>
        <EllipsisBlock title={exampleText} renderAs="h4">{exampleText}</EllipsisBlock>
      </div>
    )
  }
}
