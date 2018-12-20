// CSS
import '../css/App.css';


import React from 'react';

// APIs & Data
import numbers from '../apis/numbers';
import types from '../apis/types';

// Components
import NumberForm from './NumberForm';
import Result from './Result';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	state = { 
		funFact: ''
	}

	async onSearchSubmit(e,{ num, selectedType }) {

		e.preventDefault();
		try {
			if (num === '') {
				this.setState({ funFact: "You have not entered in a number yet!" });
				return;
			};

			numbers.interceptors.request.use(config => {
			    this.setState({ funFact: 'Data Loading...' });
			    return config;
		  	}, err => {
		    	this.setState({ funFact: 'Unknown error occurred. Try it Later!' });
		    	return Promise.reject(err);
		  	});
			const response = await numbers.get(`/${num}/${selectedType}`);	
			this.setState({ funFact: response.data });			
		} catch(err) {
			this.setState({ funFact: "You have entered in an incorret number or a date. Try again!"});
		}
		

	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="col-sm title">
						<i className="fas fa-infinity"></i>
						Num Facts
						<i className="fas fa-infinity"></i>
					</h1>
				</div>
				<NumberForm types={types} onSearchSubmit={this.onSearchSubmit} />
				<hr />
				<Result funFact={this.state.funFact} />
			</div>
		);
	}
};

export default App;