import React from 'react';
import UserHeader from '../../components/cityHeader';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import UserMsg from './../../components/UserMsg/index';

class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const userinfo = this.props.userinfo;
		let username = userinfo.username;
		let cityName = userinfo.cityName;
		return (
			<div>
				<UserHeader title="用户中心" backUrl="/"/>
				<UserMsg cityName={cityName} username={username}/>
			</div>
		);
	}

	componentDidMount() {
		this.checkLodined()
	}

	checkLodined() {
		let username = this.props.userinfo.username;
		if(!username){
			//hashHistory.push('/login')
		}
	}
}

function mapDispatchProps(dispatch) {
	return {}
}
function mapStateToProps(state) {
	return {
		userinfo:state.userinfo
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(User);