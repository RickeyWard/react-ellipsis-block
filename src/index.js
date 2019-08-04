import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from "prop-types";
import styles from './styles.css';
import { useLazyWindowWidth, useWindowWidth } from './resizeWatcher';

export function EllipsisBlock(props) {
  const [ellipsed, setEllipsed] = useState(false);
  const windowWidth = useWindowWidth(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      if (node.offsetWidth < node.scrollWidth && windowWidth)//windowWidth just so react warning goes away
        setEllipsed(true);
      else
        setEllipsed(false);
    }
  }, [windowWidth, setEllipsed]); //warnings when setEllipsed is not here

  const $rendercomp = props.renderAs || "div";
  return (
    <$rendercomp ref={measuredRef} className={styles.ellipsis} title={ellipsed && props.title ? props.title : null}>
      {props.children}
    </$rendercomp>
  );
}

//react hooks can't be in conditions, so dupes dupes
export function EllipsisBlockLazy(props) {
  const [ellipsed, setEllipsed] = useState(false);
  const windowWidth = useLazyWindowWidth();

  const measuredRef = useCallback(node => {
    if (node !== null) {
      if (node.offsetWidth < node.scrollWidth && windowWidth) //windowWidth just so react warning goes away
        setEllipsed(true);
      else
        setEllipsed(false);
    }
  }, [windowWidth, setEllipsed]);

  const $rendercomp = props.renderAs || "div";
  return (
    <$rendercomp ref={measuredRef} className={styles.ellipsis} title={ellipsed && props.title ? props.title : null}>
      {props.children}
    </$rendercomp>
  );
}

export function EllipsisBlockControlled(props) {
  const $rendercomp = props.renderAs || "div";
  return (
    <$rendercomp className={styles.ellipsis} title={props.title ? props.title : null}>
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