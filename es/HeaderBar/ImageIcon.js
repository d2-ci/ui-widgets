import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
export const ImageIcon = ({
  src,
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-4170436681"
}, React.createElement("img", {
  src: src,
  alt: "user avatar",
  className: "jsx-4170436681"
}), React.createElement(_JSXStyle, {
  id: "4170436681"
}, ["img.jsx-4170436681{max-width:100%;max-height:100%;}", "div.jsx-4170436681{width:48px;height:48px;}"]));
ImageIcon.defaultProps = {
  onClick: undefined
};
ImageIcon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};