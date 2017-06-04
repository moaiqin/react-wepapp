import React from 'react';
import './style.less';

class StoreInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buyAndStore clear-fix">
			   <div>
			   	   { this.props.isStore?
			   	     <button onClick={this.handleClickStore.bind(this)}>取消收藏</button>:
			   	     <button onClick={this.handleClickStore.bind(this)}>收  藏</button>}
			   </div>
			   <div>
			   	   <button onClick={this.handleClickBuy.bind(this)}>购  买</button>
			   </div>
			</div>
		);
	}

	handleClickStore() {
		let handleStore = this.props.handleStore;
		handleStore();
	}

	handleClickBuy() {
		let handleBuy = this.props.handleBuy;
		handleBuy();
	}
}
export default StoreInfo;