import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import { NotificationIcon } from './NotificationIcon';
export const Notifications = ({
  interpretations,
  messages,
  contextPath
}) => React.createElement("div", {
  className: "jsx-1272882457"
}, React.createElement(NotificationIcon, {
  count: interpretations,
  href: `${contextPath}/dhis-web-interpretation`,
  kind: "message"
}), React.createElement(NotificationIcon, {
  message: "email",
  count: messages,
  href: `${contextPath}/dhis-web-messaging`,
  kind: "interpretation"
}), React.createElement(_JSXStyle, {
  id: "1272882457"
}, ["div.jsx-1272882457{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]));