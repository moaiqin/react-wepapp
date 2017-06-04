import React from 'react';
import {getData} from '../../../fetch/home/home.js';

import HomeAd from '../../../components/homeAd/';

class Ad extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			data:[]
		}
	}
	render() {
		//{里面可以直接放js代码或者html代码}
		return (
			<div>
				{this.state.data.length?
					<HomeAd data={this.state.data} />:
					<div>加载中</div>}
			</div>
		);
	}
	componentDidMount() {
		//获取广告数据
		var result = getData();
		result.then((res) => {
			return res.json();
		}).then((json) =>{
			const data = json;
			if(data.length){
				this.setState({
					data:data
				});
			}
		})
	}
}

export default Ad;