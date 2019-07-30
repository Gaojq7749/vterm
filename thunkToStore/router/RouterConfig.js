import Page from '../views/Page'
import Mine from '../views/Mine'

import Item1 from '../views/page/Item1'
import Item2 from '../views/page/Item2'


const routes = [
    {
        path:"/page",
        component:Page,
        children:[
            {
                path:"/page/item1",
                component:Item1
            },
            {
                path:"/page/item2",
                component:Item2
            },
            {
                path:"/page",
                redirect:"/page/item1"
            }
        ]
    },
    {
        path:"/mine",
        component:Mine
    },
    {
        path:"/",
        redirect:"/Page"
    }
]

export default routes;