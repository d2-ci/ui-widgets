import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@dhis2/ui-core';
import Apps from './Apps';
import Profile from './Profile';
import { useDataQuery } from '@dhis2/app-runtime';
import { Logo } from './Logo.js';
import { Title } from './Title.js';
import { Notifications } from './Notifications.js';
import '../locales';
import i18n from '@dhis2/d2-i18n';
export const HeaderBar = ({
  appName,
  className
}) => {
  const {
    loading,
    error,
    data
  } = useDataQuery({
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
  });
  if (loading) return React.createElement("span", null, "...");
  if (error) return React.createElement("span", null, `ERROR: ${error.message}`);
  const locale = data.user.settings.keyUiLocale || 'en';
  i18n.changeLanguage(locale);
  return React.createElement("header", {
    className: _JSXStyle.dynamic([["1245639209", [colors.white]]]) + " " + (className || "")
  }, React.createElement(Logo, null), React.createElement(Title, {
    app: appName,
    instance: data.systemInfo.systemName
  }), React.createElement(Notifications, {
    interpretations: data.notifications.unreadInterpretations,
    messages: data.notifications.unreadMessageConversations
  }), React.createElement(Apps, {
    apps: data.apps.modules
  }), React.createElement(Profile, {
    user: data.user
  }), React.createElement(_JSXStyle, {
    id: "1245639209",
    dynamic: [colors.white]
  }, [`header.__jsx-style-dynamic-selector{background-color:#2c6693;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:48px;border-bottom:1px solid rgba(32,32,32,0.15);color:${colors.white};}`]));
};
HeaderBar.propTypes = {
  className: PropTypes.string,
  appName: PropTypes.string
};