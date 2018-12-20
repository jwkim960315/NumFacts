import React from 'react';

import TypeTab from './TypeTab';

class NumberForm extends React.Component {
	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
	}

	state = { 
		num: '',
		selectedType: "trivia"
	}

	onInputChange(e) {
		this.setState({ num: e.target.value });
	};

	onSelectChange(e) {
		this.setState({ selectedType: e.target.value });
	}

	render() {
		return (
			<form 
				onSubmit={e => this.props.onSearchSubmit(e,this.state)}
			>
				<div className="row">
					<div className="col-sm-10">
						<div className="form-group">
							<label htmlFor="number"></label>
							<input 
								value={this.state.num}
								type="text" 
								className="form-control" 
								id="number"
								placeholder="Please type in a single number or a date..."
								autoComplete="off"
								autoFocus="on"
								onChange={e => this.onInputChange(e)} 
							/>
							<small id="numberHelpBlock" className="form-text text-muted">
							  Ex) 323, 10/31, ...
							</small>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="form-group">
							<label htmlFor="type"></label>
							<TypeTab 
								types={this.props.types} 
								selectedType={this.state.selectedType}
								onSelectChange={this.onSelectChange} 
							/>
						</div>
					</div>
				</div>
			</form>
		);
	}
};

export default NumberForm;