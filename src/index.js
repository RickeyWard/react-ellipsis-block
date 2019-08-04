import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from "prop-types";
import styles from './styles.css';
import { useLazyWindowWidth, useWindowWidth } from './resizeWatcher';

export function EllipsisBlock(props) {
  const [ellipsed, setEllipsed] = useState(false);
  // const windowWidth = useLazyWindowWidth();
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

export function EllipsisBlockLazy(props) {
  const [ellipsed, setEllipsed] = useState(false);
  const windowWidth = useLazyWindowWidth();

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

EllipsisBlock.propTypes = {
  title: PropTypes.string
};

EllipsisBlockLazy.propTypes = {
  title: PropTypes.string
};

export default EllipsisBlock;