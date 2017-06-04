import React from 'react';
import {Link} from 'react-router';

import './style.less';

class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
			<div id="list-item" className="clear-fix">
				<Link to={'/detail/'+data.id}>
					<div className="item-img-container float-left">
						<img src={data.img} alt={data.title}/>
					</div>
					<div className="search-item-content">
						<div className="item-title clear-fix">
						    <h3 className="float-left">{data.title}</h3>
						    <span className="float-right">{data.distance}</span>
						</div>
						<p className="search-sub-title">
							{data.subTitle}
						</p>
						<div className="search-price-container clear-fix">
							<span className="price float-left">￥{data.price}</span>
							<span className="number float-right">已售{data.number}</span>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default Item;