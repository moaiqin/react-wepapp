import 'whatwg-fetch';
import 'es6-promise';

export function getData() {
	var result = fetch('/api/1',{
		credentials:'include',
		headers: {
			'Accept': 'application/json, text/plain,*/*'
		}
	});
	result.then(res => {
		return res.text();
	}).then(text => {
		console.log(text);
	})
}

export function postData() {
	var result = fetch('/pai/post',{
		method:"POST",
		credentials: 'include',
		headers: {
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencode'
		}
		//注意post的参数形式
		body: 'a=100&b=200'
	})
	result.then(res => {
		return res.json()
	}).then(json => {
		console.log(json);
	})
}