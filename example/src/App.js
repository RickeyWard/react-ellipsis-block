import React, { Component } from 'react'
import EllipsisBlock, { EllipsisBlockLazy, EllipsisBlockControlled } from 'react-ellipsis-block';
import { Resizable } from 're-resizable'

export default class App extends Component {

  state = {
    resizeWidth: 200
  }

  componentDidMount() {
    window.Prism.highlightAll();
  }

  render() {
    const exampleText = "This is a long text that could be ellipsed";
    return (
      <div>
        <h1>react-ellipsis-block Demo</h1>
        <p>For layout, we might want the text to eclipse, but we don't want to lose the data. Adding a title to an element makes it show a browser based tooltip on hover, But It's odd for it to happen if there isn't a need. This component helps with that issue by hiding the title if the ellipsis isn't being used.</p>
        <pre>
          <code className="language-jsx">
            {`
import EllipsisBlock, {EllipsisBlockLazy, EllipsisBlockControlled} from 'react-ellipsis-block'
  `}
          </code>
        </pre>
        <p>Resize window small to cause ellipsis to happen, hover over ellipsed text for title expansion</p>


        <EllipsisBlock title="Standard Ellipsis Block" renderAs="h1">Standard Ellipsis Block</EllipsisBlock>
        <pre>
          <code className="language-jsx">
            {`
//^^^ Markup for the block above ^^^
<EllipsisBlock
  title="Standard Ellipsis Block"
  renderAs="h1">
  Standard Ellipsis Block
</EllipsisBlock>
  `}
          </code>
        </pre>
        <p>Standard use block, creates a resize listener for each element.</p>
        {Array.from(Array(5)).map((v, idx) => {
          const t = `${Math.random(10000)} ${exampleText}`;
          return (<EllipsisBlock key={idx} title={t} renderAs="h4">{t}</EllipsisBlock>)
        })}
        <pre>
          <code className="language-jsx">
            {`
//^^^ Markup for the blocks above ^^^
{Array.from(Array(5)).map((v,idx)=>{
  const t = \`\${Math.random(10000)} \${exampleText}\`;
  return (<EllipsisBlock key={idx} title={t} renderAs="h4">{t}</EllipsisBlock>)
})}
  `}
          </code>
        </pre>
        {/* Lazy  */}
        <EllipsisBlockLazy title="Lazy Ellipsis Block" renderAs="h1">Lazy Ellipsis Block</EllipsisBlockLazy>
        <p>Lazy use block, uses a single resize event, and waits for window resizing to settle before setting state on the react components, This is better for longer lists of ellipsis elements, but extra overhead for one offs or just a few on a page.</p>
        {Array.from(Array(5)).map((v, idx) => {
          const t = `${Math.random(10000)} Lazy ${exampleText}`;
          return (<EllipsisBlockLazy key={idx} title={t} renderAs="h4">{t}</EllipsisBlockLazy>)
        })}
        <pre>
          <code className="language-jsx">
            {`
//^^^ Markup for the blocks above ^^^
<EllipsisBlockLazy title="Lazy Ellipsis Block" renderAs="h1">Lazy Ellipsis Block</EllipsisBlockLazy>
<p>Lazy use block, uses a single resize event, and waits for window resizing to settle before setting state on the react components, This is better for longer lists of ellipsis elements, but extra overhead for one offs or just a few on a page.</p>
{Array.from(Array(5)).map((v,idx)=>{
  const t = \`\${Math.random(10000)} Lazy \${exampleText}\`;
  return (<EllipsisBlockLazy key={idx} title={t} renderAs="h4">{t}</EllipsisBlockLazy>)
})}
  `}
          </code>
        </pre>
        {/* controlled  */}
        <EllipsisBlockControlled title="Controlled Ellipsis Block" renderAs="h1">Controlled Ellipsis Block</EllipsisBlockControlled>
        <p>Controlled use block, Doesn't watch resize events. Renders title if title provided. Still adds ellipsis styles</p>
        {Array.from(Array(5)).map((v, idx) => {
          const t = `${Math.random(10000)} Controlled ${exampleText}`;
          return (<EllipsisBlockControlled key={idx} title={t} renderAs="h4">{t}</EllipsisBlockControlled>)
        })}
        <pre>
          <code className="language-jsx">
            {`
//^^^ Markup for the blocks above ^^^
<EllipsisBlockControlled title="Controlled Ellipsis Block" renderAs="h1">Controlled Ellipsis Block</EllipsisBlockControlled>
<p>Controlled use block, Doesn't watch resize events. Renders title if title provided. Still adds ellipsis styles</p>
{Array.from(Array(5)).map((v,idx)=>{
  const t = \`\${Math.random(10000)} Controlled \${exampleText}\`;
  return (<EllipsisBlockControlled key={idx} title={t} renderAs="h4">{t}</EllipsisBlockControlled>)
})}
  `}
          </code>
        </pre>


        <h1>Non Window Resize Events</h1>
        <Resizable
          minHeight={100}
          maxHeight={100}
          handleStyles={{
            right: {
              borderRight: "double 1px #ddd"
            }
          }}
          style={{
            padding: "10px",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
          defaultSize={{
            width: 200,
            height: 100
          }}
          onResizeStop={(e, direction, ref, d) => {

            this.setState({
              resizeWidth: this.state.resizeWidth + d.width,
            });
          }}
        >
          <EllipsisBlock title="Standard Ellipsis Block" renderAs="h1" width={this.state.resizeWidth}>Standard Ellipsis Block</EllipsisBlock>
        </Resizable>
        <p>Try dragging the right side of the block, this resize isn't triggered by a window event, so we have to
          pass "width" into the "EllipsisBlock", this value is only used to watch for changes
        </p>
        <pre>
          <code className="language-jsx">
            {`
//^^^ Markup for the block above (excluding the resizer) ^^^
<EllipsisBlock title="Standard Ellipsis Block"
    renderAs="h1"
    width={this.state.resizeWidth}>
        Standard Ellipsis Block
</EllipsisBlock>
  `}
          </code>
        </pre>
        <p>end</p>
      </div>
    )
  }
}
