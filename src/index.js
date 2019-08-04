import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from "prop-types";
import styles from './styles.css';

function EllipsisBlock(props) {
  const [ellipsed, setEllipsed] = useState(false);
  const windowWidth = useWindowWidth(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      if (node.offsetWidth < node.scrollWidth)
        setEllipsed(true);
      else
        setEllipsed(false);
    }
  }, [windowWidth]);

  const $rendercomp = props.renderAs || "div";
  return (
    <$rendercomp ref={measuredRef} className={styles.ellipsis} title={ellipsed && props.title ? props.title : null}>
      {props.children}
    </$rendercomp>
  );
}

//based on react hooks talk, let's us trigger re-renders on windows resizes
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); }
  });
  return width;
}

EllipsisBlock.propTypes = {
  title: PropTypes.string
};

export default EllipsisBlock;