import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { TextIcon } from '../TextIcon.js';
import { ImageIcon } from '../ImageIcon.js';

const ProfileName = ({
  children
}) => React.createElement("div", {
  className: "jsx-2223023701"
}, children, React.createElement(_JSXStyle, {
  id: "2223023701"
}, ["div.jsx-2223023701{margin-bottom:3px;font-size:16px;line-height:19px;}"]));

const ProfileEmail = ({
  children
}) => React.createElement("div", {
  className: "jsx-1072768994"
}, children, React.createElement(_JSXStyle, {
  id: "1072768994"
}, ["div.jsx-1072768994{margin-bottom:6px;font-size:14px;line-height:16px;}"]));

const ProfileEdit = ({
  children,
  contextPath
}) => React.createElement("a", {
  href: `${contextPath}/dhis-web-user-profile/#/profile`,
  className: "jsx-3477773315"
}, children, React.createElement(_JSXStyle, {
  id: "3477773315"
}, ["a.jsx-3477773315{color:rgba(0,0,0,0.87);font-size:12px;line-height:14px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}"]));

const ProfileDetails = ({
  name,
  email,
  contextPath
}) => React.createElement("div", {
  className: "jsx-3814112749"
}, React.createElement(ProfileName, null, name), React.createElement(ProfileEmail, null, email), React.createElement(ProfileEdit, {
  contextPath: contextPath
}, i18n.t('Edit profile')), React.createElement(_JSXStyle, {
  id: "3814112749"
}, ["div.jsx-3814112749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:20px;color:#000;font-size:14px;font-weight:400;}"]));

export const ProfileHeader = ({
  name,
  email,
  img,
  contextPath
}) => React.createElement("div", {
  className: "jsx-3625287538"
}, img ? React.createElement(ImageIcon, {
  src: img
}) : React.createElement(TextIcon, {
  name: name
}), React.createElement(ProfileDetails, {
  name: name,
  email: email,
  contextPath: contextPath
}), React.createElement(_JSXStyle, {
  id: "3625287538"
}, ["div.jsx-3625287538{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:24px;padding-top:20px;}"]));
ProfileHeader.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  contextPath: PropTypes.string.isRequired
};