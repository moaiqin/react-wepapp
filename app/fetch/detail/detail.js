import {get} from '../get.js';

export function getInfoData(id) {
	let result = get('/api/detail/info/' + id);
	return result;
}

export function getCommentData(page, id) {
    let result = get('/api/detail/comment/' + page + '/' +id);
    return result;
}