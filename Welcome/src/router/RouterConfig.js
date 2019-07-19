
import Login from '../views/Login'
import Index from '../views/Index'
import Home from '../views/Home'
import Set from '../views/Set'
import Loan from '../views/Loan'
import Transfer from '../views/Transfer'
import Insurance from '../views/Insurance'


const routes = [
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/home",
                component:Home
            },
            {
                path:"/index/set",
                component:Set
            },
            {
                path:"/index/loan",
                component:Loan
            },
            {
                path:"/index/transfer",
                component:Transfer
            },
            {
                path:"/index/insurance",
                component:Insurance
            },
            {
                path:"/index",
                redirect:"/index/home"
            }
        ]
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/",
        redirect:"/index"
    }
    
]

export default routes;