import React, { Component } from 'react'
import {Redirect,Route,Switch} from "react-router-dom"

class RouterView extends Component {
    render() {
        let {routes} = this.props;

        let arrRedirect = routes.filter((item,index)=>{
            return item.redirect;
        })

        let Redirects = arrRedirect.map((item,index)=>{
            return <Redirect key={index} from={item.path} exact to={item.redirect}/>
        })

        routes = routes.filter((item)=> !item.redirect);
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
               {Redirects.length !== 0 && Redirects}
           </Switch>
        )
    }
}

export default RouterView