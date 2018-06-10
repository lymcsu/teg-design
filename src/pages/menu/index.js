import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, SubMenu } from '../../components/menu'

const pathMap = {
    '/button': '0',
    '/dialog': '1',
    '/end': '2',
    '/sub1': '3-1',
    '/sub2': '3-2'
}

export default class MenuDemo extends React.Component {
    constructor() {
        super()
        
        this.state = {
            activePage: "0"
        }
    }
    componentWillMount() {
        this.setState({
            activePage: pathMap[window.location.pathname]
        })
    }
    render() {
        return (
            <Menu isOpen={this.props.isOpen} closeMenu={this.props.closeMenu} defaultActive={this.state.activePage}>
                <MenuItem index="0">
                    <Link to="/button" onClick={() => this.setState({activePage: "0"})}>Button</Link>
                </MenuItem>
                <MenuItem index="1">
                    <Link to="/dialog" onClick={() => this.setState({activePage: "1"})}>Dialog</Link>
                </MenuItem>
                <MenuItem index="2">
                    <Link to="/end" onClick={() => this.setState({activePage: "2"})}>End</Link>
                </MenuItem>
                <SubMenu title="submenu" index="3">
                    <MenuItem index="3-1">
                        <Link to="/sub1" onClick={() => this.setState({activePage: "3-1"})}>Sub1</Link>
                    </MenuItem>
                    <MenuItem index="3-2">
                        <Link to="/sub2" onClick={() => this.setState({activePage: "3-2"})}>Sub2</Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
        )
    }
}