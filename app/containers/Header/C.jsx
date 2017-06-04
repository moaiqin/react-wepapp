import React from 'react';

class C extends React.Component{
	render(){
		return (
			<div>
				<button onClick={this.changeUserInfo.bind(this)}>修改</button>
			</div>
		);
	}

	changeUserInfo(){
		const actions = this.props.actions;
		actions.login({
			userid:123,
			city:'北京'
		})
	}
}

export default C;