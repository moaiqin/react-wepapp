import React from 'react';
import {hashHistory} from 'react-router';

import './style.less';

class CityName extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div id="common-header">
		         <span className="back-icon" onClick={ this.clickHandle.bind(this)}>
		         	<i className="icon-chevron-left"></i>
		         </span>
		         <h2>{this.props.title}</h2>
			</div>
		);
	}
	clickHandle() {
		let backUrl = this.props.backUrl;
		if(backUrl){
			hashHistory.push(backUrl);
		}else{
			window.history.go(-1);
		}
	}
}

export default CityName;