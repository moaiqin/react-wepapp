import React from 'react';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localstorageKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			initDone: false
		}
	}

	render() {
		return (
			<div>
				{this.state.initDone?this.props.children:<div>加载...</div>}
			</div>
		);
	}

	componentDidMount() {
		//从localstorage中读取城市
		let cityName = LocalStore.getItem(CITYNAME);
		//cityNAme ==null 就可以代替cityname ===unfides 或者cityName===null;
		if(cityName == null){
			cityName = '北京';
		}

		//将城市存到redux中
		this.props.userInfoActions.update({
			cityName:cityName
		});

		this.setState({
			initDone:true
		})
	}
}

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)