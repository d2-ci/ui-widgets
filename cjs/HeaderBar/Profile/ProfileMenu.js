"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileMenu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _uiCore = require("@dhis2/ui-core");

var _Settings = require("../../icons/Settings.js");

var _Info = require("../../icons/Info.js");

var _Help = require("../../icons/Help.js");

var _Exit = require("../../icons/Exit.js");

var _Account = require("../../icons/Account.js");

var _ProfileHeader = require("./ProfileHeader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyle = {
  styles: _react.default.createElement(_style.default, {
    id: "2224778647"
  }, ["svg.jsx-2224778647{fill:".concat(_uiCore.colors.grey700, ";cursor:pointer;height:24px;width:24px;}")]),
  className: "jsx-2224778647"
};
var list = [{
  icon: _react.default.createElement(_Settings.Settings, {
    className: iconStyle.className
  }),
  label: _d2I18n.default.t('Settings'),
  value: 'settings',
  link: "/dhis-web-user-profile/#/settings",
  target: '_self'
}, {
  icon: _react.default.createElement(_Account.Account, {
    className: iconStyle.className
  }),
  label: _d2I18n.default.t('Account'),
  value: 'account',
  link: "/dhis-web-user-profile/#/account",
  target: '_self'
}, {
  icon: _react.default.createElement(_Help.Help, {
    className: iconStyle.className
  }),
  label: _d2I18n.default.t('Help'),
  value: 'help',
  link: 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
  target: '_blank',
  nobase: true
}, {
  icon: _react.default.createElement(_Info.Info, {
    className: iconStyle.className
  }),
  label: _d2I18n.default.t('About DHIS2'),
  value: 'about',
  link: "/dhis-web-user-profile/#/aboutPage",
  target: '_self'
}, {
  icon: _react.default.createElement(_Exit.Exit, {
    className: iconStyle.className
  }),
  label: _d2I18n.default.t('Logout'),
  value: 'logout',
  link: "/dhis-web-commons-security/logout.action",
  target: '_self'
}];

var ProfileContents = function ProfileContents(_ref) {
  var name = _ref.name,
      email = _ref.email,
      avatar = _ref.avatar,
      contextPath = _ref.contextPath;
  return _react.default.createElement(_uiCore.Card, null, _react.default.createElement("div", {
    className: "jsx-4035402915"
  }, _react.default.createElement(_ProfileHeader.ProfileHeader, {
    name: name,
    email: email,
    img: avatar,
    contextPath: contextPath
  }), _react.default.createElement(_uiCore.Divider, {
    margin: "13px 0 7px 0"
  }), _react.default.createElement("ul", {
    className: "jsx-4035402915"
  }, list.map(function (_ref2) {
    var label = _ref2.label,
        value = _ref2.value,
        icon = _ref2.icon,
        link = _ref2.link,
        target = _ref2.target,
        nobase = _ref2.nobase;
    return _react.default.createElement("a", {
      href: nobase ? link : "".concat(contextPath).concat(link),
      target: target,
      key: "h-p-".concat(value),
      className: "jsx-4035402915"
    }, _react.default.createElement(_uiCore.MenuItem, {
      key: "h-mi-".concat(value),
      label: label,
      value: value,
      icon: icon
    }));
  }))), iconStyle.styles, _react.default.createElement(_style.default, {
    id: "4035402915"
  }, ["div.jsx-4035402915{width:100%;padding:0;}", "ul.jsx-4035402915{padding:0;margin:0;}", "a.jsx-4035402915,a.jsx-4035402915:hover,a.jsx-4035402915:focus,a.jsx-4035402915:active,a.jsx-4035402915:visited{-webkit-text-decoration:none;text-decoration:none;}"]));
};

var ProfileMenu = function ProfileMenu(_ref3) {
  var avatar = _ref3.avatar,
      name = _ref3.name,
      email = _ref3.email,
      contextPath = _ref3.contextPath;
  return _react.default.createElement("div", {
    className: "jsx-3620236321"
  }, _react.default.createElement(ProfileContents, {
    name: name,
    email: email,
    avatar: avatar,
    contextPath: contextPath
  }), _react.default.createElement(_style.default, {
    id: "3620236321"
  }, ["div.jsx-3620236321{z-index:10000;position:absolute;top:34px;right:-6px;width:310px;border-top:4px solid transparent;}"]));
};

exports.ProfileMenu = ProfileMenu;