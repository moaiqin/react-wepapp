import React from 'react';

import './style.less';

class SearchInput extends React.Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			val:''
		}
	}
	render() {
		
		return (
			<input 
			type="text"
			value={this.state.val}
			className="search-input" 
			onChange={this.changHandle.bind(this)}
			onKeyUp={this.keyUpHandle.bind(this)}
			placeholder="请输入关键字"/>
		);
	}
	componentDidMount() {
		this.setState({
			val: this.props.value || ''
		})
	}
	changHandle(ev) {
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		this.setState({
			val:target.value
		})
	}

	keyUpHandle(ev){
		var ev = ev || window.event;
		if(ev.keyCode !== 13){
			return;
		}
		this.props.enHandle(this.state.val)
	}
}

export default SearchInput;
