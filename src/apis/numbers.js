import axios from 'axios';

export default axios
	.create({
		baseURL: 'http://numbersapi.com',
		withCredentials: false
	});


