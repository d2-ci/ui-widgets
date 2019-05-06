"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextIcon = function TextIcon(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-1795768421"
  }, _react.default.createElement("p", {
    className: "jsx-1795768421"
  }, title), _react.default.createElement(_style.default, {
    id: "1795768421"
  }, ["div.jsx-1795768421{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;overflow:hidden;border-radius:50%;background-color:rgba(0,0,0,0.3);color:#fff;cursor:pointer;}", "p.jsx-1795768421{font-size:14px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;text-transform:uppercase;}"]));
};

exports.TextIcon = TextIcon;
TextIcon.defaultProps = {
  onClick: undefined
};
TextIcon.propTypes = {
  name: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};