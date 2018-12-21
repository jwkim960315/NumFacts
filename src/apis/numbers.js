import axios from 'axios';
import http from 'http';

export default axios
	.create({
		baseURL: 'http://numbersapi.com',
		withCredentials: false,
		httpAgent: new http.Agent({ keepAlive: true })
	});


