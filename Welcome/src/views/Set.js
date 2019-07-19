import React, { Component } from 'react'
import "../css/set.css"
import svc from '../logo.svg' 

const dtstyle ={
  
}
const iptstyle ={
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    outline:"none",
    opacity: ".1"
}
export default class Set extends Component {
    render() {
        return (
            <dl>
                <dt className="dtstyle" style={dtstyle}>
                    <input type="file"  className="iptstyle" style={iptstyle}/>
                    <img src={svc} className="imgs" alt=""/>
                </dt>
                <dd>1871553442</dd>
                <dd><button>更改</button></dd>
            </dl>
        )
    }
}
