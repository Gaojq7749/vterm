import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import '../css/navleft.css'
import axios from "axios"
import Cookie from "js-cookie"
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    constructor(props){
        super(props);
        this.state={
            obj:{}
        }
    }
    componentDidMount(){
        axios.defaults.headers.common['authorization']=Cookie.get("phone")
        axios.get("http://localhost:3000/api/islogin").then(({data})=>{
            this.setState({
                obj:data.info
            })
        })
      
    }
 

    render() {
        return (
            <div className="navLeft">
                <dl>
                   <dt><img src={"http://localhost:3000"+this.state.obj.facePhoto} alt=""/></dt>
                   <dd><span>{this.state.obj.phone}</span></dd>
               </dl>
               <ul className="li-list">
                   <li><NavLink to="/index/home">首页</NavLink></li>
                   <li><NavLink to="/index/set">设置</NavLink></li>
                   <Menu
                        onClick={this.handleClick}
                        style={{ width: 200 ,background : "#001529"}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                         <SubMenu
                            key="sub2"
                            title={
                                <span>
                                <Icon type="appstore" />
                                <span>订单管理</span>
                                </span>
                            }
                            >
                            <Menu.Item key="1"><NavLink to="/index/loan">贷款订单</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/index/transfer">转单订单</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/index/insurance">保险订单</NavLink></Menu.Item>
                            </SubMenu>
                    </Menu>
               </ul>
               <div className="oSpan">
                   <span onClick={()=>{
                       alert(1)
                   }}>退出</span>
                   <span>设置</span>
               </div>
            </div>
        )
    }

   
}   
