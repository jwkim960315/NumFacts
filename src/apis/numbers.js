import axios from 'axios';
import http from 'http';

export default axios
	.create({
		baseURL: 'http://numbersapi.com'
	});


