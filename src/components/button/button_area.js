import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

class ButtonArea extends Component {
    static propTypes = {
        direction: PropTypes.string
    }

    static defaultProps = {
        direction: 'vertical'
    }

    render() {
        const {direction, children, className} = this.props
        const cls = classNames({
            'tui-btn-area': true,
            'tui-btn-area_inline': direction === 'horizontal',
            [className]: className
        })

        return (
            <div className={cls}>
                {children}
            </div>
        )
    }
}

export default ButtonArea
