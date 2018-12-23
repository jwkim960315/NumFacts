import axios from 'axios';

export default axios
	.create({
		baseURL: 'http://numbersapi.com',
		headers: {
			'Access-Control-Allow-Origin': 'https://num-fact.herokuapp.com/',
			"Access-Control-Allow-Headers": "X-Requested-With",
			'Access-Control-Allow-Headers': 'Content-Type'
		}
	});


