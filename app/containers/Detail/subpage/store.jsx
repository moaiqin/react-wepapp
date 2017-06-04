import React from 'react';
import StoreInfo from '../../../components/BuyAndStore';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
import * as actionsDispatch from '../../../actions/store';
import { bindActionCreators } from 'redux';

class Store extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStore: false
		}
	}

	render() {

		return (
			<StoreInfo 
			isStore={this.state.isStore}
			handleStore={this.handleStore.bind(this)}
			handleBuy={this.handleBuy.bind(this)}/>
		);
	}

	componentDidMount() {
		//检查是否收藏
		this.checkStore();
	}

	handleBuy() {
		let logined = this.loginCheck();
		if(!logined)
			return;
		hashHistory.push('/User');
	}

    checkStore(){
    	let id = this.props.id;
    	this.props.store.some(item => {
    		if(item.id === id){
    			this.setState({
    				isStore:true
    			})
    			//some函数如果检测到就returntrue 就不会实行下一个了
    			return true;
    		}
    	})
    }

	handleStore() {
		let logined = this.loginCheck();
		if(!logined)
			return;
		const id = this.props.id;
		const storeActions = this.props.actionsDispatch;
		
		if(this.state.isStore){
			//已经收藏
			storeActions.rm({
				id: id
			})
		}else{
			//还没有收藏
			storeActions.add({
				id:id
			})
		}

		//修改state，重新渲染
		this.setState({
			isStore: !this.state.isStore
		})
	}

	loginCheck() {
		let id = this.props.id;
		let username = this.props.userinfo.username;
		if(!username){
			hashHistory.push('/login/' + encodeURIComponent('detail/' + id));
			return false;
		}
		return true;
	}
}

function mapStateToProps(state) {
	return {
		userinfo:state.userinfo,
		store:state.store
	}
}

function mapDispatchProps(dispatch) {
	return {
		actionsDispatch:bindActionCreators(actionsDispatch,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Store);