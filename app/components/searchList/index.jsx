import React from 'react';
import Item from './item';

import './style.less';

class SearchListItems extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
			<div className="search-list-container">
				{data.map((item, index) => {
					return <Item key={index} data={item}/>
				})}
			</div>
		);
	}
}

export default SearchListItems;