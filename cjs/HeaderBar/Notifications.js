"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NotificationIcon = require("./NotificationIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = function Notifications(_ref) {
  var interpretations = _ref.interpretations,
      messages = _ref.messages,
      contextPath = _ref.contextPath;
  return _react.default.createElement("div", {
    className: "jsx-1272882457"
  }, _react.default.createElement(_NotificationIcon.NotificationIcon, {
    count: interpretations,
    href: "".concat(contextPath, "/dhis-web-interpretation"),
    kind: "message"
  }), _react.default.createElement(_NotificationIcon.NotificationIcon, {
    message: "email",
    count: messages,
    href: "".concat(contextPath, "/dhis-web-messaging"),
    kind: "interpretation"
  }), _react.default.createElement(_style.default, {
    id: "1272882457"
  }, ["div.jsx-1272882457{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]));
};

exports.Notifications = Notifications;