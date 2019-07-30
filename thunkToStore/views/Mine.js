import React, { Component } from 'react'
import {connect} from 'react-redux';

class Mine extends Component {
    render() {
        console.log(this.props.myData)
        let {myData} = this.props;
        return (
            <div>
                <h1>我的</h1> 
                <ul>
                    {
                        myData.map((item,index)=>{
                            return <li key={index}>{item.name}<img src={item.icon}/></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        myData:state.todos
    }
},(dispatch)=>{
    return{}
})(Mine);