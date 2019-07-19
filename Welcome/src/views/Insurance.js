import React, { Component } from 'react'
import { DatePicker,Radio,InputNumber, Select,Button,Table} from 'antd';
import '../css/loan.css'
import axios from "axios"

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Column } = Table;

export default class loan extends Component {
    constructor(props){
        super(props);
        this.state={
            dataList:[],//获取初识数据
            endList:undefined,//筛选后的数据
            startTime:"2016-03-04 18:20",//开始默认时间
            endTime:"2019-07-19 18:20",//结束默认时间
            minMoney:0,//最小金额
            maxMoney:20,//最大金额
            handleState:5,//订单状况
            type:"",//订单类型
            name:""//客服名称
        }
    }

    //请求数据
    componentDidMount(){
        axios.get("http://localhost:3000/api/list?order=3").then(({data})=>{
            console.log(data.data)
            this.setState({
                dataList:data.data
            })
        }) 
    }

//处理时间
  handleDateChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        // 设置时间
        this.setState({startTime:dateString[0],endTime:dateString[1]});
  }

  //点击查询筛选数据
  handleSearch(){
     console.log(this.state.minMoney,this.state.maxMoney)
        var endList = this.state.dataList.filter(item=>{
            var date = new Date(item.date).getTime();
            var startdate = new Date(this.state.startTime).getTime();
            var enddate = new Date(this.state.endTime).getTime();

            return (date > startdate && date < enddate)//时间
             && (item.money >= this.state.minMoney && item.money <= this.state.maxMoney)//金额
             && (this.state.handleState === 5 ? true : item.handleState === this.state.handleState) //状态
             &&(!this.state.type ? true : this.state.type === item.type)//类型
             &&(!this.state.name ? true : this.state.name === item.serviceName)//客服
        })
        console.log(endList)
        this.setState({endList})
  }

    render() {
        const {dataList,endList} = this.state
        return (
            <div>
                <div className="Elul">
                 <div>
                    处理时间：<RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Start Time', 'End Time']}
                    onChange={this.handleDateChange.bind(this)}
                    />
                   
                 </div>
                 <div> 金额范围：
                    <InputNumber
                    defaultValue={1}
                    formatter={value => `${value}`}
                    min={1}
                    max={20}
                    onChange={(value)=>{this.setState({minMoney:value})}}
                    />
                    <InputNumber
                    defaultValue={20}
                    min={1}
                    max={20}
                    formatter={value => `${value}`}
                    onChange={(value)=>{this.setState({maxMoney:value})}}
                    />
                </div>
                <div>
                    处理状态：
                    <Radio.Group defaultValue="5" buttonStyle="solid" onChange={(e)=>{
                        this.setState({handleState:parseInt(e.target.value)})
                    }}>
                        <Radio.Button value="5">全部</Radio.Button>
                        <Radio.Button value="0">新订单</Radio.Button>
                        <Radio.Button value="1">未审核</Radio.Button>
                        <Radio.Button value="2">已接单</Radio.Button>
                        <Radio.Button value="3">已完成</Radio.Button>
                        <Radio.Button value="4">暂无状态</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    转单类型：
                    <Select
                        defaultValue="请选择类型"
                        style={{ width: 120 }} onChange={value =>{this.setState({type:value})}}>
                        <Option value="信用贷">信用贷</Option>
                        <Option value="押房贷">押房贷</Option>
                        <Option value="放乐贷">放乐贷</Option>
                        <Option value="车乐贷">车乐贷</Option>
                    </Select>
                </div>
                <div>
                    客服名称：
                    <Select
                        defaultValue="请选择客服"
                        style={{ width: 120 }} onChange={value =>{this.setState({name:value})}}>
                        <Option value="李大维">李大维</Option>
                        <Option value="李小冉">李小冉</Option>
                        <Option value="李莉">李莉</Option>
                        <Option value="张玲">张玲</Option>
                        <Option value="李家豪">李家豪</Option>
                    </Select>
                </div>
                <div><Button type="primary" onClick={this.handleSearch.bind(this)}>查询</Button></div>
            </div>
           
            <div>
            <Table rowKey="id" dataSource={endList?endList:dataList} pagination={{pageSize:8}}>        
                    <Column title="订单号" dataIndex="id" key="id" />
                    <Column title="下单时间" dataIndex="date" key="date" />
                    <Column title="手机号" dataIndex="phone" key="phone" />
                    <Column title="转单类型" dataIndex="type" key="type" />
                    <Column title="贷款金额（万元）" dataIndex="money" key="money" />
                    <Column title="订单状态" dataIndex="handleState" key="handleState" />
                    <Column title="客服" dataIndex="serviceName" key="serviceName" />
                    <Column title="操作" dataIndex="order" key="order" />
                </Table>
            </div>  
        </div>
            
        )
    }
}
