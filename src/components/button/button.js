import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

export default class Button extends Component {

    static propTypes = {
        active: PropTypes.bool,
        type: PropTypes.string,
        size: PropTypes.string,
        disabled: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string
    }

    static defaultProps = {
        disabled: false,
        type: 'default',
        size: 'normal'
    }

    render () {
        const { active, type, size, children, className, ...props } = this.props
        const Component = this.props.href ? 'a' : 'button'
        const classes = classNames({
          'tui-btn': true,
          'tui-btn_active': active,
          'tui-btn_primary': type === 'primary',
          'tui-btn_default': type === 'default',
          'tui-btn_warn': type === 'warn',
          'tui-btn_mini': size === 'small',
          'tui-btn_disabled': this.props.disabled
        }, className)
        return (
          <Component className={ classes } {...props}>{children}</Component>
        )
    }
}
