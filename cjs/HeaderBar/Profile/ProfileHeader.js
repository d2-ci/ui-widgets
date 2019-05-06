"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileHeader = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _TextIcon = require("../TextIcon.js");

var _ImageIcon = require("../ImageIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileName = function ProfileName(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-2223023701"
  }, children, _react.default.createElement(_style.default, {
    id: "2223023701"
  }, ["div.jsx-2223023701{margin-bottom:3px;font-size:16px;line-height:19px;}"]));
};

var ProfileEmail = function ProfileEmail(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "jsx-1072768994"
  }, children, _react.default.createElement(_style.default, {
    id: "1072768994"
  }, ["div.jsx-1072768994{margin-bottom:6px;font-size:14px;line-height:16px;}"]));
};

var ProfileEdit = function ProfileEdit(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("a", {
    href: "/dhis-web-user-profile/#/profile",
    className: "jsx-3477773315"
  }, children, _react.default.createElement(_style.default, {
    id: "3477773315"
  }, ["a.jsx-3477773315{color:rgba(0,0,0,0.87);font-size:12px;line-height:14px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}"]));
};

var ProfileDetails = function ProfileDetails(_ref4) {
  var name = _ref4.name,
      email = _ref4.email;
  return _react.default.createElement("div", {
    className: "jsx-3814112749"
  }, _react.default.createElement(ProfileName, null, name), _react.default.createElement(ProfileEmail, null, email), _react.default.createElement(ProfileEdit, null, _d2I18n.default.t('Edit profile')), _react.default.createElement(_style.default, {
    id: "3814112749"
  }, ["div.jsx-3814112749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:20px;color:#000;font-size:14px;font-weight:400;}"]));
};

var ProfileHeader = function ProfileHeader(_ref5) {
  var name = _ref5.name,
      email = _ref5.email,
      img = _ref5.img;
  return _react.default.createElement("div", {
    className: "jsx-3625287538"
  }, img ? _react.default.createElement(_ImageIcon.ImageIcon, {
    src: img
  }) : _react.default.createElement(_TextIcon.TextIcon, {
    name: name
  }), _react.default.createElement(ProfileDetails, {
    name: name,
    email: email
  }), _react.default.createElement(_style.default, {
    id: "3625287538"
  }, ["div.jsx-3625287538{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:24px;padding-top:20px;}"]));
};

exports.ProfileHeader = ProfileHeader;
ProfileHeader.propTypes = {
  name: _propTypes.default.string,
  email: _propTypes.default.string,
  img: _propTypes.default.string
};