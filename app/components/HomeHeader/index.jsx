import React from 'react';
import {hashHistory,Link} from 'react-router';
import SearchInput from '../searchInput';

import './style.less';

class HomeHeader extends React.Component {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		return (
			<div id="home-header" className="clear-fix">
				<div className="home-header-left float-left">
				    <Link to="/city">
				    	{this.props.cityName}
				    	&nbsp;
				    	<i className="icon-angle-down"></i>
				    </Link>
				</div>
				<div className="home-header-right float-right">
				    <Link to="/login">
				    	<i className="icon-user"></i>
				    </Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
					    <i className="icon-search"></i>
					    <SearchInput value="" enHandle={this.routerHandle.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
	
	routerHandle(value) {
		if(!value)
			return;
		hashHistory.push('/search/all/' +encodeURIComponent(value));
	}
}

export default HomeHeader;