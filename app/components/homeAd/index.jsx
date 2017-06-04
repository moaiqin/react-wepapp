import React from 'react';
import './style.less';

class HomeAd extends React.Component {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		//map函数返回的是一个新的数组
		const data = this.props.data;
		// let arr = [];
		// data.forEach((item,index) =>{
		// 	arr.push(<div>
		// 		<img src={item.img}/>
		// 	</div>);
		// })
		return (
			<div id="home-ad">
			    <h2>超值特价</h2>
				<div className="ad-container clear-fix">
				    {data.map((item, index) => {
				   	   return <div key={index} className="ad-item float-left">
				   	   	   <a href={item.link} target="_blank">
				   	   	      <img src={item.img}/>
				   	   	   </a>
				   	   </div>
				    })}
				</div>
			</div>
		);
	}
}
export default HomeAd;