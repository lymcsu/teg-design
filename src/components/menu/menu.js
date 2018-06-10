import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

type State = {
    activeIndex: number,
    openedMenus: Array<number>,
    menuItems: Component,
    submenus: Component
};

export default class Menu extends Component {
  state: State;
  instanceType: string;

  constructor(props: Object) {
    super(props);

    this.instanceType = 'Menu';

    this.state = {
        activeIndex: props.defaultActive,
        openedMenus: props.defaultOpeneds ? props.defaultOpeneds.slice(0) : [],
        menuItems: {},
        submenus: {}
    }
  }

  getChildContext(): { component: Menu } {
    return {
      component: this
    };
  }

  componentDidMount() {
    this.openActiveItemMenus();
  }

  componentWillReceiveProps(props: Object) {
    if (props.defaultActive !== this.props.defaultActive || props.defaultActive !== this.state.activeIndex) {
      this.defaultActiveChanged(props.defaultActive);
    }

    if (props.defaultOpeneds !== this.props.defaultOpeneds) {
      this.defaultOpenedsChanged(props.defaultOpeneds);
    }
  }

  openMenu(index: number, indexPath: Array<number>): void {
    let { openedMenus } = this.state;

    if (openedMenus.indexOf(index) !== -1) return;
    // 将不在该菜单路径下的其余菜单收起
    if (this.props.uniqueOpened) {
      openedMenus = openedMenus.filter(index => {
        return indexPath.indexOf(index) !== -1;
      });
    }

    openedMenus.push(index);

    this.setState({ openedMenus });
  }

  closeMenu(index: number): void {
    let { openedMenus } = this.state;

    openedMenus.splice(openedMenus.indexOf(index), 1);

    this.setState({ openedMenus });
  }

  handleSubmenuClick(index: number, indexPath: Array<number>): void {
    let isOpened = this.state.openedMenus.indexOf(index) !== -1;

    if (isOpened) {
      this.closeMenu(index);

      if (this.props.onClose) {
        this.props.onClose(index, indexPath);
      }
    } else {
      this.openMenu(index, indexPath);

      if (this.props.onOpen) {
        this.props.onOpen(index, indexPath);
      }
    }
  }

  handleSelect(index: number, indexPath: Array<number>, instance: Component): void {
    let { activeIndex, openedMenus } = this.state;

    activeIndex = index;

    if (this.props.onSelect) {
      this.props.onSelect(index, indexPath, instance);
    }

    // if (this.props.mode === 'horizontal') {
    //   for (const key in submenus) {
    //     submenus[key].onItemSelect(index, indexPath);
    //   }

    //   openedMenus = [];
    // }

    this.setState({ activeIndex, openedMenus }, () => {
        this.openActiveItemMenus();
    });
  }

  openActiveItemMenus(): void {
    let { activeIndex, menuItems, submenus } = this.state;

    if (!menuItems[activeIndex]) return;
    if (activeIndex) {
      let indexPath = menuItems[activeIndex].indexPath();
      // 展开该菜单项的路径上所有子菜单
      indexPath.forEach(index => {
        const submenu = submenus[index];

        submenu && this.openMenu(index, submenu.indexPath());
      });
    }
  }

  defaultActiveChanged(value: number): void {
    const { menuItems } = this.state;

    this.setState({ activeIndex: value }, () => {
      if (!menuItems[value]) return;

      let menuItem = menuItems[value];
      let indexPath = menuItem.indexPath();

      this.handleSelect(value, indexPath, menuItem);
    });
  }

  defaultOpenedsChanged(value: mixed): void {
    this.setState({
      openedMenus: value
    });
  }

  render(): React.Element<any> {
    return (
        <div className={classNames({"tui-menu_outter": true, 'tui-menu_active': this.props.isOpen})}>
            <div className="tui-menu_bg" onClick={this.props.closeMenu}></div>
            <ul
            style={this.props.style}
            className={classNames("tui-menu")}
            >
                {this.props.children}
            </ul>
        </div>
    )
  }
}

Menu.childContextTypes = {
  component: PropTypes.any
};

Menu.propTypes = {
  defaultActive: PropTypes.string,
  defaultOpeneds: PropTypes.arrayOf(PropTypes.any),
  uniqueOpened: PropTypes.bool,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

Menu.defaultProps = {
    uniqueOpened: true
}
