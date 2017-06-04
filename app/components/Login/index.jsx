import React from 'react';
import './style.less';


class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val:''
		}
	}
	render() {
		
		return (
			<div className="userLogin">
			    <form>
			    	<div className="input-group">
			    		<i className="icon-tablet"></i>
			    		<input 
			    		value={this.state.val}
			    		onChange={this.handleChange.bind(this)}
			    		placeholder="请输入用户名"/>
			    	</div>
			    	<div className="input-group">
			    		<i className="icon-key"></i>
			    		<input 
			    		placeholder="输入验证码"
			    		type="text"/>
			    		<span className="get-code">获取验证码</span>
			    	</div>
			    	<div className="other-method">
			    		<span>其他方式登陆</span>
			    		<span>忘记密码?</span>
			    	</div>
			    	<div className="input-group last">
			    		<button
			    		type="submit"
			    		onSubmit={this.handleSubmit.bind(this)}
			    		onClick={this.handleClick.bind(this)}>登陆</button>
			    	</div>
			    </form>
			</div>
		);
	}
	handleChange(ev) {
	    ev = ev || window.event;
		let targte = ev.target || ev.srcElement;
		this.setState({
			val:targte.value
		})
	}

	handleClick() {
		let username = this.state.val;
		if(!username)
			return;
		this.props.handleLogin(username);
	}
	handleSubmit(ev){
	    ev = ev || window.event;
		if(!this.state.val)
			return false;
		this.props.handleLogin(username);
	}
}

export default LoginComponent;