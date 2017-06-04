import React from 'react';
import './style.less';
import {getInfoData} from '../../../fetch/detail/detail';
import DetailInfoMsg from '../../../components/DetailInfo';

class DetailInfo extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data:false
		}
	}
	render() {
		return (
			<div>
				{this.state.data ?
					<DetailInfoMsg data={this.state.data}/>:
					<p>加载中....</p>}
			</div>
		);
	}
	componentDidMount() {
		let id = this.props.infoId;
		this.getDetailInfo(id);
	}

	getDetailInfo(id) {
		var result = getInfoData(id);
		this.handleInfoResult(result);
	}
	handleInfoResult(result) {
		result.then(res => {
			return res.json();
		}).then(json => {
			const data = json;
			this.setState({
				data:data
			})
		}).catch(function(err){
			console.log('err:' +err);
		})
	}
}

export default DetailInfo;