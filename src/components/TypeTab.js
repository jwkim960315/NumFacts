import React from 'react';

import OptionList from './optionList';

class TypeTab extends React.Component {
	render() {
		return (
			<select 
				defaultValue={this.props.selectedType} 
				onChange={e => this.props.onSelectChange(e)}
				className="form-control"
				id="type"
			>
				<OptionList types={this.props.types} />
			</select>
		);
	}
};

export default TypeTab;