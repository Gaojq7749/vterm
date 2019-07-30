import React, { Component } from 'react'
import {Redirect,Switch,Route} from 'react-router-dom';

class RouterView extends Component {
    render() {
        // 1.解构
        let {routes} = this.props;
        // 2.取出重定向
        let arrRedirect = routes.filter((item) =>{
            return item.redirect;
        })

        let Redirectx = arrRedirect.map((item,index)=>{
            return <Redirect key={index} from={item.path} exact to={item.redirect}/>;
        })
        // 3.把重定向的项 从routes去掉 方便遍历
        routes = routes.filter((item) => !item.redirect);
        return (
            <Switch>
                {
                    routes.map((item,index)=>{
                        return <Route path={item.path} key={index} render={(props)=>{
                            return <>
                                {item.children && <item.component children={item.children} {...props}/>}
                                {!item.children && <item.component {...props}/>}
                            </>
                        }}/>
                    })
                }
                {Redirectx.length !== 0 && Redirectx}
            </Switch>
        )
    }
}

export default RouterView;