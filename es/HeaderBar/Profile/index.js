import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { ProfileMenu } from './ProfileMenu.js';
import { TextIcon } from '../TextIcon.js';
import { ImageIcon } from '../ImageIcon.js';

function avatarPath(avatar) {
  if (!avatar) {
    return null;
  }

  return `/api/fileResources/${avatar.id}/data`;
}

export default class Profile extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false
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
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  userIcon(me) {
    const avatar = avatarPath(me.avatar);

    if (avatar) {
      return React.createElement(ImageIcon, {
        src: avatar,
        onClick: this.onToggle
      });
    }

    return React.createElement(TextIcon, {
      name: me.name,
      onClick: this.onToggle
    });
  }

  render() {
    const user = this.props.user;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: "jsx-661915851"
    }, this.userIcon(user), this.state.show ? React.createElement(ProfileMenu, {
      avatar: avatarPath(user.avatar),
      name: user.name,
      email: user.email
    }) : null, React.createElement(_JSXStyle, {
      id: "661915851"
    }, ["div.jsx-661915851{position:relative;width:36px;height:36px;margin:2px 12px 0 24px;}"]));
  }

}
Profile.propTypes = {
  user: PropTypes.object.isRequired
};