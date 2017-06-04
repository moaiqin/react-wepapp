import React from 'react';

import './style.less';

class Star extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let star = this.props.star || 0;
		if(star > 5){
			star = star % 5;
		}
		return (
			<div className="star-container">
				{[1,2,3,4,5].map((item, index) => {
					let starClass = star >= item ? 'light':'';
					return <i key={index} className={'icon-star ' + starClass}></i>
				})}
			</div>
		);
	}
}

export default Star;