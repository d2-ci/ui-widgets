"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _uiCore = require("@dhis2/ui-core");

var _Settings = require("../icons/Settings.js");

var _Apps = require("../icons/Apps.js");

var _Cancel = require("../icons/Cancel.js");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "255544020"
  }, ["svg.jsx-255544020{fill:".concat(_uiCore.colors.white, ";cursor:pointer;height:24px;width:24px;}")]),
  className: "jsx-255544020"
};
var trailIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "4078879535"
  }, ["svg.jsx-4078879535{fill:".concat(_uiCore.colors.grey900, ";cursor:pointer;height:24px;width:24px;margin-right:8px;margin-top:4px;}")]),
  className: "jsx-4078879535"
};
var settingsIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "4285170702"
  }, ["svg.jsx-4285170702{margin:8px 8px 0 16px;color:".concat(_uiCore.colors.grey900, ";height:24px;width:24px;cursor:pointer;}")]),
  className: "jsx-4285170702"
};

function TrailIcon(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement("a", {
    onClick: onClick
  }, _react.default.createElement(_Cancel.Cancel, {
    className: trailIcon.className
  }));
}

function Search(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      onIconClick = _ref2.onIconClick;
  return _react.default.createElement("div", {
    className: "jsx-2764723183"
  }, _react.default.createElement("span", {
    className: "jsx-2764723183"
  }, _react.default.createElement(_uiCore.InputField, {
    value: value,
    name: "filter",
    label: _d2I18n.default.t('Search apps'),
    onChange: onChange,
    trailIcon: _react.default.createElement(TrailIcon, {
      onClick: onIconClick
    }),
    focus: true,
    filled: true,
    dense: true
  })), _react.default.createElement("span", {
    className: "jsx-2764723183"
  }, _react.default.createElement("a", {
    href: "/dhis-web-menu-management",
    className: "jsx-2764723183"
  }, _react.default.createElement(_Settings.Settings, {
    className: settingsIcon.className
  }))), trailIcon.styles, settingsIcon.styles, _react.default.createElement(_style.default, {
    id: "2764723183"
  }, ["div.jsx-2764723183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:52px;margin:8px;}", "span.jsx-2764723183{-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;}", "span.jsx-2764723183:last-child{-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}"]));
}

Search.defaultProps = {
  onIconClick: null
};
Search.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onIconClick: _propTypes.default.func
};

function Item(_ref3) {
  var name = _ref3.name,
      path = _ref3.path,
      img = _ref3.img;
  return _react.default.createElement("a", {
    href: path,
    className: _style.default.dynamic([["3670725638", [_uiCore.theme.primary050]]])
  }, _react.default.createElement("img", {
    src: img,
    alt: "app logo",
    className: _style.default.dynamic([["3670725638", [_uiCore.theme.primary050]]])
  }), _react.default.createElement("div", {
    className: _style.default.dynamic([["3670725638", [_uiCore.theme.primary050]]])
  }, name), _react.default.createElement(_style.default, {
    id: "3670725638",
    dynamic: [_uiCore.theme.primary050]
  }, ["a.__jsx-style-dynamic-selector{display:inline-block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:96px;margin:8px;padding:8px;border-radius:12px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", "a.__jsx-style-dynamic-selector:hover,a.__jsx-style-dynamic-selector:focus{background-color:".concat(_uiCore.theme.primary050, ";cursor:pointer;}"), "a.__jsx-style-dynamic-selector:hover>div.__jsx-style-dynamic-selector{font-weight:500;cursor:pointer;}", "img.__jsx-style-dynamic-selector{width:48px;height:48px;cursor:pointer;}", "div.__jsx-style-dynamic-selector{margin-top:14px;color:rgba(0,0,0,0.87);font-size:12px;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;line-height:14px;text-align:center;cursor:pointer;}"]));
}

Item.propTypes = {
  name: _propTypes.default.string,
  path: _propTypes.default.string,
  img: _propTypes.default.string
};

function List(_ref4) {
  var apps = _ref4.apps,
      filter = _ref4.filter;
  return _react.default.createElement("div", {
    className: "jsx-2076871745"
  }, apps.filter(function (_ref5) {
    var displayName = _ref5.displayName;
    return filter.length > 0 ? displayName.toLowerCase().match(filter.toLowerCase()) : true;
  }).map(function (_ref6, idx) {
    var displayName = _ref6.displayName,
        name = _ref6.name,
        namespace = _ref6.namespace,
        icon = _ref6.icon;
    return _react.default.createElement(Item, {
      key: "app-".concat(name, "-").concat(idx),
      name: displayName || name,
      path: namespace,
      img: icon
    });
  }), _react.default.createElement(_style.default, {
    id: "2076871745"
  }, ["div.jsx-2076871745{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:30vw;min-width:300px;max-width:560px;min-height:200px;max-height:465px;margin:0 8px 8px 8px;overflow:auto;overflow-x:hidden;}"]));
}

var Apps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Apps, _React$Component);

  function Apps() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Apps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Apps)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false,
      filter: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onDocClick", function (evt) {
      if (_this.elContainer && !_this.elContainer.contains(evt.target)) {
        _this.setState({
          show: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function () {
      return _this.setState({
        show: !_this.state.show
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      return _this.setState({
        filter: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIconClick", function () {
      return _this.setState({
        filter: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "AppMenu", function (apps) {
      return _react.default.createElement("div", {
        className: "jsx-1740460911"
      }, _react.default.createElement(_uiCore.Card, null, _react.default.createElement(Search, {
        value: _this.state.filter,
        onChange: _this.onChange,
        onIconClick: _this.onIconClick
      }), _react.default.createElement(List, {
        apps: apps,
        filter: _this.state.filter
      })), _react.default.createElement(_style.default, {
        id: "1740460911"
      }, ["div.jsx-1740460911{z-index:10000;position:absolute;top:28px;right:-6px;border-top:4px solid transparent;}"]));
    });

    return _this;
  }

  _createClass(Apps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var apps = this.props.apps;
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-1265754857"
      }, _react.default.createElement("a", {
        onClick: this.onToggle,
        className: "jsx-1265754857"
      }, _react.default.createElement(_Apps.Apps, {
        className: appIcon.className
      })), this.state.show && this.AppMenu(apps), appIcon.styles, _react.default.createElement(_style.default, {
        id: "1265754857"
      }, ["a.jsx-1265754857{display:block;}", "div.jsx-1265754857{position:relative;width:24px;height:30px;margin:8px 0 0 0;}"]));
    }
  }]);

  return Apps;
}(_react.default.Component);

exports.default = Apps;
Apps.propTypes = {
  apps: _propTypes.default.array.isRequired
};