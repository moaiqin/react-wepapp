import React from 'react';
import CityName from '../../components/cityHeader';
import CurrentCity from '../../components/currentCity';
import CityList from '../../components/cityListy';
import LocalStore from '../../util/localStore';
import {CITYNAME} from '../../config/localstorageKey.js';
import { bindActionCreators } from 'redux';
import {hashHistory} from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';

import {connect} from 'react-redux';

class City extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
			   <CityName title="选择城市"/>
			   <CurrentCity curCity={this.props.userinfo}/>
			   <CityList changeCityFn={this.changeCity.bind(this)}/>
			</div>
		);
	}

	changeCity(newCity) {
		var userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		
		//存到redux中
		this.props.userInfoActions.update(userinfo);

		//存到localstore
		LocalStore.setItem(CITYNAME,newCity);

		//调转到首页
		hashHistory.push('/');
	}

}

//这样就能得到所有的state的数据
function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}

//这样就可以提供方法到props
function mapDispatchToProps(dispatch){
	return {
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}

export default connect(
	    mapStateToProps,
	    mapDispatchToProps
	)(City);