import React, { Component } from 'react'
import EllipsisBlock, {EllipsisBlockLazy} from 'react-ellipsis-block'

export default class App extends Component {
  render () {
    const exampleText = "This is a long text that could be ellipsed";
    return (
      <div>
        <h1>react-ellipsis-block Demo</h1>
        <p>Resize window small to cause ellipsis to happen, hover over ellipsed text for title expansion</p>
        
        <EllipsisBlock title="Standard Ellipsis Block" renderAs="h1">Standard Ellipsis Block</EllipsisBlock>
        <p>Standard use block, creates a resize listener for each element.</p>
        {Array.from(Array(5)).map((v,idx)=>{
          const t = `${Math.random(10000)} ${exampleText}`;
          return (<EllipsisBlock key={idx} title={t} renderAs="h4">{t}</EllipsisBlock>)
        })}
        {/* Lazy  */}
        <EllipsisBlockLazy title="Lazy Ellipsis Block" renderAs="h1">Lazy Ellipsis Block</EllipsisBlockLazy>
        <p>Lazy use block, uses a single resize event, and waits for window resizing to settle before setting state on the react components, This is better for longer lists of ellipsis elements, but extra overhead for one offs or just a few on a page.</p>
        {Array.from(Array(5)).map((v,idx)=>{
          const t = `${Math.random(10000)} Lazy ${exampleText}`;
          return (<EllipsisBlockLazy key={idx} title={t} renderAs="h4">{t}</EllipsisBlockLazy>)
        })}
        <p>end</p>
      </div>
    )
  }
}
