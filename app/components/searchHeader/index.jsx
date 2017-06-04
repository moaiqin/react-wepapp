import React from 'react';
import SearchInput from '../searchInput/index';
import {hashHistory} from 'react-router';

import './style.less';

class SearchHeader extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div id="searchHeader" className="clear-fix">
				<span className="back-icon" onClick={ this.clickHandle.bind(this)}>
		         	<i className="icon-chevron-left"></i>
		        </span>
		        <div className="search-wrap">
		             <div className="search-form">
		                <i className="icon-search"></i>
		             	<SearchInput 
		             	value={this.props.keyword} 
		             	enHandle={this.toChangeRouter.bind(this)}/>
		             </div>
				</div>
			</div>
		);
	}
	clickHandle() {
		window.history.back();
	}
	toChangeRouter(value) {
		if(!value)
			return;
		const type = this.props.type || 'all';
		hashHistory.push('/search/' + type + '/' +encodeURIComponent(value))
	}

	
}

export default SearchHeader;