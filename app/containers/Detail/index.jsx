import React from 'react';
import DetailHeader from '../../components/cityHeader';
import DetailInfo from './subpage/info';
import Comment from './subpage/comment';
import Store from './subpage/store';

class Detail extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var params = this.props.params;
		return (
			<div>
				<DetailHeader title="商户详情"/>
				<DetailInfo infoId={params.id}/>
				<Store id={params.id} />
				<Comment infoId={params.id}/>
			</div>
		);
	}
}

export default Detail;