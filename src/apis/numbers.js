import axios from 'axios';

export default axios
	.create({
		baseURL: 'http://numbersapi.com',
		headers: {
			'Access-Control-Allow-Origin' : '*'
		}
	});


