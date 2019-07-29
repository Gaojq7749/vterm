import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function todos(state=[],action){
    switch(action.type){
        case 'GET_LIST':
        state = action.data;
        console.log(state,"保存数据");
            return [...state]
        default:
            return [...state];
    }
}

let reducers = combineReducers({todos})
//注意合并中是对象combineReducers({})

let store = createStore(reducers,applyMiddleware(thunk));

export default store;