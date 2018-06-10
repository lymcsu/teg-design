import React from 'react'
import Dialog from '../../components/dialog'
import { NavBar } from '../../components/navbar'
import { Page } from '../../components/page'
import { Button } from '../../components/button'

export default class DialogDemo extends React.Component {
	constructor() {
		super()
		this.state = {
			showIOS1: false,
			showIOS2: false,
			showAndroid1: false,
			showAndroid2: false,
			style1: {
	            buttons: [
	                {
	                    label: 'Ok',
	                    onClick: this.hideDialog.bind(this)
	                }
	            ]
	        },
	        style2: {
	            title: 'TITLE',
	            buttons: [
	                {
	                    type: 'default',
	                    label: 'Cancel',
	                    onClick: this.hideDialog.bind(this)
	                },
	                {
	                    type: 'primary',
	                    label: 'Ok',
	                    onClick: this.hideDialog.bind(this)
	                }
	            ]
	        }
		}
	}
	hideDialog() {
		this.setState({
			showIOS1: false,
			showIOS2: false,
			showAndroid1: false,
			showAndroid2: false
		})
	}
    render() {
        // let match = this.props.match
        return (
            <Page title="Dialog" subTitle="对话框">
                <NavBar left={{text: '...', func: () => {this.props.onMenuOpen()}}} title="Dialog"></NavBar> 
                <div className='containerPage'>
                    <Button onClick={() => this.setState({showIOS1: true})}>show ios dialog1</Button>
                    <Button onClick={() => this.setState({showIOS2: true})}>show ios dialog2</Button>
                    <Button onClick={() => this.setState({showAndroid1: true})}>show andriod dialog1</Button>
                    <Button onClick={() => this.setState({showAndroid2: true})}>show andriod dialog2</Button>
                </div>
                <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                    This is iOS Style 1
                </Dialog>
                <Dialog type="ios" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showIOS2}>
                    This is iOS Style 2
                </Dialog>

                <Dialog type="android" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showAndroid1}>
                    This is Android Style 1
                </Dialog>
                <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showAndroid2}>
                    This is Android Style 2
                </Dialog>
            </Page>
        )
    }
}