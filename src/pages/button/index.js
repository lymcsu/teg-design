import React from 'react'
import { Button, ButtonArea } from '../../components/button'
import { NavBar } from '../../components/navbar'
import { Page } from '../../components/page'

export default class ButtonDemo extends React.Component {
    constructor() {
        super()
    }
    render() {
        // let match = this.props.match
        return (
            <Page title="Button" subTitle="按钮">
                <NavBar left={{text: '...', func: () => {this.props.onMenuOpen()}}} right={{icon: '👦', func: ()=>{alert(2)}, href: 'javascript:;'}} title="Button"></NavBar> 
                <div className='containerPage'>
                    <Button type='primary'>Primary</Button>
                    <Button type='primary' disabled>Primary</Button>
                    <Button type='default'>Default</Button>
                    <Button disabled>Disabled</Button>
                    <ButtonArea direction='horizontal'>
                        <Button type='warn'>Warn</Button>
                        <Button type='warn' disabled>Warn</Button>
                    </ButtonArea>
                    <ButtonArea direction='horizontal'>
                        <Button size='small'>Mini</Button>
                        <Button size='small' type="primary">Mini</Button>
                        <Button size='small' type="warn">Mini</Button>
                    </ButtonArea>
                    <ButtonArea>
                        <Button>VerticalGroup</Button>
                        <Button disabled>Vertical Disabled</Button>
                    </ButtonArea>
                </div>
            </Page>
        )
    }
}