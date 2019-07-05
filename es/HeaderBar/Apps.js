function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { Card, InputField, colors, theme } from '@dhis2/ui-core';
import { Settings } from '../icons/Settings.js';
import { Apps as AppsIcon } from '../icons/Apps.js';
import { Cancel } from '../icons/Cancel.js';
import cx from 'classnames';
const appIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "255544020"
  }, [`svg.jsx-255544020{fill:${colors.white};cursor:pointer;height:24px;width:24px;}`]),
  className: "jsx-255544020"
};
const trailIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "4078879535"
  }, [`svg.jsx-4078879535{fill:${colors.grey900};cursor:pointer;height:24px;width:24px;margin-right:8px;margin-top:4px;}`]),
  className: "jsx-4078879535"
};
const settingsIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "4285170702"
  }, [`svg.jsx-4285170702{margin:8px 8px 0 16px;color:${colors.grey900};height:24px;width:24px;cursor:pointer;}`]),
  className: "jsx-4285170702"
};

function TrailIcon({
  onClick
}) {
  return React.createElement("a", {
    onClick: onClick
  }, React.createElement(Cancel, {
    className: trailIcon.className
  }));
}

function Search({
  value,
  onChange,
  onIconClick,
  contextPath
}) {
  return React.createElement("div", {
    className: "jsx-2764723183"
  }, React.createElement("span", {
    className: "jsx-2764723183"
  }, React.createElement(InputField, {
    value: value,
    name: "filter",
    label: i18n.t('Search apps'),
    onChange: onChange,
    trailIcon: React.createElement(TrailIcon, {
      onClick: onIconClick
    }),
    focus: true,
    filled: true,
    dense: true
  })), React.createElement("span", {
    className: "jsx-2764723183"
  }, React.createElement("a", {
    href: `${contextPath}/dhis-web-menu-management`,
    className: "jsx-2764723183"
  }, React.createElement(Settings, {
    className: settingsIcon.className
  }))), trailIcon.styles, settingsIcon.styles, React.createElement(_JSXStyle, {
    id: "2764723183"
  }, ["div.jsx-2764723183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:52px;margin:8px;}", "span.jsx-2764723183{-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;}", "span.jsx-2764723183:last-child{-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}"]));
}

Search.defaultProps = {
  onIconClick: null
};
Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onIconClick: PropTypes.func,
  contextPath: PropTypes.string.isRequired
};

function Item({
  name,
  path,
  img
}) {
  return React.createElement("a", {
    href: path,
    className: _JSXStyle.dynamic([["3670725638", [theme.primary050]]])
  }, React.createElement("img", {
    src: img,
    alt: "app logo",
    className: _JSXStyle.dynamic([["3670725638", [theme.primary050]]])
  }), React.createElement("div", {
    className: _JSXStyle.dynamic([["3670725638", [theme.primary050]]])
  }, name), React.createElement(_JSXStyle, {
    id: "3670725638",
    dynamic: [theme.primary050]
  }, ["a.__jsx-style-dynamic-selector{display:inline-block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:96px;margin:8px;padding:8px;border-radius:12px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", `a.__jsx-style-dynamic-selector:hover,a.__jsx-style-dynamic-selector:focus{background-color:${theme.primary050};cursor:pointer;}`, "a.__jsx-style-dynamic-selector:hover>div.__jsx-style-dynamic-selector{font-weight:500;cursor:pointer;}", "img.__jsx-style-dynamic-selector{width:48px;height:48px;cursor:pointer;}", "div.__jsx-style-dynamic-selector{margin-top:14px;color:rgba(0,0,0,0.87);font-size:12px;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;line-height:14px;text-align:center;cursor:pointer;}"]));
}

Item.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  img: PropTypes.string
};

function List({
  apps,
  filter
}) {
  return React.createElement("div", {
    className: "jsx-2076871745"
  }, apps.filter(({
    displayName
  }) => {
    return filter.length > 0 ? displayName.toLowerCase().match(filter.toLowerCase()) : true;
  }).map(({
    displayName,
    name,
    defaultAction,
    icon
  }, idx) => React.createElement(Item, {
    key: `app-${name}-${idx}`,
    name: displayName || name,
    path: defaultAction,
    img: icon
  })), React.createElement(_JSXStyle, {
    id: "2076871745"
  }, ["div.jsx-2076871745{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:30vw;min-width:300px;max-width:560px;min-height:200px;max-height:465px;margin:0 8px 8px 8px;overflow:auto;overflow-x:hidden;}"]));
}

export default class Apps extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false,
      filter: ''
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && !this.elContainer.contains(evt.target)) {
        this.setState({
          show: false
        });
      }
    });

    _defineProperty(this, "onToggle", () => this.setState({
      show: !this.state.show
    }));

    _defineProperty(this, "onChange", e => this.setState({
      filter: e.target.value
    }));

    _defineProperty(this, "onIconClick", () => this.setState({
      filter: ''
    }));

    _defineProperty(this, "AppMenu", apps => React.createElement("div", {
      className: "jsx-1740460911"
    }, React.createElement(Card, null, React.createElement(Search, {
      value: this.state.filter,
      onChange: this.onChange,
      onIconClick: this.onIconClick,
      contextPath: this.props.contextPath
    }), React.createElement(List, {
      apps: apps,
      filter: this.state.filter
    })), React.createElement(_JSXStyle, {
      id: "1740460911"
    }, ["div.jsx-1740460911{z-index:10000;position:absolute;top:28px;right:-6px;border-top:4px solid transparent;}"])));
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    const apps = this.props.apps;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: "jsx-1265754857"
    }, React.createElement("a", {
      onClick: this.onToggle,
      className: "jsx-1265754857"
    }, React.createElement(AppsIcon, {
      className: appIcon.className
    })), this.state.show && this.AppMenu(apps), appIcon.styles, React.createElement(_JSXStyle, {
      id: "1265754857"
    }, ["a.jsx-1265754857{display:block;}", "div.jsx-1265754857{position:relative;width:24px;height:30px;margin:8px 0 0 0;}"]));
  }

}
Apps.propTypes = {
  apps: PropTypes.array.isRequired,
  contextPath: PropTypes.string.isRequired
};