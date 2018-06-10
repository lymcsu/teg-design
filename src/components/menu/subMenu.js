import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import CollapseTransition from './collapseTransition';

import MixinComponent from './MixinComponent';

type State = {
  active: boolean
};

export default class SubMenu extends MixinComponent {
  state: State;
  instanceType: string;

  constructor(props: Object) {
    super(props);

    this.instanceType = 'SubMenu';

    this.state = {
      active: false
    };
  }

  getChildContext(): { component: SubMenu } {
    return {
      component: this
    };
  }

  componentDidMount() {
    this.rootMenu().state.submenus[this.props.index] = this;
    this.initEvents();
  }

  onItemSelect(index: number, indexPath: Array<number>): void {
    this.setState({
      active: indexPath.indexOf(this.props.index) !== -1
    });
  }

  handleClick(): void {
    this.rootMenu().handleSubmenuClick(this.props.index, this.indexPath());
  }

  handleMouseenter(): void {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.rootMenu().openMenu(this.props.index, this.indexPath());
    }, 300);
  }

  handleMouseleave(): void {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.rootMenu().closeMenu(this.props.index, this.indexPath());
    }, 300);
  }

  initEvents(): void {
      const triggerElm = this.refs['submenu-title'];

      triggerElm.addEventListener('click', this.handleClick.bind(this));
  }

  opened(): boolean {
    return this.rootMenu().state.openedMenus.indexOf(this.props.index) !== -1;
  }

  render(): React.Element<any> {
    return (
      <li style={this.props.style} className={classNames('tui-submenu', {
        'is-active': this.state.active,
        'is-opened': this.opened()
      })}>
        <div ref="submenu-title" className="tui-submenu_title">
          {this.props.title}
          <i className={classNames('tui-submenu_icon-arrow', {
              'tui-icon-arrow-down': true
            })}>
          </i>
        </div>
        {
          (
            <CollapseTransition isShow={this.opened()}>
              <ul className="tui-menu">{this.props.children}</ul>
            </CollapseTransition>
          )
        }

      </li>
    )
  }
}

SubMenu.childContextTypes = {
  component: PropTypes.any
};

SubMenu.propTypes = {
  index: PropTypes.string.isRequired
};
