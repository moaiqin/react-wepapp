import React from 'react';
import LoginComponent from '../../components/Login';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import * as userinfoActions from '../../actions/userinfo';
import {bindActionCreators} from 'redux';
import LoginHeader from '../../components/cityHeader';

class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loginCheck: true
		}
	}
	render() {
		return (
			<div>
			    <LoginHeader title="用户登录" />
				{
					this.state.loginCheck ?
					<div>中心也</div>:
					<LoginComponent handleLogin={this.handleLogin.bind(this)}/>
				}
			</div>
		);
	}

	componentDidMount() {
		this.checkLogined();
	}

	//处理登陆成功后的func
	handleLogin(username) {
		//保存数据到redux
		const userAction = this.props.userinfoActions;
		let userinfo = this.props.userinfo;
		userinfo.username = username;
		userAction.update(userinfo);

		//跳转链接
		let params = this.props.params;
		let router = params.router;
		//如果有之前的链接就跳转到之前的链接
		
		if(router){
			hashHistory.push(router);
		}else{
			hashHistory.push('/User')
		}

	}

	checkLogined() {
		const userinfo = this.props.userinfo;
		if(userinfo.username){
			//如果用户登录走这里
			this.toUserPage();
		}else{
			this.setState({
				loginCheck:false
			})
		}
	}

	toUserPage() {
		hashHistory.push('/User');
	}
}

function mapStateToProps(state) {
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userinfoActions,dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);