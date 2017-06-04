import {post} from '../post.js';
import {get}  from '../get.js';

export function getData() {
	let result = get('/api/homead');
	return result;
}

export function getListData(city,page) {
	let result = get('/api/homeList/'+encodeURIComponent(city)+'/'+page);
	return result;
}
