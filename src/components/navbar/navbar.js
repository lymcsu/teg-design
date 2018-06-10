import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

export default class Navbar extends Component {

  static propTypes = {
    title: PropTypes.node,
    left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
    right: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object])
  };

  renderLink (object, key = 0) {
    const { text, icon, iconName, href, func, ...others } = object
    const classesLink = classNames({
      'tui-navbar-link': true,
      'tui-navbar_icon-only': !text
    })
    return (
      <a key={key} className={classesLink} {...others} href={href} onClick={func}>
        {iconName /*&& <Icon name={iconName} />*/}
        {icon}
        {text}
      </a>
    )
  }

  render () {
    const { title, left, right } = this.props
    return (
      <div className='tui-navbar'>
        <div className='tui-navbar_inner' ref='navbar'>
          <div className='tui-navbar_left' ref='left'>
            {left && Array.isArray(left) && left.map((object, index) => this.renderLink(object, index))}
            {left && !Array.isArray(left) && this.renderLink(left)}
          </div>
          <h1 className='tui-navbar_center' ref='center'>{title}</h1>
          <div className='tui-navbar_right' ref='right'>
            {right && Array.isArray(right) && right.map((object, index) => this.renderLink(object, index))}
            {right && !Array.isArray(right) && this.renderLink(right)}
          </div>
        </div>
      </div>
    )
  }
}
