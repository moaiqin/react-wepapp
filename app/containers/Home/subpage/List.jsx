import React from 'react';
import {getListData} from '../../../fetch/home/home.js';

import HomeList from '../../../components/homeList/index';
import LoadMore from '../../../components/loadMore';
import './style.less';


class List extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data:[],
			hasMore:true,
			isLoading:false,
			page:1
		}
	}
	render() {
		return (
			<div>
				<h2 className="mayYouLive">猜你喜欢</h2>
				<div>
					{this.state.data.length? 
						<HomeList data={this.state.data}/>:
						<p>加载中</p>}
				</div>
				<div>
				    {this.state.hasMore?
				        <LoadMore isLoading={this.state.isLoading} 
				        loadMoreData={this.loadMoreData.bind(this)} />:''}
				</div>
			</div>

		);
	}
	componentDidMount() {
		const cityName = this.props.cityName;
		let result = this.handleListDate(cityName,0);
		this.resultHandle(result);
	}

    //加载更多列表数据
    loadMoreData() {
    	const cityName = this.props.cityName;
    	const page = this.state.page;

    	//数据获取完之后更新statte里的page,isloding；

    	this.setState({
    		isLoading :true,
    		page:this.state.hasMore? this.state.page + 1:this.state.page
    	});
    	let result=this.handleListDate(cityName,page);
    	this.resultHandle(result);   

    }

	handleListDate(city,page) {
		return getListData(city,page);
	}

	resultHandle(result) {
		result.then((res) => {
			return res.json();
		}).then(json => {
			const hasMore = json.hasMore;
			const data = json.data;
			this.setState({
				hasMore:hasMore,
				data:this.state.data.concat(data),
				isLoading:false
			});
		})
	}
}

export default List;