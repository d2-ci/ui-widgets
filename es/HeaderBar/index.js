import _JSXStyle from "styled-jsx/style";
import React, { useEffect } from 'react';
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
      resource: '../dhis-web-commons/menu/getModules.action'
    },
    notifications: {
      resource: 'me/dashboard'
    }
  });
  useEffect(() => {
    const getPath = path => path.startsWith('http:') || path.startsWith('https:') ? path : `${data.systemInfo.contextPath}/api/${path}`;

    if (!loading && !error) data.apps.modules.forEach(app => {
      app.icon = getPath(app.icon);
      app.defaultAction = getPath(app.defaultAction);
    });
  }, [data]);

  if (!loading && !error) {
    // TODO: This will run every render which is probably wrong!  Also, setting the global locale shouldn't be done in the headerbar
    const locale = data.user.settings.keyUiLocale || 'en';
    i18n.changeLanguage(locale);
  }

  return React.createElement("header", {
    className: _JSXStyle.dynamic([["1335571883", [colors.white]]]) + " " + (className || "")
  }, React.createElement(Logo, null), !loading && !error && React.createElement(React.Fragment, null, React.createElement(Title, {
    app: appName,
    instance: data.systemInfo.systemName
  }), React.createElement("div", {
    className: _JSXStyle.dynamic([["1335571883", [colors.white]]]) + " " + "right-control-spacer"
  }), React.createElement(Notifications, {
    interpretations: data.notifications.unreadInterpretations,
    messages: data.notifications.unreadMessageConversations,
    contextPath: data.systemInfo.contextPath
  }), React.createElement(Apps, {
    apps: data.apps.modules,
    contextPath: data.systemInfo.contextPath
  }), React.createElement(Profile, {
    user: data.user,
    contextPath: data.systemInfo.contextPath
  })), React.createElement(_JSXStyle, {
    id: "1335571883",
    dynamic: [colors.white]
  }, [`header.__jsx-style-dynamic-selector{background-color:#2c6693;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:48px;border-bottom:1px solid rgba(32,32,32,0.15);color:${colors.white};}`, ".right-control-spacer.__jsx-style-dynamic-selector{margin-left:auto;}"]));
};
HeaderBar.propTypes = {
  className: PropTypes.string,
  appName: PropTypes.string
};