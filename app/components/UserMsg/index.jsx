import React from 'react';
import './style.less';

class UserMes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="user-msg-list">
				<div >
					<i className="icon-user"></i>
					<span>{this.props.username}</span>
					<span className="float-right">></span>
				</div>
				<div>
					<i className="icon-map-marker"></i>
					<span className="user-map">{this.props.cityName}</span>
					<span className="float-right">></span>
				</div>
				<div className="user-info clear-fix">
					<div>
						<p>余额</p>
						<span>10.00</span>
					</div>
					<div>
						<p>红包</p>
						<span>1个</span>
					</div>
					<div>
						<p>积分</p>
						<span>4000</span>
					</div>
				</div>
				<div className="user-action">
				    <p>资料管理<span className="float-right">></span></p>
					<p>收货地址<span className="float-right">></span></p>
					<p>你的收藏<span className="float-right">></span></p>
					<p>猜你喜欢<span className="float-right">></span></p>
					<p>邀请有奖<span className="float-right">></span></p>
					<p>积分商城<span className="float-right">></span></p>
					<p>服务中心<span className="float-right">></span></p>
					<p>订单管理<span className="float-right">></span></p>
				</div>
			</div>
		);
	}
}

export default UserMes;