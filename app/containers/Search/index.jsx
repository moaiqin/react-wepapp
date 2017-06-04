import React from 'react';
import SearchHeader from '../../components/searchHeader';
import SearchList from './subpage/List';
import {connect} from 'react-redux';

class Search extends React.Component {
	constructor(props , context) {
		super(props , context);
	}
	render() {
		const params = this.props.params;
		return (
			<div>
				<SearchHeader 
				type={params.type}
				keyword={params.keyword}/>
				<SearchList 
				keyword={params.keyword || ''}
				cityName={this.props.userinfo.cityName}
				type={params.type}/>
			</div>
		);
	}
}

function mapStateToProps (state){
	return {
		userinfo:state.userinfo
	}
}
function mapDispatchToProps (dispatch){
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);

