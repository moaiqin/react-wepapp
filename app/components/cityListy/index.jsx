import React from 'react';

import './style.less';

class CityList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>西安</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>兰州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>南宁</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>河池</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>长沙</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>宁夏</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this)}>沈阳</span>
                    </li>
                   
                </ul>
            </div>
		);
	}
	clickHandle(ev){
		
		var ev = ev||window.event;
		var target = ev.target || ev.srcElement;

		this.props.changeCityFn(target.innerHTML);

	}
}

export default CityList;