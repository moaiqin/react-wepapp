import {createStore} from 'redux';

export default function (){
	//定义计算规则，即reducer
	function counter(state=0,action){
		switch (action.type){
			case "INCREMENT":
			     return state + 1;
			case "DECREMENT":
			     return state - 1;
			default:
			     return state;
		}

	}
	//根据计算则生成
	let store = createStore(counter);
	//定义书籍（即state改变后的派发规则）
	//,dispatch实行时候就实行下面的subscribe
	store.subscribe(() => {
		console.log("fn1 -> current state", store.getState());
	})
	store.subscribe(() => {
		console.log("fn1 -> current state", store.getState());
	})

	//触发数据变化
	store.dispatch({type:"INCREMENT"});
	store.dispatch({type:"INCREMENT"});
	store.dispatch({type:"DECREMENT"});


}