"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiCore = require("@dhis2/ui-core");

var _Apps = _interopRequireDefault(require("./Apps"));

var _Profile = _interopRequireDefault(require("./Profile"));

var _appRuntime = require("@dhis2/app-runtime");

var _Logo = require("./Logo.js");

var _Title = require("./Title.js");

var _Notifications = require("./Notifications.js");

require("../locales");

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderBar = function HeaderBar(_ref) {
  var appName = _ref.appName,
      className = _ref.className;

  var _useDataQuery = (0, _appRuntime.useDataQuery)({
    systemInfo: {
      resource: 'system/info'
    },
    user: {
      resource: 'me'
    },
    apps: {
      resource: '../../dhis-web-commons/menu/getModules.action'
    },
    notifications: {
      resource: 'me/dashboard'
    }
  }),
      loading = _useDataQuery.loading,
      error = _useDataQuery.error,
      data = _useDataQuery.data;

  if (!loading && !error) {
    // TODO: This will run every render which is probably wrong!  Also, setting the global locale shouldn't be done in the headerbar
    var locale = data.user.settings.keyUiLocale || 'en';

    _d2I18n.default.changeLanguage(locale);
  }

  return _react.default.createElement("header", {
    className: _style.default.dynamic([["1335571883", [_uiCore.colors.white]]]) + " " + (className || "")
  }, _react.default.createElement(_Logo.Logo, null), !loading && !error && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Title.Title, {
    app: appName,
    instance: data.systemInfo.systemName
  }), _react.default.createElement("div", {
    className: _style.default.dynamic([["1335571883", [_uiCore.colors.white]]]) + " " + "right-control-spacer"
  }), _react.default.createElement(_Notifications.Notifications, {
    interpretations: data.notifications.unreadInterpretations,
    messages: data.notifications.unreadMessageConversations
  }), _react.default.createElement(_Apps.default, {
    apps: data.apps.modules
  }), _react.default.createElement(_Profile.default, {
    user: data.user
  })), _react.default.createElement(_style.default, {
    id: "1335571883",
    dynamic: [_uiCore.colors.white]
  }, ["header.__jsx-style-dynamic-selector{background-color:#2c6693;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:48px;border-bottom:1px solid rgba(32,32,32,0.15);color:".concat(_uiCore.colors.white, ";}"), ".right-control-spacer.__jsx-style-dynamic-selector{margin-left:auto;}"]));
};

exports.HeaderBar = HeaderBar;
HeaderBar.propTypes = {
  className: _propTypes.default.string,
  appName: _propTypes.default.string
};