import React, { Component } from 'react'
import {connect} from "react-redux"
import request from "./api/request"

import {BrowserRouter,NavLink} from "react-router-dom";
import RouterView from './router/RouterView';
import routes from './router/RouterConfig';


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <button type="button" onClick={this.requestData.bind(this)}>保存数据</button>
                <button type="button" onClick={this.getData.bind(this)}>获取数据</button>  
                <RouterView routes={routes}/>  
                <div>
                    <NavLink to="/page">首页</NavLink>
                    <NavLink to="/mine">我的</NavLink>
                </div>
            </BrowserRouter>
        )
    }
    requestData(){
        //把数据存入仓库
        this.props.saveAsync(request)
    }
    getData(){
        let list = this.props.dataList
        console.log(list,"获取数据")
    }
}
export default connect((state)=>{
    return{
        dataList: state.todos
    }
},(dispatch)=>{
    return{
        saveAsync:(fn)=>{
            dispatch(fn);
        }
    }
})(Home);




// App.js中数据
// import Home from './components/Home'
// import {Provider} from 'react-redux';
// import store from './components/store/store'

// <Provider store={store}>
//     <Home/>
// </Provider>