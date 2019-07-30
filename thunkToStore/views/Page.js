import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';
import RouterView from '../router/RouterView';

export default class Page extends Component {
    render() {
        return (
            <div>
                <h1>首页</h1>
                <RouterView routes={this.props.children}/>
                <div>
                    <NavLink to="/page/item1">大儿子</NavLink>
                    <NavLink to="/page/item2">小儿子</NavLink>
                </div>
            </div>
        )
    }
}
