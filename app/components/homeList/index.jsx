import React from 'react';

import './style.less';
import Item from './item';
class HomeList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
			<div className="list-container">
				{data.map((item, index) => {
					return <Item key={index} item={item} />
				})}
			</div>
		);
	}
}

export default HomeList;