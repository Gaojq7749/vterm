import React, { Component } from 'react'

export default class right extends Component {
    render() {
        let {cind} = this.props;
        return (
            <div>
                {
                    this.props.propData[cind].content.map((item,index)=>{
                        return <p key={index} style={{fontSize:"30px"}}>{item}</p>
                    })
                }
            </div>
        )
    }
}
