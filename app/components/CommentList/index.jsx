import React from 'react';
import './style.less';
import Item from './item/index';

class CommentList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
			<div className="comment-list">
			    <p className="commentHeader">顾客评论</p>
				{data.length? '':<div className="not-comment">暂时还没有评论</div>}
				{data.map((item, index) => {
					return <Item key={index} data={item}/>
				})}
			</div>
		);
	}
}

export default CommentList;