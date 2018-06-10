import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ButtonDemo from './pages/button'
import MenuDemo from './pages/menu'
import DialogDemo from './pages/dialog'

// const Links = () => (
//     <nav>
//         <Link to="/button">Button</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/end">end</Link>
//     </nav>
// )

class App extends Component {
    constructor() {
        super()
        this.state = {
            menuOpen: false
        }
        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }
    openMenu() {
        this.setState({
            menuOpen: true
        })
    }
    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div style={{height: '100%'}}>
                    <MenuDemo closeMenu={this.closeMenu} isOpen={this.state.menuOpen}></MenuDemo>
                    <Switch>
                        <Route exact path="/" render={(props) => <ButtonDemo {...props} onMenuOpen={this.openMenu}></ButtonDemo> } />
                        <Route exact path="/button" render={(props) => <ButtonDemo {...props} onMenuOpen={this.openMenu}></ButtonDemo> } />
                        <Route path="/dialog" render={(props) => <DialogDemo {...props} onMenuOpen={this.openMenu}></DialogDemo> } />
                        <Route
                          path="/sub1"
                          render={({props}) => (
                            <h1>sub1 page</h1>
                        )} />
                        <Route
                          path="/sub2"
                          render={({props}) => (
                            <h1>sub2 page</h1>
                        )} />
                        <Route
                          path="/end"
                          render={({props}) => (
                            <h1>end page</h1>
                        )} />
                        <Route render={() => <h1>Page not found</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
