import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { Card, Divider, MenuItem, colors } from '@dhis2/ui-core';
import { Settings } from '../../icons/Settings.js';
import { Info } from '../../icons/Info.js';
import { Help } from '../../icons/Help.js';
import { Exit } from '../../icons/Exit.js';
import { Account } from '../../icons/Account.js';
import { ProfileHeader } from './ProfileHeader.js';
const iconStyle = {
  styles: React.createElement(_JSXStyle, {
    id: "2224778647"
  }, [`svg.jsx-2224778647{fill:${colors.grey700};cursor:pointer;height:24px;width:24px;}`]),
  className: "jsx-2224778647"
};
const list = [{
  icon: React.createElement(Settings, {
    className: iconStyle.className
  }),
  label: i18n.t('Settings'),
  value: 'settings',
  link: `/dhis-web-user-profile/#/settings`,
  target: '_self'
}, {
  icon: React.createElement(Account, {
    className: iconStyle.className
  }),
  label: i18n.t('Account'),
  value: 'account',
  link: `/dhis-web-user-profile/#/account`,
  target: '_self'
}, {
  icon: React.createElement(Help, {
    className: iconStyle.className
  }),
  label: i18n.t('Help'),
  value: 'help',
  link: 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
  target: '_blank',
  nobase: true
}, {
  icon: React.createElement(Info, {
    className: iconStyle.className
  }),
  label: i18n.t('About DHIS2'),
  value: 'about',
  link: `/dhis-web-user-profile/#/aboutPage`,
  target: '_self'
}, {
  icon: React.createElement(Exit, {
    className: iconStyle.className
  }),
  label: i18n.t('Logout'),
  value: 'logout',
  link: `/dhis-web-commons-security/logout.action`,
  target: '_self'
}];

const ProfileContents = ({
  name,
  email,
  avatar,
  contextPath
}) => React.createElement(Card, null, React.createElement("div", {
  className: "jsx-4035402915"
}, React.createElement(ProfileHeader, {
  name: name,
  email: email,
  img: avatar,
  contextPath: contextPath
}), React.createElement(Divider, {
  margin: "13px 0 7px 0"
}), React.createElement("ul", {
  className: "jsx-4035402915"
}, list.map(({
  label,
  value,
  icon,
  link,
  target,
  nobase
}) => React.createElement("a", {
  href: nobase ? link : `${contextPath}${link}`,
  target: target,
  key: `h-p-${value}`,
  className: "jsx-4035402915"
}, React.createElement(MenuItem, {
  key: `h-mi-${value}`,
  label: label,
  value: value,
  icon: icon
}))))), iconStyle.styles, React.createElement(_JSXStyle, {
  id: "4035402915"
}, ["div.jsx-4035402915{width:100%;padding:0;}", "ul.jsx-4035402915{padding:0;margin:0;}", "a.jsx-4035402915,a.jsx-4035402915:hover,a.jsx-4035402915:focus,a.jsx-4035402915:active,a.jsx-4035402915:visited{-webkit-text-decoration:none;text-decoration:none;}"]));

export const ProfileMenu = ({
  avatar,
  name,
  email,
  contextPath
}) => React.createElement("div", {
  className: "jsx-3620236321"
}, React.createElement(ProfileContents, {
  name: name,
  email: email,
  avatar: avatar,
  contextPath: contextPath
}), React.createElement(_JSXStyle, {
  id: "3620236321"
}, ["div.jsx-3620236321{z-index:10000;position:absolute;top:34px;right:-6px;width:310px;border-top:4px solid transparent;}"]));