import React from 'react';
import {connect} from 'react-redux';

import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad.jsx';
import List from './subpage/List';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName}/>
				<Category/>
				<div style={{height:2}}></div>
				<Ad/>
				<List cityName={this.props.userinfo.cityName}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {}
}
//哪里引用哪里就可以使用redux里面的数据
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)