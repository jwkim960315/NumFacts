import React from 'react';


const OptionList = props => {
	return props.types.map(
		(type,index) => <option value={type} key={index}>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</option>
	);

	
};

export default OptionList;