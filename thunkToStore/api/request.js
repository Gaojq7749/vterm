import axios from 'axios'
import {dataJson} from './api'

export default function (next){
    axios.get(dataJson).then((res)=>{
        console.log(res.data.categories,111111);
        next({type:"GET_LIST",data:res.data.categories})
    })
}