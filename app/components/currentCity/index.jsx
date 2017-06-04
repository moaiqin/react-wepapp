import React from 'react';
import './style.less';

class CurrentCity extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {

		return (
			<div className="cur-city">
			    <h4>{this.props.curCity.cityName}</h4>
			</div>
		);
	}
}
export default CurrentCity;