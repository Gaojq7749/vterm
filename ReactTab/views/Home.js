import React, { Component } from 'react'
import './home.css'
import Right from "../components/Right"
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:"奶粉",content:["婴儿奶粉","羊奶粉"]},
                {name:"洗护",content:["保湿乳","洗面奶"]},
                {name:"童装",content:["新生儿礼盒","短裙"]},
                {name:"玩具",content:["毛绒","牙胶"]},
            ],
            ind:0
        }
    }
    render() {
        let {data,ind} = this.state
        return (          
            <div className="box">
               <ul className="lis">
                   {
                       data.map((item,index)=>{
                           return <li key={index} style={ind===index?{backgroundColor:"yellow"}:{}} onClick={()=>{
                               this.setState({
                                   ind:index
                               })
                           }}>{item.name}</li>
                       })
                   }
               </ul>
               <Right propData={data} cind={ind}/>
            </div>
        )
    }
}
