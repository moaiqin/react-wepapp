import React from 'react';
import { getCommentData } from '../../../fetch/detail/detail';
import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/loadMore';
import './style.less';

class Comment extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			hasMore:true,
			data:[],
			page:1,
			isLoading:false
		}
	}
	render() {
		var infoId = this.props.infoId;
		return (
			<div className="comment-container">
				{this.state.data.length?
					<CommentList data={this.state.data}/>:
					<p>加载中...</p>}
			    {this.state.hasMore ?
			    	<LoadMore 
			    	isLoading={this.state.isLoading}
			    	loadMoreData={this.loadMoreData.bind(this)}/>:''}
			</div>
		);
	}

	componentDidMount() {
		this.getFirstPageComment();
	}

	getFirstPageComment() {
		var id = this.props.infoId;
		var result = getCommentData(0,id);
		this.handleResult(result);
	}

	handleResult(result) {
		result.then(res => {
			return res.json()
		}).then(json => {
			var data = json.data;
			this.setState({
				data:this.state.data.concat(data),
				hasMore:json.hasMore,
				page:json.hasMore? this.state.page + 1 : this.state.page,
				isLoading:false
			})
		}).catch(err => {
			console.log("err:" +err);
		})
	}
	loadMoreData() {
		if(!this.state.hasMore)
			return;
		this.loadMorePage(this.state.page);
	}
	loadMorePage(page) {
		let id = this.props.infoId;
		this.setState({
			isLoading:true
		})
		var result = getCommentData(page,id);
		this.handleResult(result);
	}
}

export default Comment;