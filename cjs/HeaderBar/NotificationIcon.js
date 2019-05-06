"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiCore = require("@dhis2/ui-core");

var _Email = require("../icons/Email.js");

var _Message = require("../icons/Message.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "255544020"
  }, ["svg.jsx-255544020{fill:".concat(_uiCore.colors.white, ";cursor:pointer;height:24px;width:24px;}")]),
  className: "jsx-255544020"
};
var interpretationIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "255544020"
  }, ["svg.jsx-255544020{fill:".concat(_uiCore.colors.white, ";cursor:pointer;height:24px;width:24px;}")]),
  className: "jsx-255544020"
};

function icon(kind) {
  if (kind === 'message') {
    return _react.default.createElement(_Message.Message, {
      className: messageIcon.className
    }, messageIcon.styles);
  } else {
    return _react.default.createElement(_Email.Email, {
      className: interpretationIcon.className
    }, interpretationIcon.styles);
  }
}

var NotificationIcon = function NotificationIcon(_ref) {
  var count = _ref.count,
      href = _ref.href,
      kind = _ref.kind;
  return _react.default.createElement("a", {
    href: href,
    className: _style.default.dynamic([["1854025327", [_uiCore.theme.secondary300]]]) + " " + (kind || "")
  }, icon(kind), count > 0 && _react.default.createElement("span", {
    className: _style.default.dynamic([["1854025327", [_uiCore.theme.secondary300]]])
  }, count), _react.default.createElement(_style.default, {
    id: "1854025327",
    dynamic: [_uiCore.theme.secondary300]
  }, ["a.__jsx-style-dynamic-selector{position:relative;margin:8px 24px 0 0;cursor:pointer;}", "span.__jsx-style-dynamic-selector{z-index:1;position:absolute;top:-6px;right:-10px;width:16px;height:16px;border-radius:50%;background-color:".concat(_uiCore.theme.secondary300, ";color:#fff;font-size:9px;font-weight:500;line-height:16px;text-align:center;cursor:inherit;}")]));
};

exports.NotificationIcon = NotificationIcon;
NotificationIcon.defaultProps = {
  count: 0
};
NotificationIcon.propTypes = {
  kind: _propTypes.default.oneOf(['interpretation', 'message']),
  href: _propTypes.default.string.isRequired,
  count: _propTypes.default.number
};