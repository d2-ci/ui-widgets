import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
export const TextIcon = ({
  name,
  onClick
}) => {
  let title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return React.createElement("div", {
    onClick: onClick,
    className: "jsx-1795768421"
  }, React.createElement("p", {
    className: "jsx-1795768421"
  }, title), React.createElement(_JSXStyle, {
    id: "1795768421"
  }, ["div.jsx-1795768421{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;overflow:hidden;border-radius:50%;background-color:rgba(0,0,0,0.3);color:#fff;cursor:pointer;}", "p.jsx-1795768421{font-size:14px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;text-transform:uppercase;}"]));
};
TextIcon.defaultProps = {
  onClick: undefined
};
TextIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};