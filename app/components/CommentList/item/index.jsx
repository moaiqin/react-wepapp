import React from 'react';
import './style.less';
import Star from '../../star';

class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		let item = this.props.data;
		return (
			<div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
		);
	}
}

export default Item;