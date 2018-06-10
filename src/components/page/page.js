import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

class Page extends Component {
    static propTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string
    };

    static defaultProps = {
        title: 'Title'
    };

    constructor(props){
        super(props);

        this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true,
        };
    }

    render(){
        const { children, style, className, title, subTitle } = this.props;
        const cls = classNames('tui-page', className);

        return (
            <section
                className={cls}
                style={Object.assign({}, style)}>
                <div className="tui-page_hd">
                    <h1 className="tui-page_title">{ title }</h1>
                    <p className="tui-page_subTitle">{ subTitle }</p>
                </div>
                <div className="tui-page_bd">
                    { children }
                </div>
            </section>
        );
    }
}

export default Page;
