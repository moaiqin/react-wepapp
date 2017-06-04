import { combineReducers } from 'redux';
import userinfo from './userinfo';
import store from './store.js';

//就是把userinfo合成reducer,定义成规则
//import userinfo2 from './userinfo2';
//我们来看combineReducers(reducers)方法，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
//combineReducers(reducers)返回的就是一个最终的reducer,返回多个state的,里面会循环实行obj里面的东西
const rootReducer = combineReducers({
	//es6的语法   == userinfo:userinfo
	//可以定义多个规则
	//这里定义userinfo那么state就多了个userinfo属性
	userinfo,
	store
	//userinfo2:userinfo2
})

export default rootReducer;