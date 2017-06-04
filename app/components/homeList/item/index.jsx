import React from 'react';
import {Link} from 'react-router';

import './style.less';

class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		let data = this.props.item;
		return (
			<Link to={'/detail/' + data.id}>
				<div className="list-item clear-fix">
					<div className="item-img-container float-left">
						<img src={data.img} alt={data.title}/>
					</div>
					<div className="item-content">
						<div className="item-title-container clear-fix">
							<h3 className="float-left">{data.title}</h3>
							<span className="float-right">{data.distance}</span>
						</div>
						<p className="item-sub-title">
							{data.subTitle}
						</p>
						<div className="item-price-container clear-fix">
							<span className="price float-left">￥{data.price}</span>
							<span className="number float-right">已售{data.number}</span>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default Item;