import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

class Mask extends React.Component {
    static propTypes = {
        /**
            Whather mask should be transparent (no color)
        **/
        transparent: PropTypes.bool
    }

    static defaultProps = {
        transparent: false
    }

    render() {
        const {transparent, className, ...others} = this.props
        const clz = classNames({
            'tui-mask': !transparent,
            'tui-mask_transparent': transparent
        }, className)

        return (
            <div className={clz} {...others}></div>
        )
    }
}

export default Mask
