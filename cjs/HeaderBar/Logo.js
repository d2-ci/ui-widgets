"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiCore = require("@dhis2/ui-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logotype = {
  styles: _react.default.createElement(_style.default, {
    id: "3071992754"
  }, ["svg.jsx-3071992754{width:27px;height:25px;cursor:pointer;}"]),
  className: "jsx-3071992754"
};

var Logo = function Logo() {
  return _react.default.createElement("div", {
    className: "jsx-2566931795"
  }, _react.default.createElement("a", {
    href: "/",
    className: "jsx-2566931795"
  }, _react.default.createElement(_uiCore.LogoIconWhite, {
    className: logotype.className
  })), logotype.styles, _react.default.createElement(_style.default, {
    id: "2566931795"
  }, ["div.jsx-2566931795{box-sizing:border-box;width:48px;height:48px;margin:0 12px 0 0;border-right:1px solid rgba(32,32,32,0.15);text-align:center;}", "a.jsx-2566931795,a.jsx-2566931795:hover,a.jsx-2566931795:focus,a.jsx-2566931795:active,a.jsx-2566931795:visited{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:48px;height:48px;background-color:transparent;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]));
};

exports.Logo = Logo;