import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import { colors, theme } from '@dhis2/ui-core';
import { Email } from '../icons/Email.js';
import { Message } from '../icons/Message.js';
const messageIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "255544020"
  }, [`svg.jsx-255544020{fill:${colors.white};cursor:pointer;height:24px;width:24px;}`]),
  className: "jsx-255544020"
};
const interpretationIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "255544020"
  }, [`svg.jsx-255544020{fill:${colors.white};cursor:pointer;height:24px;width:24px;}`]),
  className: "jsx-255544020"
};

function icon(kind) {
  if (kind === 'message') {
    return React.createElement(Message, {
      className: messageIcon.className
    }, messageIcon.styles);
  } else {
    return React.createElement(Email, {
      className: interpretationIcon.className
    }, interpretationIcon.styles);
  }
}

export const NotificationIcon = ({
  count,
  href,
  kind
}) => React.createElement("a", {
  href: href,
  className: _JSXStyle.dynamic([["1854025327", [theme.secondary300]]]) + " " + (kind || "")
}, icon(kind), count > 0 && React.createElement("span", {
  className: _JSXStyle.dynamic([["1854025327", [theme.secondary300]]])
}, count), React.createElement(_JSXStyle, {
  id: "1854025327",
  dynamic: [theme.secondary300]
}, ["a.__jsx-style-dynamic-selector{position:relative;margin:8px 24px 0 0;cursor:pointer;}", `span.__jsx-style-dynamic-selector{z-index:1;position:absolute;top:-6px;right:-10px;width:16px;height:16px;border-radius:50%;background-color:${theme.secondary300};color:#fff;font-size:9px;font-weight:500;line-height:16px;text-align:center;cursor:inherit;}`]));
NotificationIcon.defaultProps = {
  count: 0
};
NotificationIcon.propTypes = {
  kind: PropTypes.oneOf(['interpretation', 'message']),
  href: PropTypes.string.isRequired,
  count: PropTypes.number
};