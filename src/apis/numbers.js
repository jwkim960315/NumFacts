import axios from 'axios';

export default axios
	.create({
		baseURL: 'http://numbersapi.com',
		// headers: {
		// 	'Access-Control-Allow-Origin': '*',
		// 	"Access-Control-Allow-Methods": "GET,POST",
		// 	'Access-Control-Allow-Headers': 'Content-Type'
		// }
		crossdomain: true
	});


