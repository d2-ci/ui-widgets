"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ProfileMenu = require("./ProfileMenu.js");

var _TextIcon = require("../TextIcon.js");

var _ImageIcon = require("../ImageIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function avatarPath(avatar, contextPath) {
  if (!avatar) {
    return null;
  }

  return "".concat(contextPath, "/api/fileResources/").concat(avatar.id, "/data");
}

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false
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

    return _this;
  }

  _createClass(Profile, [{
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
    key: "userIcon",
    value: function userIcon(me, contextPath) {
      var avatar = avatarPath(me.avatar, contextPath);

      if (avatar) {
        return _react.default.createElement(_ImageIcon.ImageIcon, {
          src: avatar,
          onClick: this.onToggle
        });
      }

      return _react.default.createElement(_TextIcon.TextIcon, {
        name: me.name,
        onClick: this.onToggle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          contextPath = _this$props.contextPath;
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-661915851"
      }, this.userIcon(user, contextPath), this.state.show ? _react.default.createElement(_ProfileMenu.ProfileMenu, {
        avatar: avatarPath(user.avatar, contextPath),
        name: user.name,
        email: user.email,
        contextPath: contextPath
      }) : null, _react.default.createElement(_style.default, {
        id: "661915851"
      }, ["div.jsx-661915851{position:relative;width:36px;height:36px;margin:2px 12px 0 24px;}"]));
    }
  }]);

  return Profile;
}(_react.default.Component);

exports.default = Profile;
Profile.propTypes = {
  user: _propTypes.default.object.isRequired,
  contextPath: _propTypes.default.string.isRequired
};