import React, { Component } from 'react'
import NavLeft from "../components/NavLeft"
import RouterView from "../router/RouterView";
import Header from '../components/Header';

export default class Forindex extends Component {
    render() {
        return (
            <div id="index">
                <NavLeft/>
                <div className="main">
                    <Header/>
                    <RouterView routes={this.props.children}/>
                </div>    
            </div>
        )
    }
}
