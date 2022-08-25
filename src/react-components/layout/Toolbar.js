import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Toolbar.scss";

export function Toolbar({ className, tools }) {
  return <div className={classNames(styles.toolbar, className)}>{tools}</div>;
}

Toolbar.propTypes = {
  className: PropTypes.string,
  tools: PropTypes.node
};
