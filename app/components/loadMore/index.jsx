import React from 'react';

import './style.less';

class LoadingMore extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="load-more">
				{this.props.isLoading ?
				    <span>加载中...</span>:
				    <span onClick={this.handleLoadMore.bind(this)}>加载更多</span>}
			</div>
		);
	}

    componentDidMount() {
    	let timeOutId = null;
  
    	let callBack = () => {
    		this.handleLoadMore();
    	}
    	window.onscroll = function(){

    		var docHeight = document.documentElement.offsetHeight||
	    	                document.body.offsetHeight;
	    	var docClientH = document.documentElement.clientHeight ||
	    	                 document.body.clientHeight;
	    	var scrTop = document.documentElement.scrollTop ||
	    	                 document.body.scrollTop;

	    	if(docClientH + scrTop -docHeight >-1){
	    		if(timeOutId){
	    			clearTimeout(timeOutId);
	    		}
	    		timeOutId = setTimeout(callBack,50);
	    	}

    	}
    }

	handleLoadMore() {
		
		this.props.loadMoreData();
		
	}
}

export default LoadingMore;