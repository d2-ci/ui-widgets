"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageIcon = function ImageIcon(_ref) {
  var src = _ref.src,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-4170436681"
  }, _react.default.createElement("img", {
    src: src,
    alt: "user avatar",
    className: "jsx-4170436681"
  }), _react.default.createElement(_style.default, {
    id: "4170436681"
  }, ["img.jsx-4170436681{max-width:100%;max-height:100%;}", "div.jsx-4170436681{width:48px;height:48px;}"]));
};

exports.ImageIcon = ImageIcon;
ImageIcon.defaultProps = {
  onClick: undefined
};
ImageIcon.propTypes = {
  src: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};