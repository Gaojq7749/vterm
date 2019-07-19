import React, { Component } from 'react'
import Cookie from 'js-cookie';
import axios from 'axios'
import "../css/login.css"
import zhuan from "../zhuan.png"
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            checkcodebtnTip:'获取验证码',
            phone:'',
            checkcode:'',
            password:'',
            num:"获取验证码"
        }
    }
    render() {
        return (
            <div id="login">
                <div className="box">
                    <div className="login-left">
                        <p className="font">Welcome</p>
                        <p className="money">赚赚金融 开创信贷“1＋N”模式的综合互联网金融服务共享平台</p>
                    </div>
                    <form className="login-right" action="">
                        <dl>
                            <dt>
                                <img src={zhuan} alt=""/>
                            </dt>
                            <dd>赚赚金融渠道管理系统</dd>
                        </dl>
                        <p><input type="text" placeholder="手机号" onChange={(e)=>{
                            this.setState({
                                phone:e.target.value
                            })
                        }}/></p>
                        <p><input type="text" placeholder="登录密码" onChange={(e)=>{
                            this.setState({
                                password:e.target.value
                            })
                        }}/></p>
                        <p className="ipty"><input type="text" placeholder="验证码"/><span className="codebtn" onClick={()=>{
                                axios.get("http://localhost:3000/api/checkCode").then(({data})=>{
                                    console.log(data)
                                    this.setState({
                                        num:data.Verification 
                                    })
                                })
                        }}>{this.state.num}</span></p>
                        <button className="btn" type="submit" onClick={this.handleLogin.bind(this)}>登录</button>
                    </form>
                </div>
            </div>
        )
    }

    handleLogin(e){
        // e.preventDefault();
        axios.defaults.headers.common['authorization']=Cookie.get("phone")
        axios.post("http://localhost:3000/api/login",{phone:this.state.phone,password:this.state.password,checkcode:this.state.num}).then(({data})=>{
                   //在这里将得到的 sessionId 存入cookie
                   console.log(data)
                   if(data.code===0){
                       Cookie.set('phone',data.sessionId,{expires:7});
                       this.props.history.push("/index/home")
                   }else{
                       alert(data.message)
                   }
           
        })
    }
}
