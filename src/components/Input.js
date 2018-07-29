import React from "react";

const input = function(props) {
	console.log(props);
	return (
		<label>
          {props.properties.label}
          <input maxLength={props.properties.maxLength} type={props.properties.type} required={props.properties.required} className="col-xs-3" />
        </label>
	)
};

export default input;