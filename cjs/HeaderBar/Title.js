"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var app = _ref.app,
      instance = _ref.instance;
  return _react.default.createElement("div", {
    className: "jsx-2721515324"
  }, app ? "".concat(instance, " - ").concat(app) : "".concat(instance), _react.default.createElement(_style.default, {
    id: "2721515324"
  }, ["div.jsx-2721515324{overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:500;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;white-space:nowrap;}"]));
};

exports.Title = Title;