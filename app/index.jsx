import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';


import './static/css/common.less';
import './static/css/font.less';
import ReactMap from './router/routerMap';
import configureStore from './store/configureStore';
// // import fn from './redux-demo';
// // fn();
// const store = configureStore();
// render(
//     <Provider store={store}>
//     	<Hello/>
//     </Provider>,
//     document.getElementById('root')
// )
const store = configureStore();
render(
	<Provider store={store}>
	   <ReactMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
);
