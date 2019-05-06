import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
export const Title = ({
  app,
  instance
}) => React.createElement("div", {
  className: "jsx-2721515324"
}, app ? `${instance} - ${app}` : `${instance}`, React.createElement(_JSXStyle, {
  id: "2721515324"
}, "div.jsx-2721515324{overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:500;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;white-space:nowrap;}"));