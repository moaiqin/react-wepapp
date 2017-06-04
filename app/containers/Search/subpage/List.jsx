import React from 'react';
import {getSearchData} from '../../../fetch/search/search';
import SearchListItems from '../../../components/searchList';
import LoadMore from '../../../components/loadMore';

const intialState = {
	data:[],
	hasMore:true,
	page:1,
	isLoading:false
}

class SearchList extends React.Component {
	constructor(props, contsxt) {
		super(props, contsxt);
		this.state = intialState;
	}
	render() {
		return (
			<div>
			    {this.state.data.length?
			    	<SearchListItems data={this.state.data}/>:
			    	<p>加载中...</p>
			    }
			    {this.state.hasMore ? 
			    	<LoadMore
			    	isLoading={this.state.isLoading}
			    	loadMoreData={this.handleLoadMore.bind(this)}/> :''}
			</div>
		);
	}
	componentDidMount() {
		
		this.handleSearchFirstData();
	}

	//当中心加载的时候不会再走componentDidMount，所以
	componentDidUpdate(prevProps, prevState) {
		//之前状态
		const keyword = prevProps.keyword;
		const type = prevProps.type;

		if(keyword === this.props.keyword && type === this.props.type){
			return;
		}
		//重置state
		
		this.setState(intialState);

		//从新加载第一页面的数据
		this.handleSearchFirstData();
	}

	handleSearchFirstData(){
		
		let cityName = this.props.cityName;
		let type = this.props.type;
		let keyword = this.props.keyword || '';
		var result = getSearchData(0, cityName, type, keyword);
		this.handleResult(result);
	}

	handleResult(result) {
		let resultData = result.then(res => {
			return res.json();
		}).then(json => {
			const data = json.data;
			const hasMore = json.hasMore;
			this.setState({
				hasMore:hasMore,
				data:this.state.data.concat(data),
				isLoading:false
			});
		})
	}

	//加载更多
	handleLoadMore() {
		if(!this.state.hasMore)
			return;
		this.getMorePageData(this.state.page);
	}

	getMorePageData(page) {
		let cityName = this.props.cityName;
		let type = this.props.type;
		let keyword = this.props.keyword || '';
		//更新页数和加载状态
		this.setState({
			isLoading:true,
			page:this.hasMore? page + 1: page
		})
		var result = getSearchData(page, cityName, type, keyword);
		this.handleResult(result);
	}
}

export default SearchList;